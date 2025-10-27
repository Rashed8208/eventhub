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
},
{
  path: '/venue',
  name: 'IndexVenue',
  component: () => import('./components/Venue/IndexVenue')
},
{
  path: '/venue/create',
  name: 'CreateVenue',
  component: () => import('./components/Venue/CreateVenue')
},
{
  path: '/venue/edit/:id',
  name: 'EditVenue',
  component: () => import('./components/Venue/EditVenue')
},
{
  path: '/ticket_booking',
  name: 'IndexTicket_booking',
  component: () => import('./components/Ticket_booking/IndexTicket_booking')
},
{
  path: '/ticket_booking/create',
  name: 'CreateTicket_booking',
  component: () => import('./components/Ticket_booking/CreateTicket_booking')
},
{
  path: '/ticket_booking/edit/:id',
  name: 'EditTicket_booking',
  component: () => import('./components/Ticket_booking/EditTicket_booking')
},
{
  path: '/wishlist',
  name: 'IndexWishlist',
  component: () => import('./components/Wishlist/IndexWishlist')
},
{
  path: '/wishlist/create',
  name: 'CreateWishlist',
  component: () => import('./components/Wishlist/CreateWishlist')
},
{
  path: '/wishlist/edit/:id',
  name: 'EditWishlist',
  component: () => import('./components/Wishlist/EditWishlist')
},

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;