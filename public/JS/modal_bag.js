document.querySelector('.bag').onclick=function(){
  let num_price=1


 let mass_bag_win=localStorage.getItem('a')
    mass_bag_win=JSON.parse(mass_bag_win)
    // удаление чтобы небыло накопления
    let mass_bag_sorage=document.querySelectorAll('.kook')
    console.log(mass_bag_sorage)

  for (i of mass_bag_sorage) {
    i.remove()
  }

for (let tot of mass_bag_win) {

let div = document.createElement('div');
div.className='kook'
div.innerHTML=`<div class="container">
  <!-- <div class="row"> -->
    <div class="row">
      <div class="col-md-4"><img src=${tot.img} class="rounded mx-auto d-block" alt="..."></div>
      <div class="col-md-6" style="background-color: #F8F9FA;"><h5 class="">${tot.name}</h5></div>
      <div class="col-md-2"><input type="number" min="1" max="15" class="input_fild" style="width:50px;"><h3><h3>${tot.cost}</h3>руб</h3></div>
    </div>

    <div class="row">
      <div class="col-md"></div>
      <div class="col-md"><button data-id="{{this.post_id}}" class="btn btn-danger">Удалить из корзины</button></div>
      <div class="col-md"></div>
    </div>
    
<!--     <div class="col">
      <img src=${tot.img} class="rounded mx-auto d-block" alt="...">
    </d
    <div class="col">
      <h5 class="">${tot.name}</h5>
    </div>
    <div class="col">
      <h3>${tot.cost}</h3>руб</p>
    </div>
  </div> -->
<!-- </div> -->




<!-- <div class="card" style="width: 500%;">
  <img src=${tot.img} class="rounded mx-auto d-block" alt="...">
  <div class="card-body" style="width: 500%">
    <h5 class="card-title">${tot.name}</h5>
    <p class="card-text"><h3>${tot.cost}</h3>руб</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"> -->


  <!--     <div class="accordion accordion-flush" id="accordion{{@index}}">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush{{@index}}">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse{{@index}}" aria-expanded="false" aria-controls="flush-collapse{{@index}}">
        Состав блюда
      </button>
    </h2>
    <div id="flush-collapse{{@index}}" class="accordion-collapse collapse" aria-labelledby="flush{{@index}}" data-bs-parent="#accordion{{@index}}">
      <div class="accordion-body">{{this.consists}}</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-heading{{@index}}">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo{{@index}}" aria-expanded="false" aria-controls="flush-collapseTwo{{@index}}">
        Методика приготовления
      </button>
    </h2>
    <div id="flush-collapseTwo{{@index}}" class="accordion-collapse collapse" aria-labelledby="flush-heading{{@index}}" data-bs-parent="#accordion{{@index}}">
      <div class="accordion-body">{{this.method}}</div>
    </div>
  </div>

</div> -->

    <!-- </li> -->
    
    
  <!-- </ul> -->
 <!--  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div> -->
</div>`

  document.querySelector('.img_product').append(div); 


let input_fild=document.querySelectorAll('.input_fild')
for ( i of input_fild) {
  i.value=num_price
}
}

}
