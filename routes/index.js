var express = require('express');
var router = express.Router();



router.get('/', (req, res)=> {


let kot=[
	{id:1,name:'gus'},
	{id:2,name:'pusy'},
	{id:3,name:'girl'}

]
	

  res.render('main',{layout:'planB',kot:kot})
})

module.exports = router;