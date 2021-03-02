var express = require('express');
var router = express.Router();

//CONTROLADORES
const userController = require('../controller/userController.js');

//VALIDACION
const loginValidation = require('../validation/loginValidation');

/* GET users listing. */
router.get('/',loginValidation, userController.login);

module.exports = router;
