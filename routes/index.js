var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('SQL/roots.db');

// пагинация
let page=1;
let limit=8;
// общее кол-во страниц
let total_pages=0;
let all_posts=24;

router.get('/',(req, res)=> {  

    // страница от
    let is_page=Number(limit*req.query.page-limit)
        // страница до
        let next_page=is_page+limit      
if (req.query.page) {
db.each("SELECT COUNT(*) AS datacount FROM coffe", (err, roww)=> {

        total_pages=Math.ceil(roww.datacount/limit);         

       db.all(`SELECT * FROM coffe WHERE post_id BETWEEN ${is_page} AND ${next_page} LIMIT ${limit}`, (err, row)=> {

         res.render('main',{layout:'planB',roww:total_pages,row:row})    
  
}) 
})
}else {
    // основная страница

    // запросы на данные  
     db.all(`SELECT * FROM coffe LIMIT ${limit}`, (err, row)=> {  
    // запросы на пагинацию (общее кол-во старниц)
    db.each("SELECT COUNT(*) AS datacount FROM coffe", (err, roww)=> {

    total_pages=Math.ceil(roww.datacount/limit);

      res.render('main',{layout:'planB',roww:total_pages,row:row})

    })

    })

}

});

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

