const cds = require('@sap/cds');
const { SELECT } = cds.ql;

const { ServiceLogger } = require('../utils/logger');
/**
 * Acceso a datos de "Proveedores" en el servicio remoto S/4HANA.
 */
class LogicServiceProv {

    #s4Connector;

    /**
     * @param {s4Connector<object>} s4Connector
     */
    constructor(s4Connector) {
        this.#s4Connector = s4Connector;
    }

    /**
     * Obtener datos de las sociedades
     * @returns {Promise<Array<object>>}
     */
    async onConsultaTablaProv(req) {

        let resultData = [];

        try {

            const { ConsultaTablaProvSet } = this.#s4Connector.entities;

            //const dataRemoteS4 = await this.#s4Connector.run(SELECT('*').from(ConsultaTablaProvSet))

              const dataRemoteS4 = await this.#s4Connector.run(
                   SELECT.from(ConsultaTablaProvSet).where(req.query.SELECT.where)
            );

            if (dataRemoteS4) {
                resultData = dataRemoteS4.map(item => ({
                    ...item,
                    flg_iqsoft: false
                }));
            }

            return resultData;

        } catch (error) {
            req.error(502,'ERROR_MSG_001',[req.entity]);
        }
    }

    /**
     * Obtener datos de conformidades y/o ordenes de compra
     * @returns {Promise<Array<object>>}
     */
    async onListaPreregistroFactura(req){

    }
}

module.exports = LogicServiceProv;