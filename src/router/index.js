import { createRouter, createWebHistory } from "vue-router";


import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Posts from "../components/Posts.vue";
import AdminPage from "../components/admin/AdminPage.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",

      component: About,
    },
    {
      path: "/posts",
      name:"posts",
      component:Posts
    },

    {
      path: "/admin",
      name:"admin",
      component:AdminPage
    }
  ],
});

export default router;
