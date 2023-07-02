document.querySelector('.bag').onclick=function(){
  let num_price=1
  let mass_bag_win=localStorage.getItem('a')
  mass_bag_win=JSON.parse(mass_bag_win)
  // удаление чтобы небыло накопления
  let mass_bag_sorage=document.querySelectorAll('.kook')


  for (i of mass_bag_sorage) {
    i.remove()
  }

  for (let tot of mass_bag_win) {

    let div = document.createElement('div');
    div.className='kook'
    div.innerHTML=`<div class="container">
    
    <div class="row">
    <div class="col-md-4"><img src=${tot.img} class="rounded mx-auto d-block" alt="..."></div>
    <div class="col-md-6" style="background-color: #F8F9FA;"><h5 class="">${tot.name}</h5></div>
    <div class="col-md-2"><input type="number" min="1" max="15" class="input_fild" style="width:50px;"><h3><h3 data-gnoo=${tot.cost}>${tot.cost}</h3>руб</h3>
    <div class="row">
    <div class="col-md"></div>
    <div class="col-md"><button data-id="{{this.post_id}}" class="btn btn-danger">Удалить из корзины</button></div>
    <div class="col-md"></div>
    </div>
    </div>
    <div class="col-md-12" style="height: 25px;" ></div>
    </div>

    </div>`

    document.querySelector('.img_product').append(div); 

    let input_fild=document.querySelectorAll('.input_fild')
    for ( i of input_fild) {
      i.value=num_price


    }


    price_chenge()


  }

// функция изменения поля цены
  function price_chenge(){


    document.onclick=(event)=>{

      if (event.target.className=='input_fild') {

        // let next_pop=event.target.nextSibling.nextSibling.innerHTML

        let next_index=event.target.nextSibling.nextSibling.dataset.gnoo
        // console.log(next_index)

        let price_chenge=event.target.value*next_index

        event.target.nextSibling.nextSibling.innerHTML=price_chenge

        // console.log(price_chenge)


      }


    }


  }
  

}

