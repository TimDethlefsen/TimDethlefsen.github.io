<template>
<div id="app">

  <section class="hero is-info is-fullheight">
    <!-- Hero head: will stick at the top -->
    <div class="hero-head">
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
                <a class="button is-info is-inverted">
                  <span>For Service Partner</span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </header>
    </div>

    <!-- Hero content: will be in the middle -->
    <div class="hero-body ">
      <div class="container has-text-centered">
        <h1 class="title">
          Find out how much Money your Company can save with our excellent Service
        </h1>
        <router-view></router-view>
      </div>
    </div>
  </section>
  <div class="container ">
    <br />
    <section>
      <div class="tile is-ancestor has-text-centered">

        <div class="tile">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-light">
              <p class="title">Vertical...</p>
              <p class="subtitle">Top</p>
            </article>
            <article class="tile is-child notification is-light">
              <p class="title">...tiles</p>
              <p class="subtitle">Bottom tile</p>
            </article>
          </div>
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-light">
              <p class="title">Vertical...</p>
              <p class="subtitle">Top tile</p>
            </article>
            <article class="tile is-child notification is-light">
              <p class="title">...tiles</p>
              <p class="subtitle">Bottom tile</p>
            </article>
          </div>
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-light">
              <p class="title">Vertical...</p>
              <p class="subtitle">Top tile</p>
            </article>
            <article class="tile is-child notification is-light">
              <p class="title">...tiles</p>
              <p class="subtitle">Bottom tile</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
  <br />

  <section>
    <nav class="level">
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Tweets</p>
          <p class="title">3,456</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Following</p>
          <p class="title">123</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Followers</p>
          <p class="title">456K</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Likes</p>
          <p class="title">789</p>
        </div>
      </div>
    </nav>

  </section>
  <br />

  <div class="container ">
    <section>
      <div class="columns is-multiline">
        <div class="column is-four-fifths">
          <article class="media">
            <figure class="media-left">
              <p class="image is-256x256">
                <img src="https://bulma.io/images/placeholders/256x256.png">
              </p>
            </figure>
            <div class="media-content has-text-left">
              <p class="title">
                “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
              </p>
              <p class="subtitle">
                Jeff Atwood
              </p>
            </div>
          </article>
        </div>
        <div class="column is-four-fifths is-offset-one-fifth">
          <article class="media">

            <div class="media-content has-text-right">
              <p class="title">
                “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
              </p>
              <p class="subtitle">
                Jeff Atwood
              </p>
            </div>
            <figure class="media-left">
              <p class="image is-256x256">
                <img src="https://bulma.io/images/placeholders/256x256.png">
              </p>
            </figure>
          </article>
        </div>

      </div>
    </section>
  </div>


  <br />
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        Footer
      </p>
    </div>
  </footer>
</div>
</template>

<script>
import ServiceFunnel from './components/ServiceFunnel.vue'
import ServiceFunnel2 from './components/ServiceFunnel2.vue'

export default {
  name: 'app',
  components: {
    ServiceFunnel,
    ServiceFunnel2
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
