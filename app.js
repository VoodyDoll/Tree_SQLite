const express = require('express')
const app = express()
const port = 3000
const { engine } = require ('express-handlebars')
let indexRouter = require('./routes/index');
// let usersRouter = require('./routes/users');
app.set('view engine','hbs')

app.engine('hbs', engine({
	extname:'hbs',
	defaultLayout:'index',
	partialsDir:'./views/partials'
}));

app.use(express.static('public'))
// Подключение роутеров
app.use('/', indexRouter);
// app.use('/users', usersRouter);



app.listen(port, ()=> {
  console.log('Example app listening on port')
})