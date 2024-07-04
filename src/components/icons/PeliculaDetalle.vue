<script>
export default {
    name: 'PeliculaDetalle',
    data() {
        return {
            title: '',
            overview: '',
            genres: [],
            posterPath: '',
            voteAverage: 0,
            releaseDate: '',
            originalLanguage: ''
        }
    },
    created() {
        const id = this.$route.params.id;
        this.getPeliculaById(id);
    },
    methods: {
        async getPeliculaById(id) {
            const apiKey = '642161afbe8933baa3a43381757cad0d';
            const endPoint = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=es-ES`;
            
            try {
                const response = await fetch(endPoint);
                if (!response.ok) {
                    throw new Error('Error al cargar los datos');
                }
                const json = await response.json();
                console.log(json);
                
                this.title = json.title;
                this.overview = json.overview;
                this.genres = json.genres.map(genre => genre.name);
                this.posterPath = `https://image.tmdb.org/t/p/w500${json.poster_path}`;
                this.voteAverage = json.vote_average;
                this.releaseDate = json.release_date;
                this.originalLanguage = json.original_language;
            } catch (error) {
                console.error('Error al obtener la película:', error);
            }
        },
        agregarAFavoritas(pelicula) {
            const favoritas = JSON.parse(localStorage.getItem('favoritas')) || [];
            const existente = favoritas.find(p => p.id === pelicula.id);
            if (!existente) {
                favoritas.push(pelicula);
                localStorage.setItem('favoritas', JSON.stringify(favoritas));
                alert('Película agregada a favoritas.');
            } else {
                alert('Esta película ya está en favoritas.');
            }
        }
    }
};
</script>

<template>
    <div v-if="title" class="card">
        <div class="title-section">
            <h2 class="titulo">{{ title }}</h2>
            <img :src="posterPath" :alt="title" class="poster">
        </div>
        <div class="details-section">
            <p><span class="negrita">Sinopsis:</span> {{ overview }}</p>
            <p><span class="negrita">Categoría:</span> {{ genres.join(', ') }}.</p>
            <p><span class="negrita">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg></span> {{ voteAverage }}</p>
            <p><span class="negrita">Fecha de lanzamiento:</span> {{ releaseDate }}.</p>
            <p><span class="negrita">Idioma original:</span> {{ originalLanguage }}.</p>
        </div>
        <div class="centrar">
            <button @click="agregarAFavoritas({ id: this.$route.params.id, title, overview, genres, poster_path: posterPath, vote_average: voteAverage, release_date: releaseDate, original_language: originalLanguage })" class="heart-btn">
                Agregar a Favoritas
            </button>
        </div>
    </div>
    <div v-else>
        <p>Cargando...</p>
    </div>
</template>

<style scoped>
.card {
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    background-color: darkslategray;
    color: whitesmoke;
    padding: 2em;
    border-radius: 2em;
    width: 90%; 
    max-width: 750px; 
    box-shadow: 0 4px 8px rgba(0,0,0,0.1); 
}

.title-section {
    text-align: center;
    margin-bottom: 0.5em;
}

.titulo {
    font-weight: bolder;
    font-size: 1.7em;
    margin-bottom: 0.5em;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva;
}

.negrita {
    font-weight: bold;
}

.details-section {
    margin-top: 5px; 
}

.poster {
    width: 100%;
    max-width: 250px; 
    height: auto; 
    border-radius: 5px;
}

.heart-btn {
    padding: 8px 15px;
    background-color: transparent;
    border-radius: 5px;
    margin-top: 1em;
    color: darkslategray;
    font-weight: bold;
    text-decoration: none;
    display: inline-block;
    border: none; 
    margin-right: 0.5em;
    font-size: 1em;
    background-color: azure;
}
.heart-btn:hover{
    background-color: rgba(240, 248, 255, 0.683);
}

.centrar{
    display: flex;
    justify-content: center;
}

svg{
    color: rgb(195, 195, 3);
}

@media (max-width: 768px) {
    .card {
        width: 90%; 
    }

    .poster {
        max-width: 100%;
    }
}
</style>
