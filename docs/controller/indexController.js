const db = require('../database/models');

module.exports = {
    home: (req, res) => {
        db.MediosDePagos.findAll()
            .then(medios => {
                res.render('index', {
                    title: "Saldo",
                    css: 'index.css',
                    mediosdepago: medios
                })
            })
            .catch(error =>{
                res.send(error)
            })
    }
}