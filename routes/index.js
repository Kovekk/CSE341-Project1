const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger-output.json');

router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(swaggerDocument)); 

router.use('/contacts', require('./contacts'));



module.exports = router;