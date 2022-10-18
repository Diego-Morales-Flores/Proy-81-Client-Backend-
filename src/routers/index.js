const express = require('express');
const routers = express.Router();

routers.use('/auth', require('./authRouter'));


module.exports = routers;
