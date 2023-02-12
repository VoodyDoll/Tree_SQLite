var express = require('express');
var router = express.Router();
// подключение к mongo
const MongoClient = require("mongodb").MongoClient;

router.get('/', (req, res)=> {
    
const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url);
 
async function run() {
    try {
    	// Подключаемся к серверу
        await mongoClient.connect();
        // обращаемся к базе данных begine
        const db = mongoClient.db("begine");
         // обращаемся к коллекции people
        const collection = db.collection("people");
        // определяем кол-во документов в коллекции
        const count = await collection.countDocuments();

        console.log(`В коллекции users ${count} документа/ов`);
    }catch(err) {
        console.log(err);
    } finally {
        await mongoClient.close();
    }
}
run().catch(console.error);


let kot=[
	{id:1,name:'gus',img:'./images/boot1.jpg',description:'Прекрасная стерлядь',cost:'150'},
	{id:2,name:'pusy',img:'./images/boot2.jpg',description:'Прекрасная вобла',cost:'200'},
	{id:3,name:'girl',img:'./images/boot3.jpg',description:'Прекрасная куница',cost:'300'},
	{id:4,name:'girl',img:'./images/boot3.jpg',description:'Прекрасная куница',cost:'300'},
	{id:5,name:'girl',img:'./images/boot3.jpg',description:'Прекрасная куница',cost:'300'}

]
	

  res.render('main',{layout:'planB',kot:kot})
})

module.exports = router;