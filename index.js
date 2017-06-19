const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
    if (err) {
        console.log("Could not connected to database");
    } else {
        console.log("Secret: " + config.secret);
        console.log("Connected to Database: " + config.db);
    }
});

app.use(express.static(__dirname + '/client/dist/'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

app.listen(8080, () => {    
    console.log("Listening on Post 8080");
});