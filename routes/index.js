var express = require('express');
var router = express.Router();
var exec = require('child_process').exec;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

router.get('/home', function (req, res, next) {
 console.log("hiiiiii");
  res.render('home', {title: 'Home Page'});

});

router.get('/gendataHistory', function (req, res, next) {
      res.render('gendataHistory', {title: 'Home Page'});

});
router.get('/gendataExecute', function (req, res, next) {
    res.render('gendataExecute', {title: 'Home Page'});

});

router.post('/executeCmd' , function (req,res,next){

    console.log("Executing command");

    var cmd = "ls";
    exec(cmd, {maxBuffer: 1024 * 5000}, function (error, stdout, stderr) {
        if (error !== null) {
            console.log("error occured command didn't run succesfully....either terminated or some error occured...." + error);
            res.json({'status': 201});
        }
        console.log("command ran successfully with the below output.." +stdout);

    });
})

