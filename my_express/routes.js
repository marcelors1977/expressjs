var express =  require('express');
var router  = express.Router();

router.use(function(req, res, next) {
    console.log('I AM A ROUTER CUSTOM MIDDLEWARE');
    next();
});


router.get('/', function(req, res, next) {
    next(new Error('custom error'));
});

router.get('/a*r', function(req, res) {
    res.send('router a?r');
});

router.get('/params/:name', function(req, res) {
    res.json({
        params: req.params,
        host  : req.host,
        headers: req.headers,
        port   : req.port
    })
});

router.post('/body', function(req, res) {
    res.json(req.body.name)
});

router.get('/res', function(req, res) {
    res.render('index', {

    });
    // res.status(202).json({
    //     name: 'Leonan',
    //     lastname: 'Luppi'
    // });
});


module.exports = router;