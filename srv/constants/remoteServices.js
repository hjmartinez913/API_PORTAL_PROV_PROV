/**
 * Datos Constantes e información del servicio remoto S/4HANA On-Premise
 * relacionado a Datos Maestros de Proveedores (PPPROV).
 */

module.exports = {
    S4: {
        // TODO: reemplazar por el nombre técnico real del servicio remoto (destination/RFC)
        REMOTE_SERVICE_NAME: 'ZMMGS_REGPROVEEPP_CRUD_SRV1',
        ENTITIES: {
            CONSULTA_TABLA_PROV: 'ConsultaTablaProvSet',
            CONTACTO_COMERCIAL_DET: 'ContactoComercialDetSet',
            INFORMACION_CONTABLE_DET: 'InformacionContableDetSet',
            EXP_PRINC_CLIENTES_DET: 'ExpPrincClientesDetSet',
            SISTEMA_GESTION_DET: 'SistemaGestionDetSet',
            CUENTAS_BANCARIAS_DET: 'CuentasBancariasDetSet',
            ENT_DATA: 'Ent_DataSet',
            CONSULTA_SOLICITUDES_PROV: 'ConsultaSolicitudesSet', // renombrada: colisión con el otro servicio
            EJECUTIVOS_EMPRESA_DET: 'EjecutivosEmpresaDetSet',
            LINEA_DE_PRODUCCION: 'LineadeProduccionSet',
            LINEA_DE_PRODUCCION_DET: 'LineadeProduccionDetSet',
            SISTEMAS_CALIDAD_DET: 'SistemasCalidadDetSet',
            REFERENCIAS_FIN_DET: 'ReferenciasFinDetSet',
            SISTEMA_GESTION_SEGURIDAD_DET: 'SistemaGestionSeguridadDetSet',
            LINEA_NEGOCIO_DET: 'LineaNegocioDetSet',
            LINEA_PRODUCTO_DET: 'LineaProductoDetSet',
            REPORTE_PROVEEDORES: 'ReporteProveedoresSet',
            GRUPOS_CATEGORIAS_PROVEEDORES: 'GruposCategoriasProveedoresSet',
        },
        PAGINATION_DEFAULTS: {
            TOP: 100,
            SKIP: 0,
        }
    }
    
};