const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const http = require('http');
const cors = require('cors');
const routes = require('./router/route');


const server = http.createServer(app);

app.use(routes);
app.use(cors());

server.listen(port, () => console.log(`Server has started on port ${port}`))