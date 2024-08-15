<template>
  <div>
      <h3>{{  message }}</h3>
      <p v-if="this.count % 2 == 0">{{ paragraph }}, and it displays when count is Even</p>
      <p v-else="this.count">This displays when count is odd</p>
  
      <button @click="this.count++">Count : {{  count }}</button>
    </div>
    
    <div>
      <h3>My movie Collections</h3>
      <ol>
        <li v-for="movieList in movieCollection">
          <p>{{ movieList.title}}</p>
          <ul>
            <li v-for="movie in movieList.movies">
              <p v-if="movie">{{ movie?.title }} - {{ movie?.director }}</p> 
              <button @click="pickAsFavourite(movie)">Pick as favourite ⭐</button>
            </li>
          </ul>
        </li>
      </ol>
      <p>Nothing to display</p>
    </div>


    <div>
      <h3>Favourite list</h3>
      <ul>
        <li v-for="movie in favoriteMovies" :key="movie.title">
          <p>{{ movie.title }} - by {{ movie.director }}</p>
        </li>
      </ul>
    </div>

  
</template>

<script>
import {  useRoute, useRouter } from 'vue-router'

const router  = useRouter();
const route = useRoute()

export default {
  data() {
    return {
      message: 'Hello Vue.js!',
      paragraph: 'This is also a paragraph',
      count: 0,
      movie: '',
      favoriteMovies: '',

      movieCollection: {
        American: {
          title: 'American Movies',
          movies: [
            {
              title: 'The Godfather',
              director: 'Francis Ford Coppola'
            },
            {
              title: 'The Dark Knight',
              director: 'Christopher Nolan'
            }
          ]
        },
        Indian: {
          title: 'Indian Movies',
          movies: [
            {
              title: 'Sholay',
              director: 'Ramesh Sippy'
            },
            {
              title: '3 Idiots',
              director: 'Rajkumar Hirani'
            }
          ]
        },

        Chineese: {
          title: 'Chineese Movies',
          movies: [
            {
              title: 'Hero',
              director: 'Zhang Yim'
            },
            {
              title: 'Kung Fu Panda',
              director: 'Mark Osborne'
            },
            {
              title: 'Karate Kid',
              director: 'Harald Zwart'
            },
            {
              title: 'Monkey king',
              director: 'Cheang Pou-soi'
            }
          ]
        },

        Korean: {
          title: 'Korean Movies',
          movies: [
            {
              title: 'Train to Busan',
              director: 'Yeon Sang-ho'
            },
            {
              title: 'Parasite',
              director: 'Bong Joon-ho'
            },
            {
              title: 'Oldboy',
              director: 'Park Chan-wook'
            },
            {
              title: 'Squid Game',
              director: 'Bong Joon'
            }
          ]
        }
      },

      favoriteMovies: []
    }
  },

  methods: {
    // selectCategory() {
    //   // const category = ['American', 'Indian', 'Chineese', 'Korean'];
    //   // const selectMovie = this.movieCollection[category].movies
    // },

    pickAsFavourite(movie) {
      this.favoriteMovies.push(movie)
    }
  }
}
</script>


<style>

</style>
