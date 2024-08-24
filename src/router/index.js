import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import AutobotDetails from '../views/AutobotDetails.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/autobot/:id',
            name: 'AutobotDetails',
            component: AutobotDetails,
            props: true,
        },
    ],
});
