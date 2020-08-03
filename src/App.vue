<template>
  <div id="app">
    <div class="content">
      <div class="container">
        <pp-header></pp-header>
      </div>
      <div class="container" style="padding-bottom: 60px;">
        <router-view></router-view>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-4">
            <router-view name="how-to-order"></router-view>
          </div>
          <div class="col-sm-12 col-md-4">
            <router-view name="delivery"></router-view>
          </div>
          <div class="col-sm-12 col-md-4">
            <router-view name="history"></router-view>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <pp-footer></pp-footer>
    </div>
  </div>
</template>

<script>
  import Header from "./components/Header.vue";
  import Footer from "./components/Footer.vue";

  export default {
    components: {
      ppHeader: Header,
      ppFooter: Footer,
    },
    created () {
      this.$store.dispatch('setMenuRef')
      this.$store.dispatch('setOrdersRef')
    }
  }
</script>

<style>
  .content {
    min-height: calc(100vh - 100px);
    margin-bottom: 40px;
  }
</style>
