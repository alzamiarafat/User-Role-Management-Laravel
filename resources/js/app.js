require('./bootstrap');

import HomeComponent from './components/HomeComponent.vue';
import Vue from 'vue'

Vue.component('home', HomeComponent);

const app = new Vue({
    el: '#app',
});
