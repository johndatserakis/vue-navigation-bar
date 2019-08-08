import Vue from "vue";
import App from "./App.vue";

import VueRouter from "vue-router";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/" },
    { path: "/about" },
    { path: "/locations" },
    { path: "/blog" },
    { path: "/pricing" },
    { path: "/pricing/pro" },
    { path: "/pricing/starter" },
    { path: "/contact" },
    { path: "/customer-service" },
    { path: "/accounting" },
    { path: "/reception" },
    { path: "/signup" },
    { path: "/login" }
  ]
});

import VueNavigationBar from "../src/index.js";
Vue.component("vue-navigation-bar", VueNavigationBar);

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
