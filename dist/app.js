'use strict';

//Imports
var express = require('express');

//Start express app
var app = express();
var PORT = 3000;

//Routes
app.get('/', function (req, res) {
    res.json({
        msg: 'Welcome to Invoice builder backend'
    });
});

//Middlewares


app.listen(PORT, function () {
    console.log('Server is running at PORT ' + PORT);
});
//# sourceMappingURL=app.js.map