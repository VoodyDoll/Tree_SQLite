let mass_bag=[]
let jo=''
let img=''
let name_product=''
let cost_product=''
let id=''





document.onclick=event=> {

if (event.target.className=='btn btn-primary order') {

img=event.target.closest('.card').firstElementChild.src
name_product=event.target.closest('.card').children[1].firstElementChild.innerHTML
cost_product=event.target.closest('.card').children[1].firstElementChild.nextElementSibling.firstElementChild.innerHTML
id=event.target.dataset.id

if (localStorage.getItem('a')!=null) {

mass_bag=localStorage.getItem('a')

mass_bag=JSON.parse(mass_bag)

mass_bag.push({id:id,img:img,name:name_product,cost:cost_product})

localStorage.setItem('a',JSON.stringify(mass_bag))
// let b=localStorage.getItem('a')
// b=JSON.parse(b)
// console.log(b)
}else{

mass_bag=[{id:id,img:img,name:name_product,cost:cost_product}]
localStorage.setItem('a',JSON.stringify(mass_bag))
// let b=localStorage.getItem('a')
// b=JSON.parse(b)
}

// mass_bag.push(localStorage.getItem('a'))

// получение объектов страницы





}


}



