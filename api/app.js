var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var session = require("express-session");
var bodyParser = require("body-parser");
var passport = require('passport')
var crypto = require('crypto');

const connection = require('./config/database');

const MongoStore = require('connect-mongo')(session)

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var locationsRouter = require('./routes/locations');

var app = express();

//import RandomPopularTimesGenerator from './location/RandomPopularTimesGenerator'
//var randomPopularTimesGenerator = new RandomPopularTimesGenerator();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use(logger('dev'));
//app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const sessionStore = new MongoStore({ mongooseConnection: connection, collection: 'sessions' });

app.use(session({
    secret: "anaconda",
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 14 // Equals 14 day (14 * 1 day * 24 hr/1 day * 60 min/1 hr * 60 sec/1 min * 1000 ms / 1 sec)
    }
}));

require('./config/passport');

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
   /*  console.log(req.session);
    console.log(req.user);
    console.log(req.protocol + '://' + req.get('host') + req.originalUrl); */
    next();
});


/* app.use(passport.initialize()); 
app.use(passport.session());  */
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/locations', locationsRouter);

// Enrich mockup locations with random popular times
//randomPopularTimesGenerator.generateRandomPopluarTimes();
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
