var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

//write the json into local file.
router.post('/endpoint', function (req, res) {
  var data = req.body.data;
  var id = req.body.id;
  console.log('body: ' + JSON.stringify(data));
  var fs = require("fs");
  var sampleObject = JSON.stringify(data)
  console.log("id: " + id)
  fs.writeFile("./coordinates/" + Date.now() + "id" + id + ".json", sampleObject, (err) => {
    if (err) {
      console.error(err);
      return;
    };
    console.log("File has been created");
  });

  res.json({ data });
});

module.exports = router;
