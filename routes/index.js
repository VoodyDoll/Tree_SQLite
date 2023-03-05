var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('SQL/roots.db');

// пагинация
let page=false;
let limit=8;
// общее кол-во страниц
let total_pages=0;
let all_posts=24;

// общее кол-во постов
// total_pages=Math.ceil(all_posts/limit);
// console.log(total_pages)

router.get('/',(req, res)=> {  

    if (req.query.expensive_cost) {

        db.all(`SELECT * FROM coffe ORDER BY cost DESC LIMIT ${limit}`, (err, row)=> {

       db.each("SELECT COUNT(*) AS datacount FROM coffe", (err, roww)=> {

        total_pages=Math.ceil(roww.datacount/limit);

        res.render('main',{layout:'planB',row:row,roww:total_pages,cost:expensive_cost,choice_cost:'От дорогих к дешовым'})
    })
        // res.render('main',{layout:'planB',row:row,choice_cost:'От дорогих к дешовым'})

   })

 }

 if (req.query.low_cost) {    

    db.all(`SELECT * FROM coffe ORDER BY cost ASC LIMIT ${limit}`, (err, row)=> {

       db.each("SELECT COUNT(*) AS datacount FROM coffe", (err, roww)=> {

        total_pages=Math.ceil(roww.datacount/limit);

            // res.render('main',{layout:'planB',roww:total_pages,row:row})   

        res.render('main',{layout:'planB',row:row,roww:total_pages, cost:low_cost,choice_cost:'От дешовых к дорогим'})
    })
   })

}
if (req.query.page) {
    // страница от
    let is_page=Number(limit*req.query.page-limit)
    // страница до
    let next_page=is_page+limit      

<<<<<<< Updated upstream
// db.each("SELECT COUNT(*) AS datacount FROM coffe", (err, roww)=> {

//         total_pages=Math.ceil(roww.datacount/limit);         

//        db.all(`SELECT * FROM coffe WHERE post_id BETWEEN ${is_page} AND ${next_page} LIMIT ${limit}`, (err, row)=> {

//          res.render('main',{layout:'planB',roww:total_pages,row:row})    
  
// }) 
// })
if (req.query.page) {
    // страница от
    let is_page=Number(limit*req.query.page-limit)
    // страница до
    let next_page=is_page+limit      

=======
>>>>>>> Stashed changes
    db.each("SELECT COUNT(*) AS datacount FROM coffe", (err, roww)=> {

        total_pages=Math.ceil(roww.datacount/limit);         

        db.all(`SELECT * FROM coffe WHERE post_id BETWEEN ${is_page} AND ${next_page} LIMIT ${limit}`, (err, row)=> {

         res.render('main',{layout:'planB',roww:total_pages,row:row})    
<<<<<<< Updated upstream

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
=======

     }) 
    })
}else {
        // основная страница
    // запросы на данные  
 db.all(`SELECT * FROM coffe LIMIT ${limit}`, (err, row)=> {  
    // запросы на пагинацию (общее кол-во старниц)
    db.each("SELECT COUNT(*) AS datacount FROM coffe", (err, roww)=> {
>>>>>>> Stashed changes

        total_pages=Math.ceil(roww.datacount/limit);

        res.render('main',{layout:'planB',roww:total_pages,row:row})

    })

})

}

});

// фильтр дешовых продуктов
// router.get('/low_cost', (req, res)=> {	

//     db.all("SELECT * FROM coffe ORDER BY cost ASC", (err, row)=> {

//  db.each("SELECT COUNT(*) AS datacount FROM coffe", (err, roww)=> {

//             total_pages=Math.ceil(roww.datacount/limit);

//             // res.render('main',{layout:'planB',roww:total_pages,row:row})   

//         res.render('main',{layout:'planB',row:row,roww:total_pages,cost:true,choice_cost:'От дешовых к дорогим'})
// })
//     })
// })

// фильтр дорогих продуктов
// router.get('/expensive_cost', (req, res)=> {	

//     db.all("SELECT * FROM coffe ORDER BY cost DESC", (err, row)=> {

//         res.render('main',{layout:'planB',row:row,choice_cost:'От дорогих к дешовым'})

//     })
// })

module.exports = router;

