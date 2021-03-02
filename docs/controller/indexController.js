const db = require('../database/models');

module.exports = {
    home: (req, res) => {
        db.MediosDePagos.findAll()
            .then(medios => {
                res.render('index', {
                    title: "Saldo",
                    css: 'index.css',
                    mediosdepago: medios,
                    script:"contactValidacion.js"
                })
            })
            .catch(error =>{
                res.send(error)
            })
    },
    processHome:(req,res) =>{

    },
    form:(req, res) =>{
        res.render('form',{
            title: 'Contacto',
            css:'form.css',
            script: 'contactValidation.js'
        })
    }
}