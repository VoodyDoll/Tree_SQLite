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

     db.all(`SELECT * FROM root,(SELECT COUNT(*) AS allposition FROM root) LIMIT ${req.query.limit}`, (err, row)=> {
        // страница от
        let is_page=Number(req.query.limit*req.query.page-req.query.limit)
        // страница до
        let next_page=is_page+Number(req.query.limit)

        // let ko=Number(row[0].allposition)-(req.query.limit*req.query.page)
        // console.log(`от ${is_page} до ${next_page}`)

// this.rezz[0]
    // количество записей
    // console.log(typeof(row1['COUNT(*)']))
    // номер страницы
    console.log(req.query.page)
    // количество страниц
    // console.log(Number(row['COUNT(*)']))
    // console.log(row.name)
    // console.log(row)
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

app.get('/go',(req, res)=> {  

    // страница от
    let is_page=Number(req.query.limit*req.query.page-req.query.limit)
        // страница до
        let next_page=is_page+Number(req.query.limit)
        console.log(`от ${is_page} до ${next_page}`)

       db.all(`SELECT * FROM root WHERE id  BETWEEN ${is_page} AND ${next_page} LIMIT ${req.query.limit}`, (err, row)=> {

    res.json(row)

}) 
});

 app.listen(3000, () => {
    console.log(`[OK] Server is running on localhost:`);
 });

 module.exports = app;
