<template>

  <Filter @revers='rport' v-model='selectedSort'></Filter>
  <Cards v-if='!isvisible' :cardrezz='rezz' :nameButton='bag'></Cards>
  <p v-else>Идет загрузка....</p>
  <div class="container">    

    <!-- КОРЗИНКА МАГАЗИНА -->
    <!-- <div v-if="bagWindow" class="bagWindow">
      <div class="container">
        <div class="row">
          <div class="col с0 text-start bg-danger text-white fs-4 text">Корзина</div>    
        </div>
        <div class="row">
          <div class="col c1"></div>
          <div class="col c2">Товар</div>
          <div class="col c3">Цена</div>
          <div class="col c4">Количество</div>
          <div class="col c5">Итого</div>
        </div>

        <div class="row">
          <div class="col-12 text-end">СУММА ЗАКАЗОВ</div>
         </div>

        <div class="row justify-content-md-end">          
          <div class="col-2">Подытог</div>
          <div class="col-2">col-8</div>
        </div>  
        <div class="row justify-content-md-end">          
          <div class="col-2">Доставка</div>
          <div class="col-2">col-8</div>
        </div> 
         <div class="row justify-content-md-end">          
          <div class="col-2">Итого</div>
          <div class="col-2">col-8</div>
        </div>  
        <div class="row justify-content-md-end ">          
          <div class="col-4 bg-danger text-white">ОФОРМИТЬ ЗАКАЗ</div>
          
        </div>     
        
      </div>
    </div> -->
    <!--  -->


  </div>
</template>

<script>
import Filter from '@/components/Filter.vue'
import Cards from '@/components/Cards.vue'
export default {
  components:{
    Filter,
    Cards
  },
  props:{
    
    searchr:{
      type:[String,Array]
    }

  },
  data(){
    return{
      you:'Dependances',
      titleproduct:[],         
      plus:0,        
      rezz:[],
      datat:null,        
      bag:'В корзинку+',
        // кнопка в карзину 
        case:false,
        modalWindow:false,
        bagWindow:false,
        selectedSort:'',
        toot:'',
        isvisible:false,
        page:1,
        limit:12,
        totalPages:0
        
      }
    },
    methods:{     
      // Поле поиска

      // сортировка по стоимости
      rport(toot){
        // console.log(toot)
        if (toot=='costlow') {
          return this.rezz.sort((post1,post2)=>{
          return post1['age']-post2['age']})
        }
        else if (toot=='costbig') {
          return this.rezz.sort((post1,post2)=>{
          return post2['age']-post1['age']})
        }        

        }
        
    },
    mounted(){      
      this.isvisible=true
     fetch(`http://localhost:3000?limit=${this.limit}&page=4`,{ 
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },      
    })
     .then(res=>res.json())                 
     .then(data=>this.rezz=data)      
     // .then(data=>this.totalPages=Math.ceil(totolpost/this.limit))  
          
     .then(data=>this.isvisible=false)      
      
   },
   watch:{
    searchr(pil){
      pil=pil.toUpperCase()      
      return [...this.rezz]=this.rezz.filter(post=>post.name.toUpperCase().includes(pil))
     
    }
   },

   computed:{
    // sortedPost(){
    //   return [...this.rezz].sort((post1,post2)=>{
    //     return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
    //   })
    // },
    // sortedElements(){
    //   return this.sortedPost.filter(post=>post.img.toLowerCase().includes(this.searchQuery.toLowerCase()))
    // }
  },

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
.col{
  border: 1px solid; 
}
.col-2,.col-4{
  border: solid 1px;
}

</style>
