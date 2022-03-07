var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var db=require('./Config/connection')
var indexRouter = require('./routes/index');

var app = express();
db.connect((err)=>{
    if(err) console.log("connection Err" +err)
    else console.log('Connected To Database')
})
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);


module.exports = app;
