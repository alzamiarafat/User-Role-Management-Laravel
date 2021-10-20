require('./bootstrap');


import HomeComponent from './components/HomeComponent.vue';
import NavbarComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';


import Vue from 'vue'

Vue.component('Home', HomeComponent);
Vue.component('Navbar', NavbarComponent);
Vue.component('Footr', FooterComponent);


const app = new Vue({
    el: '#app',
});
