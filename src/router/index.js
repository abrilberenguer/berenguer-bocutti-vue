import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PeliculaDetalle from '@/components/icons/PeliculaDetalle.vue'
import Peliculas from '@/components/icons/Peliculas.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/peliculas/:id",
      name: "PeliculaDetalle",
      component: PeliculaDetalle,
    },
  ],
});

export default router
