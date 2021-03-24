var express = require('express');
var router = express.Router();

//CONTROLADORES
const indexController = require('../controller/indexController');
const apiValorController = require('../controller/apiController');

/* GET home page. */
router.get('/', indexController.home);
router.post('/apis/valor', apiValorController.getValorEntrada);
router.post('/apis/valores', apiValorController.getValorSalida);

router.post('/',indexController.processForm);



module.exports = router;
