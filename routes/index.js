var express = require('express'),
  router = express.Router(),
  fs = require('fs'),
  vt = require('node-virustotal'),
  mkdirp = require('mkdirp'),
  multer  = require('multer'),
  con = vt.MakePublicConnection();

con.setKey("e2513a75f92a4169e8a47b4ab1df757f83ae45008b4a8a49903450c8402add4d");
con.setDelay(15000);

/* GET home page. */
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
  let obj = JSON.parse(JSON.stringify(req.files).replace(/\[/g, "").replace(/\]/g, ""));
  con.FileEvaluation(obj.filename, obj.mimetype, fs.readFileSync(obj.path), function(data){
    console.log(data);
  }, function(mistake){
    console.log(mistake);
  });
});

module.exports = router;
