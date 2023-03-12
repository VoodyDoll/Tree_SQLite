var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('SQL/roots.db');

let start_index=''
let end_index=''
let result_users=''
let limit=8  
let total_pages=''

router.get('/',(req, res)=> {  

    if (req.query.page) {

            db.all(`SELECT * FROM coffe`, (err, row)=> { 
// Расчет страниц
                 start_index=(req.query.page-1)*limit

                 end_index=req.query.page*limit

                 result_users=row.slice(start_index, end_index)

                console.log(result_users)
// общее кол-во стараниц
                total_pages=Math.ceil(row.length/limit);

               res.render('main',{layout:'planB',roww:result_users,total_pages:total_pages})    
               
           }) 
        
    }else {
// основная страница

// запросы на данные  
       db.all(`SELECT * FROM coffe`, (err, row)=> {  
// общее кол-во стараниц
        total_pages=Math.ceil(row.length/limit);
// кол-во страниц на странице
         result_users=row.slice(1, limit+1)        

                console.log(row)
           
            res.render('main',{layout:'planB',roww:result_users,total_pages:total_pages})       

    })

   }

});

// фильтр дешовых продуктов
router.get('/low_cost', (req, res)=> {	

is_page=Number(limit*req.query.page-limit)
        // страница до
    next_page=is_page+limit    

// if (req.query.page) {

        db.each("SELECT COUNT(*) AS datacount FROM coffe", (err, roww)=> {

            total_pages=Math.ceil(roww.datacount/limit);         

            db.all(`SELECT * FROM coffe WHERE post_id BETWEEN ${is_page} AND ${next_page} LIMIT ${limit}`, (err, row)=> {

               res.render('main',{layout:'planB',roww:total_pages,row:row,choice_cost:'От дешовых к дорогим'})    
               
           }) 
      
    // }else {

    db.all(`SELECT * FROM coffe ORDER BY cost ASC LIMIT ${limit}`, (err, row)=> {

        res.render('main',{layout:'planB',row:row,choice_cost:'От дешовых к дорогим'})

    })
// }

})

  })


// фильтр дорогих продуктов
router.get('/expensive_cost', (req, res)=> {	

    db.all("SELECT * FROM coffe ORDER BY cost DESC", (err, row)=> {

        res.render('main',{layout:'planB',row:row,choice_cost:'От дорогих к дешовым'})

    })
})

module.exports = router;

