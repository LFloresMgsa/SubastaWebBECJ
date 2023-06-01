
const mysql = require("mysql");
const sc = require("./database/StringConection");


function ProcesoActualizacionFechasEvento() {

    let oEventoDet = require("./models/vtd_evento.js");

    let connection;
    try {
        // create mysql connection
        connection =  mysql.createConnection(sc.dbStringConection());

        oEventoDet.Accion = "PROCESO_FECHA";
        oEventoDet.Emp_cCodigo = "015";
        oEventoDet.Pan_cAnio = "2023";
        oEventoDet.Per_cPeriodo = "";
        oEventoDet.Dvm_cNummov = "";
        oEventoDet.Cab_cCatalogo = "";

        oEventoDet.Dvd_nOrden = 0;
        oEventoDet.Dvd_nImporte = 0;
        oEventoDet.Dvd_cEstado = "";

        oEventoDet.Dvd_dInicio= null;
        oEventoDet.Dvd_dFin= null;
        oEventoDet.Dvd_cComentario= "";
        oEventoDet.Dvd_dFechaCrea= null;
        oEventoDet.Dvd_dFechaModifica= null;
        oEventoDet.Dvd_cUserCrea= "";
        oEventoDet.Dvd_CUserModifica= "";

        connection.query("CALL sp_vtd_evento (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) ", [
            oEventoDet.Accion, oEventoDet.Emp_cCodigo, oEventoDet.Pan_cAnio, oEventoDet.Per_cPeriodo,
            oEventoDet.Dvm_cNummov, oEventoDet.Cab_cCatalogo, oEventoDet.Dvd_nOrden, oEventoDet.Dvd_nImporte, oEventoDet.Dvd_cEstado,
            oEventoDet.Dvd_dInicio, oEventoDet.Dvd_dFin, oEventoDet.Dvd_cComentario, oEventoDet.Dvd_dFechaCrea,, oEventoDet.Dvd_dFechaModifica, oEventoDet.Dvd_cUserCrea, oEventoDet.Dvd_CUserModifica ],
            function (error, results, fields) {

                if (error) {

                    console.log({ error: error.message });

                } else {
                    console.log('procesado');
                }
            });
    } catch (error) {
        console.log(error.message);
    } finally {
        if (connection) {
            connection.end();
        }
    }



}

setInterval(ProcesoActualizacionFechasEvento, 10000);