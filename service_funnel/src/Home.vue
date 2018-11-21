<template>
<div id="app">

  <section class="hero has-bg-img is-fullheight">
    <!-- Hero content: will be in the middle -->
    <div class="hero-body ">
        <router-view></router-view>
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

  <div class="container">
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
</div>
</template>

<script>

export default {
  name: 'app',
  components: {

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

.has-bg-img { background: url('assets/rawpixel-620227-unsplash.jpg')center center; background-size:cover; }

</style>
