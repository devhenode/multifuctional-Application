<script>
import { RouterView } from 'vue-router';
import AddCart from './components/AddCart.vue';
// import router from './router'


export default {
  data() {
    return {
      components: {
        AddCart
      }
    }
  },

  methods: {
    goToCartPage() {
      return this.$router.push('/addcart')
    }
  }
}
</script>
<template>
  <router-link to="/home"> Home </router-link> |
  <router-link to="/about"> About Me</router-link>

  <h1>Welcome to this Page</h1>
  <p>Made with ❣ by devhenode</p>

  <h2>So this will be my mini portfolio page to view all of my projects</h2>
  <p>And why will I be doing this, Because I have a very limited space on my pc
    so i don't want to keep installing dependecies, so i will make use of this one 
    opportunity to keep on learning alongside my growth.
  </p>

  <button @click="goToCartPage">
    Explore 💫 
  </button>
  <h4>Thanks for Taking the time to look</h4>

  <hr>
  <main>
    <RouterView />
  </main>

</template>

<style>
</style>