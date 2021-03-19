var express = require('express');
var router = express.Router();

//CONTROLADORES
const userController = require('../controller/userController.js');
const apiEditController = require('../controller/apiController.js');
//VALIDACION
const loginValidation = require('../validation/loginValidation');

/* GET users listing. */
router.get('/', userController.login);
router.post('/',loginValidation, userController.processLogin);

router.get('/edit',userController.edit);
router.post('/api/edit',apiEditController.processEdit);

router.get('/logout',userController.logout);
module.exports = router;
