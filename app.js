let express = require('express')
let app = express()
let { engine } = require ('express-handlebars')
let indexRouter = require('./routes/index');
let helpers=require('./components/hbsHelpers')

app.set('view engine','hbs')

app.engine('hbs', engine({
  extname:'hbs',
  defaultLayout:'index',
  partialsDir:'./views/partials',
  helpers: require("./components/hbsHelpers") 
}));


let port = 3000

app.use(express.static('public'))
// подключение bootstrup
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'))
app.use("/js",express.static(__dirname + "/node_modules/bootstrap/dist/js"))
// Подключение роутеров
app.use('/', indexRouter);
// app.use('/users', usersRouter);

app.listen(port, ()=> {
  console.log('Example app listening on port')
})