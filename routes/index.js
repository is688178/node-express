var express = require('express');
var router = express.Router();

/* GET home page. */
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/login.html');  //You can use render in case of ejs 
});

module.exports = router;
