<template>

  <div class="container has-text-centered">
    <h1 class="title has-text-white">
      We will contact you
    </h1>

    <div class="columns is-centered ">
      <div class="column is-4">
        <div class="field is-grouped">
          <p class="control is-expanded ">
            <input class="input" type="text" placeholder="Email">
          </p>
          <p class="control">
            <a class="button is-info">
              Submit
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
  <!---<div class="columns is-centered ">
  <div class="column is-4">
  <p>
      your company is {{$route.params.company }}
    </p>

    <div class="field is-grouped">
      <p class="control is-expanded ">
        <input class="input" type="text" placeholder="Email">
      </p>
      <p class="control">
        <a class="button is-info">
          Submit
        </a>
      </p>
    </div>
  </div>
</div>-->
</template>

<script>
export default {
  watch: {
    '$route' (to){
    //  alert(to.params.company);
    }
  },
  // created(){
  //  alert(this.$route.params.company);
  // }
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
