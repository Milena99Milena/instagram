require('./bootstrap');

import Vue from 'vue';

Vue.component('follow', require('./components/Follow.vue').default);

const app = new Vue({
    el: '#app'
});