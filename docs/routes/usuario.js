var express = require('express');
var router = express.Router();

//CONTROLADORES
const userController = require('../controller/userController.js');

//VALIDACION
const loginValidation = require('../validation/loginValidation');

/* GET users listing. */
router.get('/', userController.login);
router.post('/',loginValidation, userController.processLogin);

router.get('/edit',userController.edit);
router.post('/edit',userController.processEdit);

router.get('/logout',userController.logout);
module.exports = router;
