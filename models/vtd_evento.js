const db = require("../database/db.js");
const DataTypes = require("sequelize");
const Sequelize = require("sequelize");

const sequelize = new Sequelize('mysql::memory:')

const vtd_evento = sequelize.define('vtd_evento', {
    Accion: { type: DataTypes.STRING },    
    Emp_cCodigo: { type: DataTypes.STRING },
    Pan_cAnio: { type: DataTypes.STRING },
    Per_cPeriodo: { type: DataTypes.STRING },
    Dvm_cNummov: { type: DataTypes.STRING },
    Cab_cCatalogo : { type: DataTypes.STRING },
    Dvd_nOrden: { type: DataTypes.INTEGER },
    Dvd_nImporte: {type: DataTypes.DECIMAL},
    Dvd_cEstado  : {type: DataTypes.STRING}
   
})

module.exports = vtd_evento;


