<template>
  <div class="row">
    <div class="col-sm-12">
      <h3>About Us</h3>
      <br>
      <p>Pizza Planet - Italian pizza restaurant.</p>
      <nav class="navbar navbar-expand-lg navbar-light">
        <ul class="navbar-nav">
          <li class="nav-item"><router-link :to="{ name: 'history' }"><a class="nav-link">History</a></router-link></li>
          <li class="nav-item"><router-link :to="{ name: 'contact' }"><a class="nav-link">Contact Us</a></router-link></li>
          <li class="nav-item"><router-link :to="{ name: 'how-to-order' }"><a class="nav-link">How To Order</a></router-link></li>
          <li class="nav-item"><router-link :to="{ name: 'delivery' }"><a class="nav-link">Delivery</a></router-link></li>
        </ul>
      </nav>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: "About.vue"
  }
</script>

<style scoped>
  .card {
    width: 100%;
  }

</style>
