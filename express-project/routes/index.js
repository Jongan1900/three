var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });

  res.append('Access-Control-Allow-Origin', '*');
  res.send(`<p>3000端口已经成功接入</p>`)
  res.end();
});

// 测试跨域的端口
router.get('/kuayu', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.append('Access-Control-Allow-Origin', '*');


  res.send(`<p>test跨域已经成功接入</p>`)
  res.end();
});


// login 端口
// router.get('/login', function(req, res, next) {
//   // res.render('index', { title: 'Express' });

//   res.append('Access-Control-Allow-Origin', '*');

//   console.log(req);
//   console.log(req.query);

//   res.send(`<p>login跨域已经成功接入</p>`)
//   res.end();
// });
module.exports = router;
