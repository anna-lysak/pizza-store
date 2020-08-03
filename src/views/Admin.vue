<template>
  <div>
    <section v-if="currentUser">
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <pp-add-pizza></pp-add-pizza>
      </div>

      <div class="col-sm-12 col-md-6">
        <h3>Menu</h3>
        <table class="table table-hover">
          <thead class="thead-dark">
          <tr>
            <th>Item</th>
            <th>Remove Item</th>
          </tr>
          </thead>
          <tbody v-for="item in getMenuItems" :key="item['.key']">
          <tr>
            <td>{{ item.name }}</td>
            <td><button class="btn btn-outline-danger btn-sm" @click="removeMenuItem(item['.key'])">X</button></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <h3>Current Orders: {{ numberOfOrders }}</h3>
        <table class="table table-sm">
          <thead class="thead-dark">
          <tr>
            <th>Item</th>
            <th>Size</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          </thead>
          <tbody v-for="(order, index) in getOrders" :key="order['.key']">
          <div class="order-number">
            <strong><em>Order Number: {{ index + 1 }}</em></strong>&nbsp;&nbsp;
            <button class="btn btn-outline-danger btn-sm" @click="removeOrderItem(order['.key'])">X</button>
          </div>
          <tr v-for="item in order" :key="item.id">
            <td>{{ item.name }}</td>
            <td>{{ item.size }}''</td>
            <td>{{ item.quantity }}</td>
            <td>{{ item.price | currency }}</td>
          </tr>
          </tbody>

        </table>
      </div>
    </div>
    </section>
    <hr>
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <pp-login></pp-login>
      </div>
    </div>
  </div>
</template>

<script>
  import AddPizza from "../components/admin/AddPizza.vue";
  import Login from "../components/auth/Login.vue";
  import { mapGetters } from 'vuex';
  import { dbMenuRef } from "../firebaseConfig.js";
  import { dbOrdersRef } from "../firebaseConfig.js";
  //import AdminHidden from "./AdminHidden";
  //const AdminHidden = () => import('./AdminHidden.vue')

  export default {
    name: "Admin.vue",
    components: {
      ppAddPizza: AddPizza,
      ppLogin: Login,
      //ppAdminHidden: AdminHidden,
    },
    data () {
      return {
        name: 'Anna'
      }
    },
    computed: {
      ...mapGetters ([
        'numberOfOrders',
        'getOrders',
        'getMenuItems',
        'currentUser',
      ]),
    },
    methods: {
      removeMenuItem(key) {
        dbMenuRef.child(key).remove()
      },
      removeOrderItem(key) {
        dbOrdersRef.child(key).remove()
      }
    },
    // beforeRouteEnter: (to, from, next) => {
    //   next(vm => {
    //     //alert('hi '+  vm.name)
    //   })
    // }
  }
</script>

<style scoped>
.order-number{
  margin: 10px 0;
}
</style>
