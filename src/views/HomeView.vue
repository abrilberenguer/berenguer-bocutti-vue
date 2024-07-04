<script setup>
  import Peliculas from '@/components/icons/Peliculas.vue';
</script>

<template>
  <main>
    <div class="titulo">
      <h1>Películas</h1>
      <p>Encontra las películas más vistas del momento.</p>
    </div>
    <Peliculas></Peliculas>

  </main>
</template>

<style>
.titulo {
    margin: 20px 0px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva;
}
</style>