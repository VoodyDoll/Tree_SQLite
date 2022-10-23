<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- передача из радителя в дочь -->
 <Header @searc='searchh' :case='case' :cased='cased'></Header>
  <Main :searchr='search' :caseLoad='caseLoad' @button_navbar='button_navbar'></Main>  
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
      search:'',
      cased:false
    }

  },
  methods:{ 
    caseLoad(data){
      this.case=data
      // console.log('case')

    },
    searchh(sear){
      // console.log(sear)
      // this.$emit('sear',search)
      this.search=sear
      // console.log(sear)

    },
    button_navbar(cased){           
      this.cased=cased
      console.log(cased)
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
