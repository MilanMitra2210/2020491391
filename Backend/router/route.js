const express = require('express');
const { getTrains, searchTrain } = require('../controller/ticket-controller');
const router = express.Router();

router.get('/',(req, res) =>{
    res.send('Server is up and running');
});
router.get('/alltrains',getTrains);

router.get('/train/:number',searchTrain);

module.exports = router;