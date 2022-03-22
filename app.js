var mongoose = require('mongoose')
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var aboutRouter = require('./routes/about'); //creat route about
var detailRouter = require('./routes/detail');
var recipeRouter = require('./routes/recipe');
var registerRouter = require('./routes/register');
var reviewRouter = require('./routes/review');
var addrecipeRouter = require('./routes/addrecipe')

var app = express();
var session = require('express-session')

mongoose.connect('mongodb+srv://admin:3000@cluster0.szqjx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then((
)=>{console.log('connect to DB')}
)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}))

app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});
app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/detail', detailRouter);
app.use('/recipe', recipeRouter);
app.use('/register', registerRouter);
app.use('/review', reviewRouter);
app.use('/addrecipe', addrecipeRouter);



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
