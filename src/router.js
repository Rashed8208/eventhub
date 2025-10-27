import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/home",
    name: "home",
    component: () => import("./components/Home")
  },
  {
    path: "/login",
    alias: "/login",
    name: "login",
    component: () => import("./components/Login")
  },
  {
    path: "/dashboard",
    alias: "/dashboard",
    name: "dashboard",
    component: () => import("./components/Dashboard")
  },  
  {
  path: '/events',
  name: 'IndexEvent',
  component: () => import('./components/Event/IndexEvent')
},
{
  path: '/events/create',
  name: 'CreateEvent',
  component: () => import('./components/Event/CreateEvent')
},
{
  path: '/events/edit/:id',
  name: 'EditEvent',
  component: () => import('./components/Event/EditEvent')
}


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;