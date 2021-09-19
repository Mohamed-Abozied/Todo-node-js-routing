var createError = require('http-errors');
var express = require('express');
var logger = require('morgan');
const {connectDB} = require('./config/db.config')
connectDB();

var app = express();

const todoRoutes = require('./routes/todo.routes')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/todo', todoRoutes)


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
