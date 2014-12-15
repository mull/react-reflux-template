console.log("Starting server");

var express = require('express')
    app = express(),
    port = process.env.PORT || 4000;


var serveAsset = function(req, res, next) {
    if (req.method !== 'GET') {
        next();
        return;
    }

    var file = req.path.split('/assets/');
    file.shift();
    file = file.join('');

    res.sendFile(__dirname + '/public/assets/' + file);
};


app.get('/*', function(req, res, next) {
    if (req.path.match(/assets/)) {
        return serveAsset(req, res, next);
    }

    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port);
console.log("Now listening at http://localhost:" + port);