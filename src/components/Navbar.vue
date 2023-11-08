<template>
    <div id="nav">
        <RouterLink to="/" id="logo-url">
            <!-- AO CHEGAR NESSE COMPONENTE USAMOS O V-BIND SEMPRE PARA DINAMIZAR. SENDO OS MESMOS QUE FORAM PASSADOS NO ELEMENTO PAI. logo e alt.
            ENTRETANTO DEVE-SE CRIAR UM PROPS NO SCRIPT CHAMANDO ESSES PROPS PARA PODEREM SER UTILIZADOS POR V-BIND EM IMG -->
            <img :src="logo" :alt="alt" id="logo">
        </RouterLink>
        <!-- ROTA DOS ARQUIVOS CRIADO, AQUI É BASICAMENTE O LINK CLICÁVEL DA ROTA QUE VOU CRIADA EM ROUTER -->
        <RouterLink to="/">Home</RouterLink> 
        <RouterLink to="/pedidos">Pedidos</RouterLink>
    </div>
</template>

<script>
    export default{
        name: 'Navbar',
        props: ['logo', 'alt']
    }
</script>

<style scoped>
    #nav{
        background-color: #222;
        border-bottom: 4px solid #111;
        padding: 15px 50px;
        display: flex;
        justify-content:flex-end;
        align-items: center;
    }
    #nav #logo-url{
        margin: auto;
        margin-left: 0;
    }
    #logo{
        width: 40px;
        height: 40px;
        
    }
    #nav a{
        color: #FCBA03;
        text-decoration: none;
        margin: 12px;
        transition: .5s;
    }

    #nav a:hover{
        color: #FFF
    }
</style>