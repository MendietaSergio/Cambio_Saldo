const db = require('../database/models');

const round = (numero) =>{

    if(numero>0){        
        return Number.parseFloat(numero).toFixed(2);
    }
}

module.exports = {
    getValorEntrada:(req,res) =>{
        const {numEntrada, origen,destino} = req.body;
        //let origen = 1;
        //let destino = 3;
        db.Coeficientes.findOne({
            where: {
                mediosdepagos1: origen,
                mediosdepagos2: destino
            }
        })
            .then(result =>{
                let comision = (numEntrada * result.coeficiente) / 100;
                let numSalida = round(numEntrada - comision);
                console.log(numSalida);
                res.json({
                    numSalida
                })
            })        
    },
    getValorSalida:(req,res)=>{
        const{numSalida, origen, destino} = req.body;
        db.Coeficientes.findOne({
            where: {
                mediosdepagos1: origen,
                mediosdepagos2: destino
            }
        })
            .then(result =>{
                let comision = (numSalida * result.coeficiente) / 100;
                let numEntrada = round (numSalida + comision);
                console.log(numEntrada);
                res.json({
                    numEntrada
                })
            })
    }
}