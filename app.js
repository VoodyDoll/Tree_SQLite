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
// начальная загрузка
app.get('/',(req, res)=> {  

     db.all(`SELECT * FROM root,(SELECT COUNT(*) AS allposition FROM root) LIMIT ${req.query.limit}`, (err, row)=> {
        
    console.log(req.query.page)
    
     res.json(row)
    
})       

});
// пагинация
app.get('/go',(req, res)=> {  

    // страница от
    let is_page=Number(req.query.limit*req.query.page-req.query.limit)
        // страница до
        let next_page=is_page+Number(req.query.limit)
        // console.log(`от ${typeof(is_page)} до ${typeof(next_page)} предел ${typeof(Number(req.query.limit))}`)
        // console.log(`от ${is_page} до ${next_page} предел ${Number(req.query.limit)}`)

       db.all(`SELECT * FROM root WHERE id BETWEEN ${is_page} AND ${next_page} LIMIT ${Number(req.query.limit)}`, (err, row)=> {

    res.json(row)

}) 
});

 app.listen(3000, () => {
    console.log(`[OK] Server is running on localhost:`);
 });

 module.exports = app;
