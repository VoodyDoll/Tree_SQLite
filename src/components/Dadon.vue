<template>
  <div v-if='boo'>
    <img  :src="require(`../static/img/dolfin.jpg`)" alt="">

  </div>
  <!-- <div v-else-if='boo===false'>dsd</div> -->
  <button @click="zoo">Image</button>
  <my-input v-model:myvalue='gnuss'></my-input>
  <my-input v-model:myvalue='gnu'></my-input>
  <my-button @click='fool'></my-button>
  

</template>

<script>
import Doter from '@/components/Doter.vue'
import Sun from '@/components/Sun.vue'

export default {
components:{
   Doter,
   Sun
  },
  name: 'Muter',

  data () {    
    return {
      got:'',
      aza:[
      {valuess:'focuss',name:'Фикус',age:10},
      {valuess:'loid',name:'Пальма',age:12},
      {valuess:'chankala',name:'Хвощ',age:13},
      {valuess:'zizan',name:'Пудра',age:14}

      ],
      foxy:false,
      gudariann:'',
      cill:'',
      boop:'',
      toys:[],
      dooda:'GOD',
      hoth:'GIISRA',
      poopa:'ррр',
      gnuss:'',
      myvalue:'',
      gnu:'',
      boo:false      
    }
  },
  methods:{
    fox(){
     this.$refs.gott.value=555
      this.foxy=true
    },
    human(){    

     this.boop=this.cill
    },
    fool(){
      console.log(`Да ${this.gnu} как ${this.gnuss}`)
    },
    zoo(){
      if (this.boo==true) {
        this.boo=false
      }else{
        this.boo=true
      }
    }
    // goo(){
    //   this.aza.push({valuess:'tyhg',name:'Ghg',age:100})
    // }
  },
  computed:{    
    goo(){     
      return this.aza.reduce((item,nin)=>(item=item+nin.age),0)
    }
  }

// watch: {
//   cill(val){
//     this.boop=val
//   }
// }
}

</script>

<style lang="css" scoped>
  .opo{
    color: red;
  }

.spg{
  color: gold;
}

</style>
