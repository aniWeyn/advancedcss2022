import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/lectures",
    name: "Lectures",
    component: () =>
      import(/* webpackChunkName: "lectures" */ "../views/Lectures.vue"),
  },
  {
    path: "/lecture00",
    name: "Lecture00",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/Lecture00.vue"
      ),
  },
  {
    path: "/lecture01",
    name: "Lecture01",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/Lecture01.vue"
      ),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
