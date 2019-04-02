var express = require('express'),
  router = express.Router(),
  request = require('request'),
  cheerio = require('cheerio'),
  fs = require('fs'),
  vt = require('node-virustotal'),
  con = vt.MakePublicConnection();

  con.setKey("e2513a75f92a4169e8a47b4ab1df757f83ae45008b4a8a49903450c8402add4d");
  con.setDelay(15000);



router.get('/', function(req, res, next) {
  var test = fs.readFileSync("./public/db/data.json", "utf8");
  var nam = test.search( /}}},}/g );
  test = test.slice(0, nam+3) + test.slice(nam+4);
  let obj_report = JSON.parse(test);
  res.render('second', { data: obj_report });
});

router.post('/', function(req , res){
  let obj_report = '{}';
  if(req.body.dataMuz){
    var test = fs.readFileSync("./public/db/dataMuz.json", "utf8");
    var nam = test.search( /}}},}/g );
    test = test.slice(0, nam+3) + test.slice(nam+4);
    let obj_report = JSON.parse(test);
    res.render('second', { data: obj_report });
  }
  if(req.body.dataChit){
    var test = fs.readFileSync("./public/db/dataChit.json", "utf8");
    var nam = test.search( /}}},}/g );
    test = test.slice(0, nam+3) + test.slice(nam+4);
    let obj_report = JSON.parse(test);
    res.render('second', { data: obj_report });
  }
  if(req.body.dataBlack){
    var test = fs.readFileSync("./public/db/dataBlack.json", "utf8");
    var nam = test.search( /}}},}/g );
    test = test.slice(0, nam+3) + test.slice(nam+4);
    let obj_report = JSON.parse(test);
    res.render('second', { data: obj_report });
  }
  if(req.body.dataDreams){
    var test = fs.readFileSync("./public/db/dataDreams.json", "utf8");
    var nam = test.search( /}}},}/g );
    test = test.slice(0, nam+3) + test.slice(nam+4);
    let obj_report = JSON.parse(test);
    res.render('second', { data: obj_report });
  }
  if(req.body.dataFilm){
    var test = fs.readFileSync("./public/db/dataFilm.json", "utf8");
    var nam = test.search( /}}},}/g );
    test = test.slice(0, nam+3) + test.slice(nam+4);
    let obj_report = JSON.parse(test);
    res.render('second', { data: obj_report });
  }
  if(req.body.dataFree){
    var test = fs.readFileSync("./public/db/dataFree.json", "utf8");
    var nam = test.search( /}}},}/g );
    test = test.slice(0, nam+3) + test.slice(nam+4);
    let obj_report = JSON.parse(test);
    res.render('second', { data: obj_report });
  }
  if(req.body.dataHaha){
    var test = fs.readFileSync("./public/db/dataHaha.json", "utf8");
    var nam = test.search( /}}},}/g );
    test = test.slice(0, nam+3) + test.slice(nam+4);
    let obj_report = JSON.parse(test);
    res.render('second', { data: obj_report });
  }
  if(req.body.dataIphon){
    var test = fs.readFileSync("./public/db/dataIphon.json", "utf8");
    var nam = test.search( /}}},}/g );
    test = test.slice(0, nam+3) + test.slice(nam+4);
    let obj_report = JSON.parse(test);
    res.render('second', { data: obj_report });
  }
  if(req.body.dataJon){
    var test = fs.readFileSync("./public/db/dataJon.json", "utf8");
    var nam = test.search( /}}},}/g );
    test = test.slice(0, nam+3) + test.slice(nam+4);
    let obj_report = JSON.parse(test);
    res.render('second', { data: obj_report });
  }
  if(req.body.dataMmm){
    var test = fs.readFileSync("./public/db/dataMmm.json", "utf8");
    var nam = test.search( /}}},}/g );
    test = test.slice(0, nam+3) + test.slice(nam+4);
    let obj_report = JSON.parse(test);
    res.render('second', { data: obj_report });
  }
  if(req.body.dataRihana){
    var test = fs.readFileSync("./public/db/dataRihana.json", "utf8");
    var nam = test.search( /}}},}/g );
    test = test.slice(0, nam+3) + test.slice(nam+4);
    let obj_report = JSON.parse(test);
    res.render('second', { data: obj_report });
  }
  if(req.body.dataScrin){
    var test = fs.readFileSync("./public/db/dataScrin.json", "utf8");
    var nam = test.search( /}}},}/g );
    test = test.slice(0, nam+3) + test.slice(nam+4);
    let obj_report = JSON.parse(test);
    res.render('second', { data: obj_report });
  }
  if(req.body.dataWinda){
    var test = fs.readFileSync("./public/db/dataWinda.json", "utf8");
    var nam = test.search( /}}},}/g );
    test = test.slice(0, nam+3) + test.slice(nam+4);
    let obj_report = JSON.parse(test);
    res.render('second', { data: obj_report });
  }
  if(req.body.dataWork){
    var test = fs.readFileSync("./public/db/dataWork.json", "utf8");
    var nam = test.search( /}}},}/g );
    test = test.slice(0, nam+3) + test.slice(nam+4);
    let obj_report = JSON.parse(test);
    res.render('second', { data: obj_report });
  }

  if(req.body.google){
      fs.writeFile("./public/db/dataword.json", "{", function(error,data){});
    prov(req.body.google);
    console.log(req.body.google);
  }
  if(req.body.dataword){
    console.log(req.body.dataword);
    fs.appendFileSync("./public/db/dataword.json","}");
    var test = fs.readFileSync("./public/db/dataword.json", "utf8");
    var nam = test.search( /}}},}/g );
    test = test.slice(0, nam+3) + test.slice(nam+4);
    let obj_report = JSON.parse(test);
    res.render('second', { data: obj_report });
  }

  res.render('second', { data: obj_report });
});

function prov(_url) {
  var i = 0;
  var url = "";
  var ru = "йцукенгшщзхъфывапролджэячсмитьбю. ";
  var en = "qwertyuiop[]asdfghjkl;'zxcvbnm,./ ";
  for(var k=0;k<_url.length;k++){
    for(var j=0;j<ru.length;j++){
      if(_url[k] == ru[j]){
        url += en[j];
      }
    }
  }
  url = "https://www.google.com/search?q="+url.replace(/\s+/g, '+');
  request(url, function (error, response, body) {
  if (error) {
      console.log("Не удалось получить страницу из за следующей ошибки: " + error);
      return;
  }
  var $ = cheerio.load(body),
      links = $(".r a");
  links.each(function (i, link) {
      var url = $(link).attr("href");
      url = url.replace("/url?q=", "").split("&")[0];
      if (url.charAt(0) === "/") {
          return;
      }

      setTimeout(myFunc, 15000, url);
    });
  });


  function myFunc(url) {
    con.retrieveUrlAnalysis( url ,function(data){
      let obj_report = JSON.parse(JSON.stringify(data).replace(/\s+/g, ''));
      if(obj_report.response_code == 1){
        var dam = "\"url" + i + "\":\"" + url + "\",\"scan" + i + "\":";
        fs.appendFileSync("./public/db/dataword.json", dam);
        fs.appendFileSync("./public/db/dataword.json", JSON.stringify(data).replace(/\s+/g, ''));
        fs.appendFileSync("./public/db/dataword.json",",");
        i++;
      }
    }, function(err){
      console.error(err);
    });
  }
}



module.exports = router;
