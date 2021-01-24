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
    path: "/lectures/lecture00",
    name: "Lecture00",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/Lecture00.vue"
      ),
  },
  {
    path: "/lectures/lecture01",
    name: "Lecture01",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/Lecture01.vue"
      ),
  },
  {
    path: "/lectures/lecture02",
    name: "Lecture02",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/Lecture02.vue"
      ),
  },
  {
    path: "/laboratories/",
    name: "Laboratories",
    component: () =>
      import(/* webpackChunkName: "lecture01" */ "../views/Laboratories.vue"),
  },
  {
    path: "/laboratories/laboratory01",
    name: "Laboratory01",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/Laboratory01.vue"
      ),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
