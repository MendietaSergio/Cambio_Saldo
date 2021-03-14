const {validationResult} = require('express-validator');
const db = require('../database/models');

module.exports = {
    login: (req,res)=>{
        res.render('login',{
            title:'Login',
            css:'login.css',
            //script:'loginValidation.js'
        })
    },
    processLogin:(req,res)=>{
        
        let errors  = validationResult(req);
        console.log(errors.mapped());
        //res.send(errors.mapped())
        if(errors.isEmpty()){
            db.Usuarios.findOne({
                where:{
                    email:req.body.email
                }
            })
            .then(user =>{
                req.session.user = {
                    id: user.id,
                    nick: user.nombre,
                    email: user.email,
                    rol: user.rol
                }
                return res.redirect('/')
            })
            .catch(error =>{
                console.log("entra user>error");
                res.send(error);
            })
        } else {
            res.render('login',{
                title:'Login',
                css:'login.css',
                errors: errors.mapped(),
                old: req.body,
            })
            .catch(error => res.send(error))
        }
    },
    edit:(req,res)=>{
        db.MediosDePagos.findAll()
            .then(medios => {
                res.render('edit', {
                    title: "Editar coeficiente",
                    css: 'edit.css',
                    mediosdepago: medios,
                    script:"indexEcuacion.js"
                })
            })
            .catch(error =>{
                res.send(error)
            })
    },
    processEdit:(req,res)=>{

    },
    logout:(req,res)=>{
        req.session.destroy()
        return res.redirect('/');
    }
}