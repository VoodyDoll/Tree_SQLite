let path=require('path')
let fs=require('fs')
let eprocess=require('process')
// let Emmiter=require('events')

// let emi=new Emmiter()

// emi.on('massa',(data)=>{
// 	console.log(data)
// })
// while (true) {
	// statement

console.log(process.pid)

console.log('start')

// console.log(5e15)

let snoorg = new Promise((res,rej)=>{
	let dood=555
	res(dood)

})

snoorg
  .then(
    result => {
      // первая функция-обработчик - запустится при вызове resolve
      console.log("Fulfilled: " + result); // result - аргумент resolve


    })

snoorg
  .then(
    result => {
      // первая функция-обработчик - запустится при вызове resolve
      console.log("F: " + result); // result - аргумент resolve


    })




console.log('end')

// }

   


// console.log(path.join(__dirname,'first', 'stcond'));

// console.log(process.env)
// fs.mkdirSync(path.resolve(__dirname,'dir','poop'),{recursive:true});

// fs.writeFile(path.resolve(__dirname,'text.txt'),'555',(error)=>{
// 	if (error) {
// 		throw error
// 	}
// 	console.log('запись прошла');
// })