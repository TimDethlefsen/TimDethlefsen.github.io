<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        Footer
      </p>
    </div>
  </footer>
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
