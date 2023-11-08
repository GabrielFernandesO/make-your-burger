<template>
    <div id="main-banner">
        <h1>Monte Seu Burger</h1>
    </div>
</template>

<script>
    export default{
        name: 'Banner'
    }
</script>

<style scoped>
  #main-banner {
  background-image: url("/img/burger.jpg");
  background-position: right bottom -240px;
  background-size: cover;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
#main-banner h1 {
  color: #FFF;
  text-align: center;
  font-size: 60px;
  background-color: #222;
  padding: 20px 40px;
}

</style>