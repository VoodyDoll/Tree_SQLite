<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- передача из радителя в дочь -->
 <Header @searchr='searchr' :case='case'></Header>
  <Main :searchr='searchr' :caseLoad='caseLoad'></Main>  
  <ModalWindow></ModalWindow>  
  <Footer></Footer>  
</template>

<script>
import Main from './components/Main.vue'
import Header from './components/Header'
import ModalWindow from './components/ModalWindow'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Main,
    Header,
    ModalWindow,
    Footer
  },
  data(){
    return{
      // передача из родителя в дочь
      case:false,
    }

  },
  methods:{ 
    caseLoad(data){
      this.case=data
      // console.log('case')

    },
    searchr(searchr){
      this.$emit('searchr',this.searchr)
    }
   }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
