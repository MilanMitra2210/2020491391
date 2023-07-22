const express = require('express');
const router = express.Router();
const cors = require('cors');
const routes = require('../router/route.js');

router.get('/',(req, res) =>{
    res.send('Server is up and running');
});

module.exports = router;