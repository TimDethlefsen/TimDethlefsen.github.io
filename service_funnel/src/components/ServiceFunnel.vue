<template>
  <div class="columns is-centered ">
    <div class="column is-2">

    <router-link to="/service_funnel2/1"><a class="button is-info is-inverted is-fullwidth">1-50</a></router-link>
    </div>
    <div class="column is-2">
      <router-link to="/service_funnel2/50"><a class="button is-info is-inverted is-fullwidth">50-200</a></router-link>

    </div>
    <div class="column is-2">
      <a @click="nextStep(300)" class="button is-info is-inverted is-fullwidth">200+</a>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    nextStep(value) {
      this.$router.push('/service_funnel2/'+value);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
