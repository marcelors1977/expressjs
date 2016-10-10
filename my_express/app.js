var express = require('express');
var path    = require('path');
// var http    = require('http');
var app     = express();
var path    = require('path');
var routes  = require('./routes');
var bodyParser = require('body-parser');

app.set('views', './views_dir');
app.set('view engine', 'pug');


app.use(function(req, res, next) {
    req.name = 'SON';
    // console.log('I AM A CUSTOm MIDDLEWARE');
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/', function(req, res) {
    res.render('index', {
        message: 'Hello world from express by SON'
    });
    // res.send('Hello world from express by ' + req.name);
});

app.get('/world', function(req, res){
    res.send('world');
});

app.use('/hello', routes);
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(function(err, req, res, next) {
    res.status(500)
       .json({
            message: 'Something wrong happens'
       });
});

// http.createServer(app).listen(3000, function() {
//         console.log('Express started');
// });

app.listen(3000, function() {
    console.log('Express started');
});