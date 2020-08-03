<template>
  <div class="row">
    <form>
      <div v-if="currentUser" class="col-sm-12">
        <p>Logged in as: {{ currentUser }}</p>
      </div>
      <div v-else class="col-sm-12">
        <p>Please, log in to continue</p>
      </div>
      <div class="col-sm-12 form-group row">
        <label class="col-sm-3">Email address</label>
        <div class="col-sm-6">
          <input type="email" class="form-control" id="email" v-model="email">
        </div>
      </div>
      <div class="col-sm-12 form-group row">
        <label class="col-sm-3">Password</label>
        <div class="col-sm-6">
          <input type="password" class="form-control" id="password" v-model="password">
        </div>
      </div>
      <div class="col-sm-12">
        <button type="button" class="btn btn-primary" @click.prevent="signIn"> Sign In </button>&nbsp;&nbsp;
        <button type="button" class="btn btn-danger" @click.prevent="signOut"> Sign Out </button>
      </div>

    </form>
  </div>
</template>

<script>
  import { firebaseApp } from '../../firebaseConfig.js'
  import 'firebase/auth'
  import { store } from '../../store/'
  import { mapGetters } from 'vuex'

  firebaseApp.auth().onAuthStateChanged(function(user) {
    if (user) {
      store.dispatch('setUser', user)
    } else {
      store.dispatch('setUser', null)
    }
  })

  export default {
    name: "Login.vue",
    data() {
        return {
          email: '',
          password: ''
        }
    },
    computed: {
      ...mapGetters([ 'currentUser' ]),
      // currentUser() {
      //   return this.$store.auth.currentUser()
      // }
    },
    methods: {
      signIn() {
        var email = document.getElementById('email').value
        var password = document.getElementById('password').value
        firebaseApp.auth().signInWithEmailAndPassword(email, password).catch(function(e) {
          var errorCode = e.code
          var errorMessage = e.message
          if (errorCode === 'auth/wrong-password') {
            alert("wrong password")
          } else {
            alert(errorMessage)
          }
        })
      },
      signOut() {
        firebaseApp.auth().signOut().then(function(){
          alert('Logged out')
        }).catch(function(e){
          alert(e.message)
        })
      }
    },
  }
</script>

<style scoped>

</style>
