<!-- AQUI SÃO AS VIEWS DAS ROTAS CRIADAS, O QUE CADA UMA VAI CONTER, E É O QUE SERÁ EXIBIDO EM ROUTERVIEW -->
<template>
  <Banner />
    <div class="main-container">
      <h1>Monte o seu Burger</h1>
      <BurgerForm />
    </div>
</template>

<script>
import Banner from '../components/Banner.vue'
import BurgerForm from '../components/BurgerForm.vue'
export default{
  name:'Home',
  components:{
    Banner,
    BurgerForm
  }
}

</script>

<style scoped>
    .main-container{
    margin: 50px;
    min-height: 250px;
  }

  h1{
    text-align: center;
    font-size: 42px;
    margin-bottom: 30px;
    color: #222;
  }

  #footer{
        height: 200px;
        background-color: #222;
        border-top: 4px solid #111;
        color: #FCBA03;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        bottom: 0;
    }
</style>
