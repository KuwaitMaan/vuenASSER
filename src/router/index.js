import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from  "../views/About.vue";
import help from "../views/help.vue";
import contact from "../views/contact.vue";
import login from "../views/login.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path:"/help",
    name : "help",
    component:help
  },
  {
    path: "/about",
    name: "About",
    component:About
      
  }, 
  {
    path : "/contact",
    name : "contact",
    component:contact
  },
  {
    path:"/login",
    name: "login",
    component:login
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
