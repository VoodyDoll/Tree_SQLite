<template>
<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://picsum.photos/id/236/1200/300" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://picsum.photos/id/238/1200/300" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://picsum.photos/id/239/1200/300/?blur" class="d-block w-100" alt="...">
    </div>
  </div>
</div>
  <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"> -->
  
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Наборы</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Роллы</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Горячие роллы</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Маки роллы</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Гунканы роллы</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Пиццы</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Wok</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Супы</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Салаты</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Закуски</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item" v-if='case'>
          <button type="button" class="btn btn-outline-danger">КОРЗИНА</button>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  
  
  
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

    margin: 5px;
  }


</style>
