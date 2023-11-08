<!-- AQUI SÃO AS VIEWS DAS ROTAS CRIADAS, O QUE CADA UMA VAI CONTER, E É O QUE SERÁ EXIBIDO EM ROUTERVIEW -->
<template>
  <div class="main-container">
    <h1>GERENCIAR PEDIDOS</h1>
    <Dashboard />
  </div>
</template>

<script>
import Dashboard from '../components/Dashboard.vue'
  export default {
    name: 'Pedidos',
    components:{
      Dashboard
    }
  }
</script>

<style scoped>
    .main-container{
    margin: 50px;
    min-height: 250px;
    margin-bottom: 355px;
  }

  h1{
    text-align: center;
    font-size: 42px;
    margin-bottom: 30px;
    color: #222;
  }

</style>
