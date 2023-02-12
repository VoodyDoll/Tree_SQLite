var express = require('express');
var router = express.Router();
// подключение к mongo
const MongoClient = require("mongodb").MongoClient;

router.get('/', (req, res)=> {
    
const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url);
 
// получение данных из базы
async function run() {
    try {
        await mongoClient.connect();
        const db = mongoClient.db("caffe");
        const collection = db.collection("products");
        const results = await collection.find().toArray();
        console.log(results);

let kot=[
	{id:1,name:'gus',img:'./images/boot1.jpg',description:'Прекрасная стерлядь',cost:'150'},
	{id:2,name:'pusy',img:'./images/boot2.jpg',description:'Прекрасная вобла',cost:'200'},
	{id:3,name:'girl',img:'./images/boot3.jpg',description:'Прекрасная куница',cost:'300'},
	{id:4,name:'girl',img:'./images/boot3.jpg',description:'Прекрасная куница',cost:'300'},
	{id:5,name:'girl',img:'./images/boot3.jpg',description:'Прекрасная куница',cost:'300'}

]
res.render('main',{layout:'planB',results:results,kot:kot})
	
	
  // res.render('main',{layout:'planB',kot:kot})




          
    }catch(err) {
        console.log(err);
    } finally {
        await mongoClient.close();
    }
}
run().catch(console.error);


 
})

module.exports = router;