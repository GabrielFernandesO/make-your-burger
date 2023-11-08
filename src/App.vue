<template>
  <!-- VAMOS PASSAR OS DADOS DA IMG PARA NAVBAR DINAMICAMENTE USANDO PROPS, ASSIM CASO NECESSÁRIO TROCAR A IMAGEM E SUA ALT BASTA TROCAR APENAS NO ELEMENTO PAI, NO CASO
  NÃO ESQUECER TAMBÉM DO USO DO V-BIND QUE ABREVIADO FICA ":" PARA DINAMIZAR. -->
   <Navbar :logo="logo_src" :alt="app_name"/>

   <!-- ONDE OS COMPONENTES DA ROTA ATUAL SERÁ RENDERIZADO. EX: HOME POSSUE UMA DIV HOME, AO SER CLICADO EM HOME, IRÁ APARCER AQUI O HOME ESCRITO NO H1
        CASO CLIQUE EM PEDIDOS EM ROUTER VIEW VAI MUDAR PRO QUE TEM DENTRO DE PEDIDOS -->
   <RouterView/>
   <Footer />
</template>

<script>
  import Navbar from './components/Navbar.vue'
  import Footer from './components/Footer.vue'

  export default{
    components: {
      Navbar,
      Footer
    },
    //PARA ISSO VAMOS RECEBER UM DATA COM ESSES ARQUIVOS QUE SERÃO ENVIADOS POR PROPS COM USO DE V-BIND AO COMPONENT Navbar.
    data(){
      return{
        logo_src: '/img/logo.png',
        app_name: 'Make Your Burger'

      }
    }
  }
</script>

<style>
  *{
    font-family: Helvetica;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  } 
  

</style>