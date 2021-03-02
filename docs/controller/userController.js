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
            db.Usuario.findOne({
                where:{
                    email:req.body.email
                }
            })
            .then(user =>{
                req.session.user = {
                    id: user.id,
                    nick: user.nombre + " "+ user.apellido,
                    email: user.email,
                    rol: user.rol
                }
                return res.redirect('/')
            })
            .catch(error =>{
                res.send(error);
            })
        } else {
            res.render('login',{
                title:'Login',
                css:'login.css',
                script:'loginValidation.js',
                errors: errors.mapped(),
                old: req.body
            })
        }
    }
}