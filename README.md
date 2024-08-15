# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).


 * @file App.vue
 * @description Vue component for displaying movie collections and favorite movies.
 * @module App
 


 * Vue component for displaying movie collections and favorite movies.
 *
 * @vue-prop {string} message - The message to display.
 * @vue-prop {string} paragraph - The paragraph to display.
 * @vue-prop {number} count - The count value.
 * @vue-prop {string} movie - The selected movie.
 * @vue-prop {Array} favoriteMovies - The array of favorite movies.
 * @vue-prop {Object} movieCollection - The object containing movie collections.
 *
 * @vue-data {string} message - The message to display.
 * @vue-data {string} paragraph - The paragraph to display.
 * @vue-data {number} count - The count value.
 * @vue-data {string} movie - The selected movie.
 * @vue-data {Array} favoriteMovies - The array of favorite movies.
 * @vue-data {Object} movieCollection - The object containing movie collections.
 *
 * @vue-method selectCategory - Method to select a movie category.
 * @vue-method pickAsFavourite - Method to add a movie to the favorite list.
 *
 * @vue-example