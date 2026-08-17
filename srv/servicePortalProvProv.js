const cnst = require('./constants/remoteServices');
const cds = require('@sap/cds');
const LogicServiceProv = require('./logicService/logicServiceProv');
const { passthrough, custom, consolidated } = require('./logicService/entityRoutes');
const { ServiceLogger } = require('./utils/logger');

class RemoteServiceAPIProv extends cds.ApplicationService {

    async init() {

        /*** CONEXIÓN A LOS BACKENDS ***/

        //Conexión al S4-OnPremise
        this.remoteServiceS4 = await cds.connect.to(cnst.S4.REMOTE_SERVICE_NAME);

        //this.soapService = new SoapService(cnst.SOAP.WSDL_URL, { timeout: cnst.SOAP.TIMEOUT_MS || 8000 });

        /*** CAPA DE LÓGICA — recibe ambos clientes por inyección de dependencias ***/
        this.logicServiceProv = new LogicServiceProv(this.remoteServiceS4);


        /*
        this.logicServiceFact = new LogicServiceFact({
            s4: this.remoteServiceS4,
            soap: this.soapService,
            log: LOG,
        });*/


        /*** REGISTRO DE HANDLERS — dirigido por config/entityRoutes.js ***/

        // 1) Entidades con lógica directa del S4
        this.on('READ', passthrough, req => this._passthroughS4(req));

        // 2) Entidades con lógica custom sobre un solo backend
        custom.forEach(({ entity, handler }) => {
            this.on('READ', entity, req => this.logicServiceProv[handler](req));
        });

        // 3) Entidades que consolidan S4 + backend secundario
        consolidated.forEach(({ entity, handler }) => {
            this.on('READ', entity, req => this.logicServiceProv[handler](req));
        });


        /*** MANEJO DE ERRORES CENTRALIZADO ***/
        this.on('error', (err, req) => {
            ServiceLogger.logError(`[${req.event} ${req.entity}]`, err);
        });

        return super.init();
    }


    async _passthroughS4(req) {
        try {
            return await this.remoteServiceS4.tx(req).run(req.query);
        } catch (err) {
            req.error(502,'ERROR_MSG_001',[req.entity]);
        }
    }

}

module.exports = RemoteServiceAPIProv;