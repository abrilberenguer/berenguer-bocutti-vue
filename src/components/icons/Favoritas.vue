<template>
    <div>
        <ul class="favoritas-list">
            <li v-for="pelicula in favoritas" :key="pelicula.id" class="card">
                <h4 class="titulo">{{ pelicula.title }}</h4>
                <img class="imagen" :src="`https://image.tmdb.org/t/p/w342${pelicula.poster_path}`" :alt="pelicula.title">
                <button @click="eliminarDeFavoritas(pelicula)" class="btn">Eliminar de favoritas</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Favoritas',
    data() {
        return {
            favoritas: []
        }
    },
    mounted() {
        this.obtenerFavoritas();
    },
    methods: {
        obtenerFavoritas() {
            this.favoritas = JSON.parse(localStorage.getItem('favoritas')) || [];
        },
        eliminarDeFavoritas(pelicula) {
            this.favoritas = this.favoritas.filter(p => p.id !== pelicula.id);
            localStorage.setItem('favoritas', JSON.stringify(this.favoritas));
            alert('Película eliminada de favoritas.');
        }
    }
};
</script>

<style scoped>
.favoritas-list {
    display: flex;
    flex-wrap: wrap; 
    gap: 16px;
    width: 100%; 
    padding: 0; 
    list-style-type: none; 
    margin-bottom: 2.5em;
}

.card {
    background-color: darkslategray;
    padding: 1em;
    border-radius: 5px;
    flex: 0 45%;
    justify-content: center;
    align-items: center;
    color: whitesmoke;
    text-align: center;
}

.btn {
    padding: 6px 15px;
    background-color: whitesmoke;
    border-radius: 5px;
    margin-top: 1em;
    color: darkslategray;
    font-weight: bold;
    text-decoration: none;
    display: inline-block;
    border: none; 
    margin-right: 0.5em;
}

.imagen {
    width: 100%;
    height: auto;
    border-radius: 5px;
}

.titulo {
    font-weight: bolder;
    font-size: 1.4em;
    margin-bottom: 0.5em;
    height: 62px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva;
}

@media (max-width: 550px) {
    .card {
        flex: 90%;
    }
}
</style>
