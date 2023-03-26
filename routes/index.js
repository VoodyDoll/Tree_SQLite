var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('SQL/roots.db');

let start_index=''
let end_index=''
let result_users=''
let limit=8  
let total_pages=''
let pre_page=''
let next_page=''
// let pages=''
router.get('/',(req, res)=> {  
// console.log(req.query.hash)
    if (req.query.page) {

            db.all(`SELECT * FROM coffe`, (err, row)=> { 
            // Расчет страниц   

                 start_index=(req.query.page-1)*limit
// Pre_страницы
                if (start_index > 0) {

                    pre_page=parseInt(req.query.page)-1
                }

                 end_index=req.query.page*limit

// Next_страницы
                 if (end_index < row.length) {

                    next_page=parseInt(req.query.page)+1

                 }

                 result_users=row.slice(start_index, end_index)
                
// общее кол-во стараниц
                total_pages=Math.ceil(row.length/limit);

               res.render('main',{layout:'planB',roww:result_users,total_pages:total_pages,pre_page:pre_page,next_page:next_page})    
               
           }) 
        
    }else {
// основная страница

// запросы на данные  
       db.all(`SELECT * FROM coffe`, (err, row)=> {  
// общее кол-во стараниц
        total_pages=Math.ceil(row.length/limit);
// кол-во страниц на странице
         result_users=row.slice(1, limit+1)                      
           
            res.render('main',{layout:'planB',roww:result_users,total_pages:total_pages,pre_page:pre_page,next_page:next_page})       

    })

   }

});

// фильтр дешовых продуктов
router.get('/low_cost', (req, res)=> {	

if (req.query.page) {

db.all(`SELECT * FROM coffe ORDER BY cost ASC`, (err, row)=> { 
// Расчет страниц
                 start_index=(req.query.page-1)*limit

                 end_index=req.query.page*limit

                 result_users=row.slice(start_index, end_index)
                
// общее кол-во стараниц
                total_pages=Math.ceil(row.length/limit);

               res.render('main',{layout:'planB',roww:result_users,cost:'low_cost',pre_page:pre_page,next_page:next_page,total_pages:total_pages,choice_cost:'От дешовых к дорогим'})    
               
           }) 
     
}else{

    db.all(`SELECT * FROM coffe ORDER BY cost ASC`, (err, row)=> {  
// общее кол-во стараниц
        total_pages=Math.ceil(row.length/limit);
// кол-во страниц на странице
         result_users=row.slice(1, limit+1)                   
           
            res.render('main',{layout:'planB',roww:result_users,cost:'low_cost',pre_page:pre_page,next_page:next_page,total_pages:total_pages,choice_cost:'От дешовых к дорогим'})       

    })
}

  })


// фильтр дорогих продуктов
router.get('/expensive_cost', (req, res)=> {	


if (req.query.page) {

db.all(`SELECT * FROM coffe ORDER BY cost DESC`, (err, row)=> { 
// Расчет страниц
                 start_index=(req.query.page-1)*limit

                 end_index=(req.query.page)*limit

                 result_users=row.slice(start_index, end_index)

                
// общее кол-во стараниц
                total_pages=Math.ceil(row.length/limit);

               res.render('main',{layout:'planB',roww:result_users,cost:'expensive_cost',pre_page:pre_page,next_page:next_page,total_pages:total_pages,choice_cost:'От дорогих к дешовым'})    
               
           }) 
     
}else{

    db.all(`SELECT * FROM coffe ORDER BY cost DESC`, (err, row)=> {  
// общее кол-во стараниц
        total_pages=Math.ceil(row.length/limit);
// кол-во страниц на странице
         result_users=row.slice(1, limit+1)                        
           
            res.render('main',{layout:'planB',roww:result_users,cost:'expensive_cost',total_pages:total_pages,pre_page:pre_page,next_page:next_page,choice_cost:'От дорогих к дешовым'})       

    })
}


})

module.exports = router;

