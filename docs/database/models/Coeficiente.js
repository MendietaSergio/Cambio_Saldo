module.exports = (sequelize, dataTypes) =>{
    let alias = "Coeficientes";

    let cols = {
        id : {
            type : dataTypes.INTEGER(11),
            allowNull : false,
            autoIncrement : true,
            primaryKey : true
        },        
        mediosdepagos1: {
            type : dataTypes.INTEGER(11),
            allowNull : false
        },
        mediosdepagos2: {
            type : dataTypes.INTEGER(11),
            allowNull : false
        },
        coeficiente: {
            type : dataTypes.INTEGER(11),
            allowNull : false
        }
    }
    let config = {
        tableName: "coeficiente",
        timestamps: false
    }

    const Coeficiente = sequelize.define(alias,cols,config);
/*
    Coeficiente.associate = function(models){
        Coeficiente.belongsTo(models.MediosDePagos,{
            as:"pago1",
            foreignKey : "mediosdepagos1"
        })
        Coeficiente.belongsTo(models.MediosDePagos,{
            as:"pago2",
            foreignKey: "mediosdepagos2"
        })
    }*/
    return Coeficiente;
}