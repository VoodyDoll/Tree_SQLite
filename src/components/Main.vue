<template>
{{toott}}
{{totalPages}}
  <Filter @revers='rport' v-model='selectedSort'></Filter>
  <Cards v-if='!isvisible' :cardrezz='rezz' :toot='toot' :nameButton='bag' @button_navbar='buttonna'></Cards>
  <p v-else>Идет загрузка....</p>
  <!-- страницы -->
  <div class="page_wrapper">
  <div v-for="pagenumber in totalPages"
   :key='pagenumber' 
   class='page' 
   :class="{'curent_page':page === pagenumber}"
   @click='changePage(pagenumber)'
   >
    {{pagenumber}}
  </div>
  </div>
  <div class="container">    
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
        case:'',
        modalWindow:false,
        bagWindow:false,
        selectedSort:'',
        toott:'',
        isvisible:false,
        page:1,
        limit:12,
        totalPages:0,
        toot:''
        
      }
    },
    methods:{     
      // Поле поиска

      // сортировка по стоимости
      rport(toot){
        console.log(toot)
          this.toot=toot
        // console.log(toot)
        if (toot=='costlow') {
          return this.rezz.sort((post1,post2)=>{
          return post1['age']-post2['age']})
        }
        else if (toot=='costbig') {          
          return this.rezz.sort((post1,post2)=>{
          return post2['age']-post1['age']})
        }        

        },
        // страницы
      changePage(pagenumber){
        this.page=pagenumber
         fetch(`http://localhost:3000/go?limit=${this.limit}&page=${this.page}`,{ 
          method: 'GET',
          headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },      
    })
     .then(res=>res.json())                 
     .then(data=>this.rezz=data)  
 // console.log(this.rezz)
              
        },
// console.log(this.toot)
      
      // кнопка в navbar
      buttonna(cased){

        console.log(cased)
        this.$emit('button_navbar',cased)
        
      }          
    },
    // первый запуск
    created(){      
      this.isvisible=true
     fetch(`http://localhost:3000?limit=${this.limit}`,{ 
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },      
    })
     .then(res=>res.json())                 
     .then(data=>this.rezz=data)      
     .then(data=>this.totalPages=Math.ceil(Number(this.rezz[0].allposition)/this.limit))  
          
     .then(data=>this.isvisible=false)      
      // this.totalPages=Math.ceil(Number(rezz[0].allposition)/this.limit)
   },
   watch:{
    // функция поиска
    searchr(pil){
      pil=pil.toUpperCase()      
      return [...this.rezz]=this.rezz.filter(post=>post.name.toUpperCase().includes(pil))
     
    },
    // фильтр цены не сбрасывается при смене страниц
    rezz(){
      this.rport(this.toot)
      
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
.page_wrapper{
  display:flex;
  margin-top:15px
}
.page{
  border:1px solid black;
  padding:10px
}
.curent_page{
  border:3px solid teal
}

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
