const express = require('express');
const app = express();
const path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/client/index.html'));
});

app.use('/', express.static(__dirname + '/src/client/public'));

app.listen(8080);