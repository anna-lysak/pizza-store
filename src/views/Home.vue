<template>
  <div class="row">
    <div id="home" class="col-sm-12 text-center">
      <div class="background">
        <h1>Welcome to Pizza Planet!</h1>
        <h2>Feeling hungry?</h2>
        <button class="btn btn-success" @click="goToMenu()">Let's order!</button>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "Home.vue",
    methods: {
      goToMenu() {
        // pushes also to browser history
        this.$router.push({name: 'menu'})
      },
    },
  }
</script>

<style>
  #home {
    background: url("../assets/pizza-main.jpg");
    height: 800px;
    padding: 10%;
  }
  h1, h2 {
    margin:6%;
  }
  .background {
    background-color: #eee;
    opacity: 0.7;
    max-width: 60%;
    margin: 0 auto;
    padding: 30px 0px;
  }
</style>
