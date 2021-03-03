module.exports = (sequelize, dataTypes) =>{
    let alias = "Usuarios";

    let cols = {
        id : {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        nombre : {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(45),
            allowNull: false
        }
    }

    let config = {
        tableName: "usuario",
        timestamps: false
    }
    const Usuario = sequelize.define(alias, cols, config);

    return Usuario;
}