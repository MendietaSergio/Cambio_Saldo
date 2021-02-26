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
        }
    }

    let config = {
        tableName: "mediosdepagos",
        timestamps: false
    }

    const MediosDePago = sequelize.define(alias,cols,config);
/*
    MediosDePago.associate = function(models){
        MediosDePago.hasMany(models.Coeficiente,{
            as:"coeficiente",
            foreingKey : "id"
        })
    }*/

    return MediosDePago;
}