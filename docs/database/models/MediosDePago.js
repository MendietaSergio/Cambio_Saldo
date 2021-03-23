module.exports = (sequelize, dataTypes) => {
    let alias = 'MediosDePagos';

    let cols = {
        id : {
            type : dataTypes.INTEGER(11),
            allowNull : false,
            autoIncrement : true,
            primaryKey : true
        },
        nombre : {
            type : dataTypes.STRING(45),
            allowNull : false
        },
        image: {
            type : dataTypes.STRING(100),
            allowNull : false
        },
        campoAdicional: {
            type : dataTypes.STRING(100),
            allowNull : false
        }
    }

    let config = {
        tableName: "mediosdepagos",
        timestamps: false
    }
    
    const MediosDePago = sequelize.define(alias,cols,config);

    return MediosDePago;
}