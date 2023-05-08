// Создание массива корзины
let mass_bag=[]
let but_id=''


// данные из localStorage
let op=[]
mass_bag=localStorage.getItem('a')
// console.log(mass_bag)
if (mass_bag!=null) {
	mass_bag=JSON.parse(mass_bag)

	for (let i of mass_bag) {
		i.id=Number(i.id)
		op.push(i.id)
		op=[...new Set(op)];

	}
}
// console.log(op)
// данные из страницы HTML
// let si=[]
	let jo=document.querySelectorAll('.order')


// let snoo = document.querySelector(".main");
// let dii = snoo.querySelectorAll("button");
// let jo = [1, 4, 8];
// let storm=[]
// let ds = 0;
for (let i of jo) {
  // console.log(typeof(Number(i.dataset.id)))
  let cot = Number(i.dataset.id);
  // console.log(cot)
  // ds++;
  if (op.includes(cot) === true) {
    // i.innerHTML='DOOJD'
    i.setAttribute("disabled", "")
  		i.innerHTML='Товар в карзине'
    // i.dataset.id == cot;
    // console.log(cot);
  } else {
    // console.log("do not");
  }

  // console.log(i.dataset.id)
}

// let dot=0
// 		for (i of jo) {

// 		// si.push(Number(jo[i].dataset.id))	
// dot++
// 			if (i.dataset.id.includes(op[dot])===true) {


// 			console.log('good')

// }
// 	}
// console.log(si)
// новый код

// for (let i = 0; i <= op.length; i++) {
//   if (si.includes(op[i])===true) {


//     // console.log(jo[op[i]].dataset.id);
//   }
//   // break  
// }

// let butt=[]
// let i = 0;
// function po(i,op) {     
  

//   if (si.indexOf(op[i]) != -1 && i<=op.length) {

//   	// jo[si[i]].setAttribute("disabled", "")
//   	// jo[si[i]].innerHTML='Товар в карзине'
//   	// jo[si[si.indexOf(op[i])]].innerHTML='Товар в карзине'
//   	// jo[si[si.indexOf(op[i])]].setAttribute("disabled", "")
  	
//   	// butt.push(si[si.indexOf(op[i])])

//   // jo.dataset.id==[si[si.indexOf(op[i])]].setAttribute("disabled", "")
//   // for (i of jo) {
//   // 	if (i.dataset.id==si[si.indexOf(op[i])]){
//   // 		i.setAttribute("disabled", "")
//   // 		i.innerHTML='Товар в карзине'
//   // 	}
//   // }  	
// // let ss=jo.dataset.id==si[si.indexOf(op[i])]
//     console.log(Number(jo[si[si.indexOf(op[i])]].dataset.id));     
//     po(i+1,op);    
        
//   }else if(si.indexOf(op[i]) == -1 && i<=op.length){
//      po(i+1,op);
//   }
  
// }

// po(i,op);

// console.log(jo[0].dataset.id)

document.onclick=event=> {

	mass_bag=localStorage.getItem('a')

	mass_bag=JSON.parse(mass_bag)
			// console.log(mass_bag)

	if (event.target.className=='btn btn-primary order') {

// работа с кнопкой

		event.target.innerHTML='Товар в карзине'
		event.target.setAttribute("disabled", "")
		document.querySelector('.bag').style.color='red'

// получение элементов из формы
		let img=event.target.closest('.card').firstElementChild.src
		let name_product=event.target.closest('.card').children[1].firstElementChild.innerHTML
		let cost_product=event.target.closest('.card').children[1].firstElementChild.nextElementSibling.firstElementChild.innerHTML
		let id=event.target.dataset.id

// запись в localStorage
		if (localStorage.getItem('a')!=null) {

			mass_bag=localStorage.getItem('a')

			mass_bag=JSON.parse(mass_bag)

			mass_bag.push({id:id,img:img,name:name_product,cost:cost_product})

			localStorage.setItem('a',JSON.stringify(mass_bag))

		}else{

			mass_bag=[{id:id,img:img,name:name_product,cost:cost_product}]
			localStorage.setItem('a',JSON.stringify(mass_bag))

		}

	}


}



