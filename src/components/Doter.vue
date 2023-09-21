<template>	

	<input  type="text" v-model='myvalue' >

  

</template>

<script>
export default {

  name: 'Doter',

  props:{
    myvalue:{
      type:[String, Number]
    },
    goos:{
      type:String
    },
    fill:{
      type:String
    },
    foo:{
      type:Array
    },
    ptah:{
      type:String
    }
  },

  data () {
    return {
    	goos:'gf',
      goo:[],
      tity:''

    }
  },
  methods:{
    tot(top){
      console.log(top)

    },
    giga(){
      this.$emit('update:myvalue',event.target.value)

    }

  },
  computed:{
  	lord(){

  	}
  }





</script>

<style lang="css" scoped>
.checkbox{
  display :'block'
}
</style>
