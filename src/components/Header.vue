<template>
  <carusel></carusel>
  <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"> -->
  <nav-bar @setcher='searchr'></nav-bar>
  <bag-window></bag-window>
</template>

<script>
  import Carusel from '@/components/Carusel.vue'
  import NavBar from '@/components/NavBar.vue'
  import BagWindow from '@/components/BagWindow.vue'
  export default {
    components:{
      Carusel,
      NavBar,
      BagWindow
    },
    props:['case'],
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
      // передача из navbar
      searchr(search){
        // console.log(search)
        this.$emit('searc',search)
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

    margin: 5px;
  }


</style>
