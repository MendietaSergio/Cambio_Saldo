const db = require('../database/models');

const round = (numero, decimales =2) =>{
    numeroRegexp = new RegExp('\\d\\.(\\d){' + decimales + ',}');

    if (numeroRegexp.test(numero)) {
        return Number(numero.toFixed(decimales));
    } else {
        return Number(numero.toFixed(decimales)) === 0 ? 0 : numero;
    }
}
/*SOUCIONAR EL PROBLEMA QUE AL CAMBIAR EL VALOR DEL INPUT 2
DA UN MAL RESULTADO EN EL INPUT 1 */
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
                let porcentaje = 100 - result.coeficiente;
                let numEntrada =  round(100 * numSalida / porcentaje);
                res.json({
                    numEntrada
                })
            })
    },
    processEdit: (req,res)=>{
        const {coeficiente, origen, destino} = req.body;
        db.Coeficientes.update({
            coeficiente:coeficiente
        },{
            where: {
                mediosdepagos1:origen,
                mediosdepagos2: destino
            }
        })
            .then(medios =>{
                console.log( req.body);
            })
            .catch(error =>{
                res.send(error)
            })
    }
}