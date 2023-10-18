<template>
	<div class="container">
    <div class="row">
      <div class="col-md">
       <my-select v-model='selectedSort' @change='option_chang'  :options='sortOptions'></my-select>
      </div>
    </div>
    {{selectedSort}}
  </div>
</template>

<script>
export default {

  name: 'Filter',

  data () {
    
    return {
      selectedSort:'',
      sortOptions:[
        {value:'costlow',name:'От дешовых к дорогим'},
        {value:'costbig',name:'От дорогих к дешовым'}
      ],
     

    }
  },
  methods:{
      option_chang(){      
      this.$emit('revers',this.selectedSort)
     // console.log(newValue)
     
    }
  },
  // watch:{
  //   selectedSort(newValue){      
  //     this.$emit('revers',newValue)
  //    // console.log(newValue)
     
  //   }
  // },
  mounted(){console.log('ffff')}
}
</script>

<style lang="css" scoped>
</style>