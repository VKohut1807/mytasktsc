import Vue from "vue";
import VueRouter from "vue-router";
import Main from "@/views/Main.vue";
import TaskFirst from "@/views/TaskFirst.vue";
import TaskFirstVuex from "@/views/TaskFirstVuex.vue";
import TaskSecond from "@/views/TaskSecond.vue";
import NotFoundPage from "@/views/NotFoundPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Main,
  },
  {
    path: "/posts",
    name: "posts",
    component: TaskFirst,
  },
  {
    path: "/postsVuex",
    name: "postsVuex",
    component: TaskFirstVuex,
  },
  {
    path: "/contactForm",
    name: "contactForm",
    component: TaskSecond,
  },
  {
    path: "/landingPage",
    name: "landingPage",
    component: Main,
  },
  {
    path: "*",
    component: NotFoundPage,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
