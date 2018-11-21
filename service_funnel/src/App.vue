<template>
<div id="app">
  <Nav></Nav>

  <Home></Home>

  <Footer></Footer>

</div>
</template>

<script>
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
import Home from './Home.vue'


export default {
  name: 'app',
  components: {
    Nav,
    Footer,
    Home,

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.Aligner {
  display: flex;
  align-items: center;
  justify-content: center;
}

.Aligner-item {
  max-width: 50%;
}
</style>
