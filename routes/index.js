var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('SQL/roots.db');


// пагинация
let page=1;
let limit=8;
let total_pages=0;
let all_posts=10;

// общее кол-во постов
total_pages=Math.ceil(all_posts/limit);
console.log(total_pages)
// основная страница
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

  res.render('main',{layout:'planB',row:row,total_pages:total_pages})
})
})

// фильтр дешовых продуктов
router.get('/low_cost', (req, res)=> {	

db.all("SELECT * FROM coffe ORDER BY cost ASC", (err, row)=> {

res.render('main',{layout:'planB',row:row,choice_cost:'От дешовых к дорогим'})

})
})

// фильтр дорогих продуктов
router.get('/expensive_cost', (req, res)=> {
	

db.all("SELECT * FROM coffe ORDER BY cost DESC", (err, row)=> {


res.render('main',{layout:'planB',row:row,choice_cost:'От дорогих к дешовым'})

})
})

module.exports = router;

