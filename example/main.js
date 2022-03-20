import { createApp } from 'vue';
import App from './App.vue';
import VueNavigationBar from '../src/index.js';
import { createRouter, createWebHistory } from 'vue-router';

const app = createApp(App);

const StubbedRoute = { template: '<div></div>' };

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: StubbedRoute },
    { path: '/about', name: 'about', component: StubbedRoute },
    { path: '/locations', name: 'locations', component: StubbedRoute },
    { path: '/blog', name: 'blog', component: StubbedRoute },
    { path: '/pricing', name: 'pricing', component: StubbedRoute },
    { path: '/pricing/pro', name: 'pricing-pro', component: StubbedRoute },
    { path: '/pricing/starter', name: 'pricing-starter', component: StubbedRoute },
    { path: '/contact', name: 'contact', component: StubbedRoute },
    { path: '/customer-service', name: 'customer-service', component: StubbedRoute },
    { path: '/accounting', name: 'accounting', component: StubbedRoute },
    { path: '/reception', name: 'reception', component: StubbedRoute },
    { path: '/signup', name: 'signup', component: StubbedRoute },
    { path: '/login', name: 'login', component: StubbedRoute },
  ],
});

app.use(router);

app.component('vue-navigation-bar', VueNavigationBar);

app.mount('#app');
