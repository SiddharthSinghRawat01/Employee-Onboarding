const express = require('express');
const router = express.Router();
const LLMroutes = require('./api/LLM/routes/LLM');

router.use('/',LLMroutes);

module.exports = router;