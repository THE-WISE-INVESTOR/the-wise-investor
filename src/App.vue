<template> 
<navbar />
<!-- <nav>
<router-link to='/'>Home</router-link> |
<router-link to='/about'>About</router-link> |
<router-link :to="{name:'Product', params:{name: 'Apple'}}">Product</router-link>
<button @click="showProduct('tomato','banana')">Product 2</button>
</nav>-->
<router-view /> 
</template>

<script>
import navbar from './views/navbar.vue'
export default {
  name: 'App',
  components: {
    navbar
  }, 
}
</script>
<style>

</style>
