import Vue from "vue";
import App from "./App.vue";

import VueRouter from "vue-router";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "hash",
  routes: [
    { path: "/", name: "home" },
    { path: "/about", name: "about" },
    { path: "/locations", name: "locations" },
    { path: "/blog", name: "blog" },
    { path: "/pricing", name: "pricing" },
    { path: "/pricing/pro", name: "pricing-pro" },
    { path: "/pricing/starter", name: "pricing-starter" },
    { path: "/contact", name: "contact" },
    { path: "/customer-service", name: "customer-service" },
    { path: "/accounting", name: "accounting" },
    { path: "/reception", name: "reception" },
    { path: "/signup", name: "signup" },
    { path: "/login", name: "login" }
  ]
});

import VueNavigationBar from "../src/index.js";
Vue.component("vue-navigation-bar", VueNavigationBar);

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
