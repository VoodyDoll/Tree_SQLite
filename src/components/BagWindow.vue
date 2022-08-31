<template>
	<!-- КОРЗИНКА МАГАЗИНА -->
	
    <div v-if="bagWindow" class="bagWindow">
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
    </div>


</template>

<script>
export default {

  name: 'bagWindow',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>