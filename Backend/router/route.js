const express = require('express');
const { getTrains, searchTrain } = require('../controller/ticket-controller.js');

const route = express.Router();


route.get('/trains/:type',getTrains);
route.get('/searchtrain/:number',searchTrain);

module.exports = route;