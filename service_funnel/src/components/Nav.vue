<template>
  <header class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item">
          <div class="">
            <b>BRANDNAME</b>
          </div>
        </a>
        <span class="navbar-burger burger" data-target="navbarMenuHeroC">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div id="navbarMenuHeroC" class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item">
            Services
          </a>
          <a class="navbar-item">
            Why us
          </a>
          <span class="navbar-item">
            <a class="button is-info">
              <span>For Service Partner</span>
            </a>
          </span>
        </div>
      </div>
    </div>
  </header>
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

</style>
