var express = require('express');
var router = express.Router();

//CONTROLADORES
const indexController = require('../controller/indexController');


/* GET home page. */
router.get('/', indexController.home);
router.get('/formulario',indexController.form);

module.exports = router;
