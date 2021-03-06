var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require('method-override');

//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
var api = require('./routes/api');

var app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

app.use(methodOverride('_method'));

// correspond Express and React
app.use(express.static(path.join(__dirname, 'build')));

//app.use('/', indexRouter);
//app.use('/users', usersRouter);
app.use('/_api', api);

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// catch 404 and forward to error handler
// app.useの内容は設定した順に実行される。
// 通常ここに来る前に処理は終わる。
// このコードまで来てしまった = 何も見つからなかった　と思われる。
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
  //res.render('error');
});

module.exports = app;
