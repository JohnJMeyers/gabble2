const express = require('express');
const mustache = require('mustache-express');
const parseurl = require('parseurl')
const bodyParser = require('body-parser');
const validator = require('express-validator')
const sequelize = require('sequelize');
const models = require('./models')
const faker = require('faker');
const pg = require('pg');
const session = require('express-session');
const app = express();

app.engine('mustache', mustache())
app.set('view engine', 'mustache');
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))

app.set('trust proxy', 1)
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

app.listen(3000, function(){
  console.log("Looking good!")
})
