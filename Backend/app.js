var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var coursesrouter =require("./routes/courses")


const cors = require('cors')
const passport = require('passport')
const db = require('./models')
const { keys } = require('./config')
const { authRouter, usersRouter , coursesRouter} = require('./routes')


var app = express();
db


app.use(cors())


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//passport init
app.use(passport.initialize())
app.use(passport.session())

require('./config/passport')(passport);

passport.serializeUser((user, done) => {
  done(null, user)
})

passport.deserializeUser((user, done) => {
  done(null, user)
})


//APIs
app.use('/api/users', usersRouter);
app.use('/api/auth', authRouter)
app.use('/api/courses',coursesRouter)



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
