document.querySelector('.bag').onclick=function(){
  let num_price=1
  let mass_bag_win=localStorage.getItem('a')

  mass_bag_win=JSON.parse(mass_bag_win)

  // удаление чтобы небыло накопления
  let mass_bag_storage=document.querySelectorAll('.kook')


  for (i of mass_bag_storage) {
    i.remove()
  }

  // console.log(mass_bag_win)
// document.querySelector('.input_fild').value=i.cost_number
  for ( i of mass_bag_win) {
    
    let div = document.createElement('div');
    div.className='kook'
    div.setAttribute('data-id', i.id)    
  
    if (i.cost_number!=undefined) {
    div.innerHTML=`<div class="container">
    
    <div class="row">
    <div class="col-md-4"><img src=${i.img} class="rounded mx-auto d-block" alt="..."></div>
    <div class="col-md-6" style="background-color: #F8F9FA;"><h5 class="">${i.name}</h5></div>

    <div class="col-md-2"><input value=${i.cost_number} data-id=${i.id} type="number" min="1" max="15" class="input_fild" style="width:50px;"><h3><h3 class='poor_cost' data-id=${i.id} data-gnoo=${i.cost}>${i.cost}</h3>руб</h3>
    <div class="row">
    <div class="col-md"></div>
    <div class="col-md"><button data-id=${i.id} class="btn btn-danger">Удалить из корзины</button></div>
    <div class="col-md"></div>
    </div>
    </div>
    <div class="col-md-12" style="height: 25px;"></div>
    </div>
    </div>`
}else {  

    div.innerHTML=`<div class="container">
    
    <div class="row">
    <div class="col-md-4"><img src=${i.img} class="rounded mx-auto d-block" alt="..."></div>
    <div class="col-md-6" style="background-color: #F8F9FA;"><h5 class="">${i.name}</h5></div>

    <div class="col-md-2"><input value=1  data-id=${i.id} type="number" min="1" max="15" class="input_fild" style="width:50px;"><h3><h3 class='poor_cost' data-id=${i.id} data-gnoo=${i.cost}>${i.cost}</h3>руб</h3>
    <div class="row">
    <div class="col-md"></div>
    <div class="col-md"><button data-id=${i.id} class="btn btn-danger">Удалить из корзины</button></div>
    <div class="col-md"></div>
    </div>
    </div>
    <div class="col-md-12" style="height: 25px;"></div>
    </div>
    </div>`
}

    document.querySelector('.img_product').append(div); 

    // let input_fild=document.querySelectorAll('.input_fild')
    // for ( i of input_fild) {
    //   i.value=num_price


    // }

    price_chenge()  


  }

// функция изменения поля цены(точка входа в основную прогу)
  function price_chenge(){

    document.onclick=(event)=>{

      if (event.target.className=='input_fild') {       

        let next_index=event.target.nextSibling.nextSibling.dataset.gnoo  

        let forst=event.target.nextSibling.nextSibling.dataset.id
        let soom=event.target.nextSibling.nextSibling.innerHTML

        let price_chenge=event.target.value*next_index
        let cost_number=event.target.nextSibling.nextSibling.dataset.full=event.target.value

        event.target.nextSibling.nextSibling.innerHTML=price_chenge
      
        create_modalw(forst,price_chenge,cost_number)

      }

    }

  }

// функция записи в localstorage 'a' данных из карзины
  function create_modalw(forst,price_chenge,cost_number){

    for (i of mass_bag) {

      if (i.id==forst) {
        i.cost=price_chenge
        i.cost_number=cost_number
      }      

    }  
// console.log(mass_bag)
    localStorage.setItem('a',JSON.stringify(mass_bag))
all_cost()
  }

  




  // функция общей цены
  function all_cost(){
    // let costs=document.querySelectorAll('.poor_cost')

for (i of mass_bag_win) {

 i=+i.cost
document.querySelector('.costs').innerHTML=i
  // console.log(Number(i.innerHTML))

}
    
  }


}

