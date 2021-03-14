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
    path: "/random",
    name: "Random",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Random.vue"),
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
    path: "/lectures/lecture03",
    name: "Lecture03",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/Lecture03.vue"
      ),
  },
  {
    path: "/lectures/lecture04",
    name: "Lecture04",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/Lecture04.vue"
      ),
  },
  {
    path: "/lectures/lecture05",
    name: "Lecture05",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/Lecture05.vue"
      ),
  },
  {
    path: "/lectures/lecture06",
    name: "Lecture06",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/Lecture06.vue"
      ),
  },
  {
    path: "/lectures/lecture07",
    name: "Lecture07",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/Lecture07.vue"
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
  {
    path: "/laboratories/laboratory02",
    name: "Laboratory02",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/Laboratory02.vue"
      ),
  },
  {
    path: "/laboratories/laboratory03",
    name: "Laboratory03",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/Laboratory03.vue"
      ),
  },
  {
    path: "/laboratories/laboratory04",
    name: "Laboratory04",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/Laboratory04.vue"
      ),
  },
  {
    path: "/laboratories/laboratory05",
    name: "Laboratory04",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/Laboratory05.vue"
      ),
  },
  {
    path: "/laboratories/laboratory06a",
    name: "Laboratory06",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/Laboratory06a.vue"
      ),
  },
  {
    path: "/laboratories/laboratory06a-tasks",
    name: "Laboratory06-Tasks",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/Laboratory6a-tasks.vue"
      ),
  },
  {
    path: "/laboratories/laboratory06b",
    name: "Laboratory06",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/Laboratory06b.vue"
      ),
  },
  {
    path: "/laboratories/laboratory06c",
    name: "Laboratory06",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/Laboratory06c.vue"
      ),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
