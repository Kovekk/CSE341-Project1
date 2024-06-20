const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger-output.json');

router.get('/', (req, res) => {res.send('Hello World')});

router.use('/contacts', require('./contacts'));

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument)); 

module.exports = router;