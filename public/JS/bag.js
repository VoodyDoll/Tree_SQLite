// Создание массива корзины
let mass_bag=[]
let but_id=''

//------ Работа с кнопкой и localStorage
// данные из localStorage
let op=[]
mass_bag=localStorage.getItem('a')
// console.log(mass_bag)
if (mass_bag!=null) {
	mass_bag=JSON.parse(mass_bag)

	for (let i of mass_bag) {
		i.id=Number(i.id)
		op.push(i.id)
		// op=[...new Set(op)];
		// tootorials
		// knoot
	}
}

// данные из страницы HTML

let jo=document.querySelectorAll('.order')

for (let i of jo) {

	let cot = Number(i.dataset.id);

	if (op.includes(cot) === true) {

		i.setAttribute("disabled", "")
		i.innerHTML='Товар в карзине'
		document.querySelector('.bag').style.color='red'

		document.querySelector('.badge').innerHTML=op.length

	} else {
		document.querySelector('.badge').innerHTML=op.length
	}

}
// --------
// --------Действие по нажатию кнопки
document.onclick=event=> {

	mass_bag=localStorage.getItem('a')

	mass_bag=JSON.parse(mass_bag)


	if (event.target.className=='btn btn-primary order') {
		// console.log(mass_bag)
		
		if (mass_bag===null) {

			document.querySelector('.badge').innerHTML=1

		}else{document.querySelector('.badge').innerHTML=mass_bag.length+1}



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
// стираине из карзины
	if (event.target.className=='btn btn-danger') {
let snoorf=[]
cot=Number(event.target.dataset.id)
// console.log(mass_bag)
// for (i of mass_bag) {
// 	// statement
// }
// console.log(mass_bag.id.indexOf(cot))

		// if (op.indexOf(cot)!=-1) {
// mass_bag=localStorage.getItem('a')

// 	mass_bag=JSON.parse(mass_bag)
 
	// console.log(typeof(op.indexOf(cot)))
mass_bag=localStorage.getItem('a')
// console.log(mass_bag)
if (mass_bag!=null) {
	mass_bag=JSON.parse(mass_bag)

	for (let i of mass_bag) {
		i.id=Number(i.id)
		op.push(i.id)
		// op=[...new Set(op)];
		// tootorials
		// knoot
	}
}


delete mass_bag[op.indexOf(cot)]

// console.log(mass_bag)

mass_bag.forEach((item)=>{
	if (item!=null) {
		delete mass_bag
		snoorf.push(item)
	} 

	
})

localStorage.clear('a')
	localStorage.setItem('a',JSON.stringify(snoorf))


console.log(mass_bag)


	// mass_bag.splice(op.indexOf(cot),1)
	// console.log(mass_bag)
// }

// 			console.log('good')
// 			console.log(mass_bag.id)

// // .slice()
// 		}else{console.log('bad')}




// console.log(event.target.dataset.id)
// console.log(mass_bag)

		// let data = localStorage.a

// for (i of mass_bag) {
// 	console.log(i)
// 	// cot = i.dataset.id
// 	// console.log(i.dataset.id)


// }
// if (mass_bag!=null) {
// 	mass_bag=JSON.parse(mass_bag)
// console.log(op)
	// for (let i of mass_bag) {
	// 	i.id=Number(i.id)
	// 	// console.log(i.id)

	
}

// if (event.target.dataset.id.includes(data) === true) {

// 		event.target.dataset.id

// 	// localStorage.removeItem('a')
// 	}
}
// }
// --------

