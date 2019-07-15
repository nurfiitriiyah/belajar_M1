var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

var indexRouter = require('./routes/route_count');

var app = express();

// views engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('views engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.listen(11111, function(){
    console.log('Server running at port 11111')
});


module.exports = app;

