let express = require('express')
let app = express()
let { engine } = require ('express-handlebars')
let helpers=require('./components/hbsHelpers')
// Подключение SQLite
// var sqlite3 = require('sqlite3').verbose();
// var db = new sqlite3.Database(':memory:');

// db.serialize(function() {

//   db.run('CREATE TABLE lorem (info TEXT)');
//   var stmt = db.prepare('INSERT INTO lorem VALUES (?)');

//   for (var i = 0; i < 10; i++) {
//     stmt.run('Ipsum ' + i);
//   }

//   stmt.finalize();

//   db.each('SELECT rowid AS id, info FROM lorem', function(err, row) {
//     console.log(row.id + ': ' + row.info);
//   });
// });

// db.close();

app.set('view engine','hbs')

app.engine('hbs', engine({
  extname:'hbs',
  defaultLayout:'index',
  partialsDir:'./views/partials',
  registerHelper:'./components/hbsHelpers'
}));


let port = 3000
let indexRouter = require('./routes/index');

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