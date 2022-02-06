const express = require('express');
const app = express();
let sqlite3=require('sqlite3').verbose();
let db=new sqlite3.Database('SQL/roots.db');
// var path = require('path');
// const router = express.Router();
// var bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: true }))

// // подключение папки views
// app.set('views', path.join(__dirname, 'views'));

// // подкючение ejs.
// app.set('view engine', 'ejs');

// // подключение статики (css,js)
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.json());
app.use(function(req,res,next){
   res.setHeader('Access-Control-Allow-Origin','*');
   res.setHeader('Access-Control-Allow-Methods','GET,POST');
   res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type');
   res.setHeader('Access-Control-Allow-Credentials',true);
   next();
});

// let dott=[
// {
//   job:'gun',
//   age:12
// },
// {
//   job:'worker',
//   age:58
// },

// ]

app.get('/',(req, res)=> {
  db.all("SELECT * FROM root", (err, row)=> {
    console.log(err)
    // console.log(row)
    res.json(row)

          // res.render('index', { bass: row.main_bass,
          //  img:row.img,text:row.text,
          //  cost:row.cost,width:row.width,title:'Запись в базу данных',opoos:'555',
          //  poozo:'Введите все данные в поля записи' });
        })


  // res.json(dott);
});


// let sqlite3=require('sqlite3').verbose();
// let db=new sqlite3.Database('SQL/main.db')
// db.all("SELECT * FROM SUSHY", (err, row)=> {
//     res.json(row)

//           // res.render('index', { bass: row.main_bass,
//           //  img:row.img,text:row.text,
//           //  cost:row.cost,width:row.width,title:'Запись в базу данных',opoos:'555',
//           //  poozo:'Введите все данные в поля записи' });
//         })




// app.set('port', 3000);
 app.listen(3000, () => {
    console.log(`[OK] Server is running on localhost:`);
 });

 module.exports = app;
