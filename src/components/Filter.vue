<template>
	<div class="container">
    <div class="row">
      <div class="col-md">
        <input type="text" placeholder="Name">
        <input type="text" placeholder="Age"><br>
      </div>
    </div>
    <button @click='boomer'>OK</button>
    <button @click="rezz=null">del</button>   
  </div>
</template>

<script>
export default {

  name: 'Filter',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>