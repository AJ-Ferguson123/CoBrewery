<template>
  <div id="app">
    
    <BreweryList />
  </div>
</template>

<script>
import BreweryList from './components/BreweryList.vue'

export default {
  name: 'App',
  components: {
    BreweryList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #808080;
  margin-top: 60px;
  border-radius: .3rem;
}
</style>
