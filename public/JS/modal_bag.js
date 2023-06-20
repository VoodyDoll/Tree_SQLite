


document.querySelector('.bag').onclick=function(){
  mass_bag=localStorage.getItem('a')
  mass_bag=JSON.parse(mass_bag)

for (let tot of mass_bag) {

document.querySelector('#img_product').src=tot.img

 
}





}