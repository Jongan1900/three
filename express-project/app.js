var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// 引入我自定的一个wechat模块
var wechatRouter = require('./routes/wechat');
// 引入login模块
var loginRouter = require('./routes/login');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// 定义一个静态资料保存的环境
app.use(express.static(path.join(__dirname, 'public')));
// app.use((req,res,next)=>{
// 	res.append('Access-Control-Allow-Origin', '*');		
// })

app.use('/', indexRouter);
  app.use('/users', usersRouter);
    // 当后缀发送的是/wechat进入我的自定义模块
    app.use('/wechat',wechatRouter);
    app.use('/login',loginRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
