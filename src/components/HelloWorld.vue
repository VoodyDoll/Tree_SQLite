<template>

  <div class="container">
    <div class="row">
      <div class="col-md">
        <input type="text" placeholder="Name">
        <input type="text" placeholder="Age"><br>
      </div>
    </div>
    <button @click='boomer'>OK</button>
    <button @click="rezz=null">del</button>   
  </div>

  <div class="container">
    <div class="d-flex flex-wrap">
      <div class="miss" v-for="jo in rezz" :key='jo'>

       <div class="card"  style="width: 18rem;">
        <img width="300" height="200" :src="require(`../static/img/${jo.img}`)" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{jo.name}}</h5>
          <p class="card-text">{{jo.age}}</p>
          <!-- <div > -->
            <button class='btn btn-primary' @click='chenge_class'>{{bag}}</button>
          <!-- <a class='btn btn-primary' ><b>{{bag}}</b></a> -->
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</div>

<!-- <div class="container"> -->
  <!-- <div class="row"> -->
    <!-- <div class="col-sm-6">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div> -->
  <!--   <div class="col-sm-6">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary">В карзинку+</a>
        </div>
      </div>
    </div> -->
  <!-- </div> -->
<!-- </div> -->
<!-- </div> -->
</template>

<script>
  export default {
    data(){
      return{
        you:'Dependances',
        titleproduct:[],         
        plus:0,        
        rezz:[],
        datat:null,        
        bag:'В корзинку+',
        // кнопка в карзину 
        case:null
      }
    },
    methods:{
      
      chenge_class(event){
        this.case=true;
        console.log(this.case)
        event.target.className='btn btn-primary'      
        event.target.className='';
        event.target.className='btn btn-danger';
        event.target.style= 'width:250px';
        event.target.innerHTML='корзинка';
        event.target.innerHTML.style='font-size:18px';        
        
        }
         

      
    },
    mounted(){
       fetch('http://localhost:3000',{ 
          method: 'GET',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },      
        })
        .then(res=>res.json())                 
        .then(data=>this.rezz=data) 
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .miss {

    margin-right: 10px;
  }
  #vo{
    border: 1px;
  }
  .go{
    width: 100%;
    display: flex;
    margin: 0; /* Обнуляем значение отступов */
    padding: 4px; /* Значение полей */
    justify-content: center;
  }

</style>
