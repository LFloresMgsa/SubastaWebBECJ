/*-------------------------------------------------
Componente: Procedimientos No Transaccionales
-------------------------------------------------*/


const db = require("../database/db.js");

const oEventoDet = require("../models/vtd_evento.js");

const getEventosDet = async (request, response) => {
    try {
        // create mysql connection
        const connection = await db.getConnection();

        var params = request.body;
        oEventoDet.Accion = params.Accion;
        oEventoDet.Emp_cCodigo = params.Emp_cCodigo;
        oEventoDet.Pan_cAnio = params.Pan_cAnio;
        oEventoDet.Per_cPeriodo = params.Per_cPeriodo;
        oEventoDet.Dvm_cNummov = params.Dvm_cNummov;
        oEventoDet.Cab_cCatalogo = params.Cab_cCatalogo;

        oEventoDet.Dvd_nOrden = params.Dvd_nOrden;
        oEventoDet.Dvd_nImporte = params.Dvd_nImporte;
        oEventoDet.Dvd_cEstado = params.Dvd_cEstado;


        connection.query("CALL sp_vtd_evento (?,?,?,?,?,?,?,?,?) ", [
            oEventoDet.Accion, oEventoDet.Emp_cCodigo, oEventoDet.Pan_cAnio, oEventoDet.Per_cPeriodo,
            oEventoDet.Dvm_cNummov, oEventoDet.Cab_cCatalogo, oEventoDet.Dvd_nOrden, oEventoDet.Dvd_nImporte, oEventoDet.Dvd_cEstado],
            function (error, results, fields) {

                if (error) {

                    response.json({ error: error.message });

                } else {
                    response.json(results);
                }
            });
    } catch (error) {
        response.status(500);
        response.send(error.message);
    }
};

// export functions
module.exports = {
    getEventosDet,

};


