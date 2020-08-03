<template>
  <footer class="footer ">
    <hr>
    <nav class="navbar navbar-expand-md navbar-light">
      <p class="nav-text abs">&copy; Pizza Planet (2020)</p>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse" id="collapsingNavbar">
        <ul class="navbar-nav">
          <li class="nav-item"><router-link :to="{name: 'home'}"><a class="nav-link">Home</a></router-link></li>
          <li class="nav-item"><router-link :to="{name: 'menu'}"><a class="nav-link">Menu</a></router-link></li>
          <li class="nav-item"><router-link :to="{name: 'about'}"><a class="nav-link">About</a></router-link></li>
        </ul>
      </div>
    </nav>
  </footer>
</template>

<script>
    export default {
        name: "Footer.vue"
    }
</script>

<style scoped>
  .footer {
    /* Set the fixed height of the footer here */
    height: 60px;
  }
  hr {
    margin: 0;
  }
  .nav-text.abs {
    position: absolute;
    width: 100%;
    left: 0;
    text-align: center;
    color: #333333;
  }
</style>
