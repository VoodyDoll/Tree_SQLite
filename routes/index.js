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

               res.render('main',{layout:'planB',roww:result_users,cost:false,total_pages:total_pages})    
               
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
           
            res.render('main',{layout:'planB',roww:result_users,cost:false,total_pages:total_pages})       

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

                console.log(result_users)
// общее кол-во стараниц
                total_pages=Math.ceil(row.length/limit);

               res.render('main',{layout:'planB',roww:result_users,cost:'low_cost',total_pages:total_pages,choice_cost:'От дешовых к дорогим'})    
               
           }) 
     
}else{

    db.all(`SELECT * FROM coffe ORDER BY cost ASC`, (err, row)=> {  
// общее кол-во стараниц
        total_pages=Math.ceil(row.length/limit);
// кол-во страниц на странице
         result_users=row.slice(1, limit+1)        

                console.log(row)
           
            res.render('main',{layout:'planB',roww:result_users,cost:'low_cost',total_pages:total_pages,choice_cost:'От дешовых к дорогим'})       

    })
}



  })


// фильтр дорогих продуктов
router.get('/expensive_cost', (req, res)=> {	


if (req.query.page) {

db.all(`SELECT * FROM coffe ORDER BY cost DESC`, (err, row)=> { 
// Расчет страниц
                 start_index=(req.query.page-1)*limit

                 end_index=req.query.page*limit

                 result_users=row.slice(start_index, end_index)

                console.log(result_users)
// общее кол-во стараниц
                total_pages=Math.ceil(row.length/limit);

               res.render('main',{layout:'planB',roww:result_users,cost:'expensive_cost',total_pages:total_pages,choice_cost:'От дорогих к дешовым'})    
               
           }) 
     
}else{

    db.all(`SELECT * FROM coffe ORDER BY cost DESC`, (err, row)=> {  
// общее кол-во стараниц
        total_pages=Math.ceil(row.length/limit);
// кол-во страниц на странице
         result_users=row.slice(1, limit+1)        

                console.log(row)
           
            res.render('main',{layout:'planB',roww:result_users,cost:'expensive_cost',total_pages:total_pages,choice_cost:'От дорогих к дешовым'})       

    })
}




//   db.all(`SELECT * FROM coffe ORDER BY cost DESC`, (err, row)=> {  
// // общее кол-во стараниц
//         total_pages=Math.ceil(row.length/limit);
// // кол-во страниц на странице
//          result_users=row.slice(1, limit+1)        

//             console.log(row)
           
//         res.render('main',{layout:'planB',roww:result_users,total_pages:total_pages,choice_cost:'От дорогих к дешовым'})       

//     })

})

module.exports = router;

