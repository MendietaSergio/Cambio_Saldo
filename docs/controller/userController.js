const {validationResult} = require('express-validator');
const db = require('../database/models');

module.exports = {
    login: (req,res)=>{
        res.render('login',{
            title:'Login',
            css:'login.css',
            script:'loginValidation.js'
        })
    },
    processLogin:(req,res)=>{
        let errors  = validationResult(req);
        
        if(!errors.isEmpty()){
            db.Usuarios.findOne({
                where:{
                    email:req.body.email
                }
            })
            .then(user =>{
                req.session.user = {
                    id: user.id,
                    nick: user.nombre + " " + user.apellido,
                    email: user.email,
                    avatar: user.avatar,
                    rol: user.rol
                }
                res.redirect('/')
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
                script:'loginValidation.js',
            })
            .catch(error => res.send(error))
        }
    }
}