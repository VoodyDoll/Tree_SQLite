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
  db.all("SELECT * FROM root", (err, row)=> {
    console.log(err)
    // console.log(row)
    res.json(row)          
        }) 
});



 app.listen(3000, () => {
    console.log(`[OK] Server is running on localhost:`);
 });

 module.exports = app;
