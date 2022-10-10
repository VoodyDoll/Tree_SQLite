<template>
	<div class="container">
	    <div  class="d-flex flex-wrap">
      
      <div class="miss" v-for="jo in cardrezz" :key='jo'>

       <div class="card"  style="width: 18rem;">
        <img width="300" height="200" :src="require(`../static/img/${jo.img}`)" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{jo.name}}</h5>
          <p class="card-text">{{jo.age}}</p>
          <p class="card-text">{{jo.allposition}}</p>
          <p class="card-text">{{jo.id}}</p>
          
          
            <button class='btn btn-primary' @click="chenge_class($event)" >{{nameButton}}</button>
            
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
export default {

  name: 'Cards',
  props:{
  	cardrezz:{
  		type:[String, Array]
  	},
  	nameButton:{
  		type:String
  	},
    serch:{
      type:String
    }
  },

  data () {
    return {
      serch:''

    }
  },
   methods:{ 



         // изменяет класс кнопки при клике по ней 
      chenge_class(){
        if (event.target.className=='btn btn-danger') {
          // this.bagWindow=true
        }
          // console.log('555')
        // }else{
        //   console.log(event.target.className)
        //  this.modalWindow=true    
        this.caseLoad({case:this.case})     
        event.target.className='btn btn-primary'      
        event.target.className='';
        event.target.className='btn btn-danger';
        event.target.style= 'width:250px';
        event.target.innerHTML='в корзинке';
        event.target.innerHTML.style='font-size:18px';

        // localStorage.setItem('ko','joo')

        // }
      }
      // selBody(jo){
      //   localStorage.setItem('ko',jo)
      // }      
    },
}
</script>

<style lang="css" scoped>
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
  .col{
    border: 1px solid; 
  }
.col-2,.col-4{
  border: solid 1px;
}

</style>
