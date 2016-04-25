/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');
// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

//DivanumCore = require('./ws/DivanumCore.js');

// create a new express server
var app = express();

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/webapp'));
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

require("./ws/db/connectionFactory.js")();

app.post('/api/cadastrar', function (req, res) {
    var collection = conexao.collection('usuario');
    collection.insert({
        nome: req.body.nome,
        sexo: req.body.sexo,
        email: req.body.email,
        senha: req.body.senha,
        nascimento: req.body.nascimento
    }, {
        w: 1
    }, function (err, result) {
        res.send(result);
    });
});

app.post('/api/entrar', function (req, res) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader('Access-Control-Allow-Origin', '*');
    var collection = conexao.collection('usuario');
    collection.findOne({
        $and: [{
            'email': req.body.email
        }, {
            'senha': req.body.senha
        }]
    }, function (err, result) {
        res.send(result);
    });
});

app.get('/tone', function (req, res) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Access-Control-Allow-Origin', '*');
    var d = require("./ws/toneAnalyzer.js");
    d(req.body.text, function (err, tone) {
        if (err) {
            res.send('Error');
        } else {
            res.send(JSON.stringify(tone, null, 2));
        }
    });
});

//app.get('/translator', function (req, res) {
//    res.setHeader('Content-Type', 'text/html; charset=utf-8');
//    var d = require("./ws/translator.js");
//    d(req.body.text, function (err, translate) {
//        if (err) {
//            res.send('Error');
//        } else {
//            res.send(JSON.stringify(translate, null, 2));
//        }
//    });
//});

//app.get('/dialog', function (req, res) {
//    res.setHeader('Content-Type', 'text/html; charset=utf-8');
//    var d = require("./ws/dialog.js");
//    d(function (err, dialog) {
//        res.send(err + ";<br>" + dialog);
//    });
//});

// start server on the specified port and binding host
var server = app.listen(appEnv.port, '0.0.0.0', function () {

    // print a message when the server starts listening
    console.log("server starting on " + appEnv.url);
});

require('./ws/chat/chat')(server);