<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <h1>MovieTime</h1>
      <img alt="Vue logo" class="logo" src="@/assets/logo.webp" width="125" height="125" />
    </div>

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Inicio</RouterLink>
        <RouterLink to="/about">Favoritas</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 50vh;
}

h1{
  color: darkslategray;
  margin-left: 1em;
  font-size: 1.8em;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva;
}

.logo {
  width: 12em;
  height: auto;
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  min-height: 20px;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  font-size: 1.4em;
}

nav a.router-link-exact-active {
  color: darkslategray;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid darkslategray;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1.2rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>