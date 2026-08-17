/**
 * Enrutamiento de entidades hacia su tipo de handler.
 * Agregar una entidad nueva = agregar una línea aquí, no un handler nuevo en el service.
 *
 *  - passthrough  → READ directo hacia S4, sin transformación.
 *  - custom       → Lógica propia sobre UN solo backend (S4).
 *  - consolidated → Combina S4 + un backend secundario (SOAP/REST) en una sola respuesta.
 */
const cnst = require('../constants/remoteServices');

module.exports = {

    passthrough: [  
        cnst.S4.ENTITIES.CONTACTO_COMERCIAL_DET,
        cnst.S4.ENTITIES.INFORMACION_CONTABLE_DET,
        cnst.S4.ENTITIES.EXP_PRINC_CLIENTES_DET,
        cnst.S4.ENTITIES.SISTEMA_GESTION_DET,
        cnst.S4.ENTITIES.CUENTAS_BANCARIAS_DET,
        cnst.S4.ENTITIES.ENT_DATA,
        cnst.S4.ENTITIES.CONSULTA_SOLICITUDES_PROV,
        cnst.S4.ENTITIES.EJECUTIVOS_EMPRESA_DET,
        cnst.S4.ENTITIES.LINEA_DE_PRODUCCION,
        cnst.S4.ENTITIES.LINEA_DE_PRODUCCION_DET,
        cnst.S4.ENTITIES.SISTEMAS_CALIDAD_DET,
        cnst.S4.ENTITIES.REFERENCIAS_FIN_DET,
        cnst.S4.ENTITIES.SISTEMA_GESTION_SEGURIDAD_DET,
        cnst.S4.ENTITIES.LINEA_NEGOCIO_DET,
        cnst.S4.ENTITIES.LINEA_PRODUCTO_DET,
        cnst.S4.ENTITIES.REPORTE_PROVEEDORES,
        cnst.S4.ENTITIES.GRUPOS_CATEGORIAS_PROVEEDORES
    ],

    custom: [

    ],

    consolidated: [
        { entity: cnst.S4.ENTITIES.CONSULTA_TABLA_PROV, handler: 'onConsultaTablaProv' },
    ],
};
