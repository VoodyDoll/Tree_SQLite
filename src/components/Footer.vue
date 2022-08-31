<template>
  <!-- <div class="container"> -->
    <div class="row row-cols-2">
      <div class="col pop">Пицца "Верона" в ПОДАРОК при первом заказе через наше мобильное приложение!

• Скачайте мобильное приложение UDS App (в Play market или App Stor) на свой смартфон

• Зарегистрируйтесь и введите наш ПРОМОКОД: skck5690

100 вступительных баллов вы можете использовать как скидку на свой заказ, либо обменять на пиццу "Верона"!

КОПИТЕ БАЛЛЫ С ЗАКАЗОВ ДРУЗЕЙ - жмите на кнопку "РЕКОМЕНДОВАТЬ" , друг зарегистрируется по вашему промокоду и вам ВСЕГДА с его заказов будет начисляться 8%, и с заказов его друзей еще до 5%

С нами ВЫГОДНО!

Принимаем предзаказы на удобное для Вас время!

Заказы доставляются БЕСПЛАТНО от 500 (без учёта напитков) рублей в пределах города!</div>
      <div class="col"><img width="900" height="200" src="../static/img/dolfin.jpg" ></div>
      <div class="col texter">
      г. Севастополь, ПОР, 32-В (2 этаж)<br>
      г.Севастополь, ул. Гоголя, 36 <br>
      Заказ по телефону  <br>
      <a href="tel:+79780519373">+7 (978) 051-93-73</a><br>
      С 10:00 до 23:00 без выходных
    </div>
      <div class="col"><img width="900" height="200" src="../static/img/logo.jpg" ></div>
    </div>
  <!-- </div> -->
  
  
  
</template>

<script>
  export default {
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
  .pop{
    background: red;
    color: white;
  }



</style>
