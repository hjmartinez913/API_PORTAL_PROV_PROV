using {sap.cap.s4appprov as entities} from '../db/schema';
using {ZMMGS_REGPROVEEPP_CRUD_SRV1 as remote_S4_PPPROV} from './external/ZMMGS_REGPROVEEPP_CRUD_SRV1';

service RemoteServiceAPIProv {

    //Entidades afectadas con la fuente de datos de un tercero
    entity ConsultaTablaProvSet            as projection on entities.ConsultaTablaProvSet;

    //Entidades no afectadas
    @cds.external        : true
    @cds.persistence.skip: true
    @readonly
entity ContactoComercialDetSet         as projection on remote_S4_PPPROV.ContactoComercialDetSet;
entity InformacionContableDetSet       as projection on remote_S4_PPPROV.InformacionContableDetSet;
entity ExpPrincClientesDetSet          as projection on remote_S4_PPPROV.ExpPrincClientesDetSet;
entity SistemaGestionDetSet            as projection on remote_S4_PPPROV.SistemaGestionDetSet;
entity CuentasBancariasDetSet          as projection on remote_S4_PPPROV.CuentasBancariasDetSet;

entity Ent_DataSet                     as projection on remote_S4_PPPROV.Ent_DataSet;
entity ConsultaSolicitudesProvSet      as projection on remote_S4_PPPROV.ConsultaSolicitudesSet;   // renombrada: colisión con el otro servicio
entity EjecutivosEmpresaDetSet         as projection on remote_S4_PPPROV.EjecutivosEmpresaDetSet;
entity LineadeProduccionSet            as projection on remote_S4_PPPROV.LineadeProduccionSet;
entity LineadeProduccionDetSet         as projection on remote_S4_PPPROV.LineadeProduccionDetSet;
entity SistemasCalidadDetSet           as projection on remote_S4_PPPROV.SistemasCalidadDetSet;
entity ReferenciasFinDetSet            as projection on remote_S4_PPPROV.ReferenciasFinDetSet;
entity SistemaGestionSeguridadDetSet   as projection on remote_S4_PPPROV.SistemaGestionSeguridadDetSet;
entity LineaNegocioDetSet              as projection on remote_S4_PPPROV.LineaNegocioDetSet;
entity LineaProductoDetSet             as projection on remote_S4_PPPROV.LineaProductoDetSet;
entity ReporteProveedoresSet           as projection on remote_S4_PPPROV.ReporteProveedoresSet;
entity GruposCategoriasProveedoresSet  as projection on remote_S4_PPPROV.GruposCategoriasProveedoresSet;

}