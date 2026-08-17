namespace sap.cap.s4appprov;

using {ZMMGS_REGPROVEEPP_CRUD_SRV1 as remote_s4_PPPROV} from '../srv/external/ZMMGS_REGPROVEEPP_CRUD_SRV1';

@cds.external        : true
@cds.persistence.skip: true
entity ConsultaTablaProvSet : remote_s4_PPPROV.ConsultaTablaProvSet {
    @Core.Optional
    flg_iqsoft : Boolean;
}