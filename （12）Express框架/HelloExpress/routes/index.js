var express = require('express');
var router = express.Router();
const {users, chapterList} = require('../data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.post('/login', function(req, res, next) {
  var data = req.body;
  console.log(data);
  for (var i = 0; i < users.length; i++) {
      if (data.username == users[i].username && data.pwd == users[i].password) {
          res.render('list', { chapterList: chapterList });
          return ;
      }
  }
  res.set('Content-Type','text/plain; charset=utf-8');    
  res.end("用户名密码错误");
});
module.exports = router;
