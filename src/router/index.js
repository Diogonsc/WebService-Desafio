import Vue from "vue";
import VueRouter from "vue-router";
import Sobre from "../views/Sobre.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Sobre",
    component: Sobre,
  },
  {
    path: "/contato",
    name: "Contato",
    component: () => import("../views/Contato.vue"),
  },
  {
    path: "/galeria",
    name: "Galeria",
    component: () => import("../views/Galeria.vue"),
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
