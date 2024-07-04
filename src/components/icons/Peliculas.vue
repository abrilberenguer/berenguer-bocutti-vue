<template>
    <div>
        <input class="filtro" type="text" v-model="buscar" placeholder="Buscar por título...">
        
        <select v-model="seleccionarGenero" @change="filtroPeliculas" class="filtro">
            <option value="">Seleccionar género</option>
            <option v-for="genre in genres" :key="genre.id" :value="genre.id">{{ genre.name }}</option>
        </select>
        
        <ul class="peliculas-list">
            <li v-for="pelicula in filtroPeliculas" :key="pelicula.id" class="card">
                <h4 class="titulo">{{ pelicula.title }}</h4>
                <img class="imagen" :src="`https://image.tmdb.org/t/p/w342${pelicula.poster_path}`" :alt="pelicula.title">
                <RouterLink :to="'/peliculas/'+pelicula.id" class="btn">Ver detalles</RouterLink>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Pelicula',
    data() {
        return {
            peliculas: [],
            buscar: '',
            seleccionarGenero: '',
            genres: [] 
        }
    },
    mounted(){
        this.getPeliculas();
        this.getGenres(); 
    },
    computed: {
        filtroPeliculas() {
            let filtrarPeliculas = this.peliculas;

            if (this.buscar) {
                const searchTerm = this.buscar.toLowerCase();
                filtrarPeliculas = filtrarPeliculas.filter(pelicula => pelicula.title.toLowerCase().includes(searchTerm));
            }

            if (this.seleccionarGenero) {
                filtrarPeliculas = filtrarPeliculas.filter(pelicula => {
                    return pelicula.genre_ids.includes(parseInt(this.seleccionarGenero));
                });
            }

            return filtrarPeliculas;
        }
    },
    methods: {
        async getPeliculas() {
            const apiKey = '642161afbe8933baa3a43381757cad0d';
            const endPoint = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-ES&page=1`;
            
            try {
                const response = await fetch(endPoint);
                const json = await response.json();
                this.peliculas = json.results;
            } catch (error) {
                console.error('Error al obtener las películas:', error);
            }
        },
        async getGenres() {
            const apiKey = '642161afbe8933baa3a43381757cad0d';
            const endPoint = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=es-ES`;
            
            try {
                const response = await fetch(endPoint);
                const json = await response.json();
                this.genres = json.genres;
            } catch (error) {
                console.error('Error al obtener los géneros:', error);
            }
        }
    }
};
</script>

<style scoped>
.peliculas-list {
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
    margin-bottom: 1em;
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

.filtro {
    margin-bottom: 1.5em;
    margin-right: 1em;
    width: 200px;
    padding: 0.5em;
    border: 1.5px solid darkslategray;
    border-radius: 0.5em;
}

@media (max-width: 550px) {
    .card {
        flex: 90%;
    }
}
</style>
