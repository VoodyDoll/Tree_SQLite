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
    <div class="go">
      <div class="miss" v-for="jo in rezz">
        <!-- <div class="container"> -->
          <!-- <div class="row"> -->

            <!-- <div class="col" id="vo">  -->
             <div class="card" style="width: 18rem;">
              <img :src="require(`../static/img/${jo.img}`)" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">{{jo.name}}</h5>
                <p class="card-text">{{jo.age}}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>

          <!-- </div> -->
        <!-- </div> -->
      <!-- </div> -->
    <!-- </div>   -->
  </div>  
</div>  
<div class="container mt-5">
  <div class="row">
    <div class="col-sm-4">
      <h3>Column 1</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    </div>
    <div class="col-sm-4">
      <h3>Column 2</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    </div>
    <div class="col-sm-4">
      <h3>Column 3</h3>        
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    </div>
  </div>
</div>
<div class="container">
  <div class="row">
    <div class="col-sm-6">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- </div> -->
</template>

<script>
  export default {
    data(){
      return{
        you:'Dependances',
        titleproduct:[],         
        plus:0,        
        rezz:null,
        datat:null,
      }
    },
    methods:{
      boomer(){      
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
