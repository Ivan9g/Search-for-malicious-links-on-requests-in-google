var express = require('express'),
  router = express.Router(),
  fs = require('fs'),
  vt = require('node-virustotal'),
  mkdirp = require('mkdirp'),
  multer  = require('multer'),
  con = vt.MakePublicConnection();

con.setKey("e2513a75f92a4169e8a47b4ab1df757f83ae45008b4a8a49903450c8402add4d");
con.setDelay(15000);


router.get('/', function(req, res, next) {
  res.render('index');
});

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    var dest = 'public/uploads/';
    mkdirp(dest, function (err) {
        if (err) cb(err, dest);
        else cb(null, dest);
    });
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+'-'+file.originalname);
  }
});

var upload = multer({ storage: storage });

router.post('/', upload.any(), function(req , res){
  if(req.body.url){
    con.retrieveUrlAnalysis( req.body.url ,function(data){
        let obj_report = JSON.parse(JSON.stringify(data).replace(/\s+/g, ''));
        res.render('file', {data: obj_report});
      }, function(err){
      console.error(err);
        res.render('index');
      });
  }else  if (req.body.search) {
    var str = req.body.search.split(' ');
    res.render('search', {data: str});
  }else{
      let obj = JSON.parse(JSON.stringify(req.files).replace(/\[/g, "").replace(/\]/g, ""));
      console.log(obj.filename + obj.mimetype + obj.path);
      con.FileEvaluation(obj.filename, obj.mimetype, fs.readFileSync(obj.path), function(data){
        let obj_report = JSON.parse(JSON.stringify(data).replace(/\s+/g, ''));
        res.render('file', {data: obj_report});
      }, function(mistake){
        console.log(mistake);
        res.render('index');
      });
    }
});

module.exports = router;
