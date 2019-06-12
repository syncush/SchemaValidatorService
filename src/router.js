const { Router } = require('express');
const validateMultipleSchemaMiddleware = require('./middleware');

const router = Router();
router.post('/validate', validateMultipleSchemaMiddleware);

module.exports = router;
