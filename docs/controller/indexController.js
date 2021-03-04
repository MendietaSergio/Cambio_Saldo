const db = require('../database/models');
const {validationResult} = require('express-validator');


module.exports = {
    home: (req, res) => {
        db.MediosDePagos.findAll()
            .then(medios => {
                res.render('index', {
                    title: "Saldo",
                    css: 'index.css',
                    mediosdepago: medios,
                    script:"indexEcuacion.js"
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
    },
    processForm: (req,res) =>{
        let errors  = validationResult(req);
        if(errors.isEmpty()){
            return res.redirect('/')   
        } else {
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
        }
    }
}