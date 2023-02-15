var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('SQL/roots.db');


router.get('/', (req, res)=> {


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
// Подключение SQLite
 db.all("SELECT * FROM coffe", (err, row)=> {
    console.log(err)
    console.log(row)


// res.render('main',{layout:'planB',row:row,kot:kot})
    // res.json(row)          
         

let kot=[
	{id:1,name:'gus',img:'./images/boot1.jpg',description:'Прекрасная стерлядь',cost:'150'},
	{id:2,name:'pusy',img:'./images/boot2.jpg',description:'Прекрасная вобла',cost:'200'},
	{id:3,name:'girl',img:'./images/boot3.jpg',description:'Прекрасная куница',cost:'300'},
	{id:4,name:'girl',img:'./images/boot3.jpg',description:'Прекрасная куница',cost:'300'},
	{id:5,name:'girl',img:'./images/boot3.jpg',description:'Прекрасная куница',cost:'300'}

]
	

  res.render('main',{layout:'planB',row:row,kot:kot})
})
})
module.exports = router;

