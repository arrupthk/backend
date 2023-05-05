
const express= require('express')
const bodyParser = require('body-parser');
const app= express();


const adminRoute = require('./admin')
const logicRoute = require('./logic')


app.use(bodyParser.urlencoded({extended:false}))



app.use(adminRoute)
app.use(logicRoute)


app.listen(4000);