document.querySelector('.bag').onclick=function(){

 let mass_bag_win=localStorage.getItem('a')
    mass_bag_win=JSON.parse(mass_bag_win)
    // удаление чтобы небыло накопления
if (document.querySelector('.kook')) {
  document.querySelector('.kook').remove()
}else{

for (let tot of mass_bag_win) {

let div = document.createElement('div');
div.className='kook'
div.innerHTML=`<div class="card" style="width: 18rem;">
  <img src=${tot.img} class="rounded mx-auto d-block" alt="...">
  <div class="card-body">
    <h5 class="card-title">${tot.name}</h5>
    <p class="card-text"><span>${tot.cost}</span>руб</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">
      <div class="accordion accordion-flush" id="accordion{{@index}}">
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

</div>

    </li>
    
    <li class="list-group-item"><button data-id="{{this.post_id}}" class="btn btn-danger">Удалить заказ</button></li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>`
// console.log(img)
  document.querySelector('.img_product').append(div); 

// document.querySelector('#img_product').src=tot.img

}

 // delete mass_bag_win
}


}