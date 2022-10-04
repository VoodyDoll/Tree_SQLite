const express = require('express');
const app = express();
let sqlite3=require('sqlite3').verbose();
let db=new sqlite3.Database('SQL/roots.db');
app.use(function(req,res,next){
   res.setHeader('Access-Control-Allow-Origin','*');
   res.setHeader('Access-Control-Allow-Methods','GET,POST');
   res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type');
   res.setHeader('Access-Control-Allow-Credentials',true);
   next();
});

app.get('/',(req, res)=> {  

     db.all(`SELECT * FROM root,(SELECT COUNT(*) FROM root) LIMIT ${req.query.limit}`, (err, row)=> {

    // количество записей
    // console.log(typeof(row1['COUNT(*)']))
    // номер страницы
    // console.log(req.query.page)
    // количество страниц
    // console.log(Number(row['COUNT(*)']))
    // console.log(row.name)
    console.log(row)
     res.json(row)
    // res.row1
})      

//   db.each('SELECT COUNT(*) FROM root', (err, row1)=> {
//     // количество записей
//     console.log(row1['COUNT(*)'])
//     // номер страницы
//     console.log(req.query.page)
// console.log(Math.ceil(Number(row1['COUNT(*)'])/req.query.limit))
// 
//     // res.row1
// })
});

 app.listen(3000, () => {
    console.log(`[OK] Server is running on localhost:`);
 });

 module.exports = app;
