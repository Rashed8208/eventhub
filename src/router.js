import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/home",
    name: "home",
    component: () => import("./components/Home")
  },
//   {
//     path: "/dashboard",
//     alias: "/dashboard",
//     name: "dashboard",
//     component: () => import("./components/Dashboard")
//   },
//   {
//     path: "/unit_list",
//     alias: "/unit_list",
//     name: "unit_list",
//     component: () => import("./components/Unit/UnitList")
//   },
//   {
//     path: "/add_unit",
//     alias: "/add_unit",
//     name: "add_unit",
//     component: () => import("./components/Unit/UnitCreate")
//   },
//   {
//     path:"/edit_unit/:id",
//     name:"edit_unit",
//     component: () => import("./components/Unit/UnitEdit")
//   }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;