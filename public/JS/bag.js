// Создание массива корзины
let mass_bag=[]
let but_id=''
document.onclick=event=> {

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



