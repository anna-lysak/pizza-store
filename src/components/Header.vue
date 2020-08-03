<template>
    <header>
      <nav class="navbar navbar-expand-md navbar-light">
        <a class="navbar-brand" href="/"><img src="../assets/logo.png" alt="" width="35">PIZZA PLANET</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="collapsingNavbar">
            <ul class="navbar-nav">
              <li class="nav-item"><router-link :to="{ name: 'home' }"><a class="nav-link">Home</a></router-link></li>
              <li class="nav-item"><router-link :to="{ name: 'menu' }"><a class="nav-link">Menu</a></router-link></li>
              <li class="nav-item"><router-link :to="{ name: 'about' }"><a class="nav-link">About</a></router-link></li>
            </ul>
            <!--<ul class="navbar-nav ml-auto">
              <li class="nav-item"><router-link :to="{ name: 'basket' }"><a class="nav-link">Basket</a></router-link></li>
            </ul>-->
         </div>
      </nav>
    </header>
</template>

<script>
    export default {
      name: "Header.vue",
    }
</script>

<style>
header {
  margin-botton: 20px;
}
  .navbar-brand {
    font-size: 1.5em;
  }
</style>
