<template>
  <div id="app">
    <nav>
      <!-- <router-link to="/">事实上</router-link> |
      <router-link to="/about">事实上</router-link> -->
    </nav> 
  
    <router-view/>
   <!-- <CaroUsel></CaroUsel> -->
  </div>
</template>
<script>
// import CaroUsel from "./components/CaroUsel.vue"
export default {
  name:"app",
  data(){
    return{

    }
  },
  methods:{

  },
  components: {
    // CaroUsel,
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
</style>
