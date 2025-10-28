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
  name: 'index_event',
  component: () => import('./components/Event/EventIndex')
},
{
  path: '/events/create',
  name: 'add_event',
  component: () => import('./components/Event/EventCreate')
},
{
  path: '/events/edit/:id',
  name: 'edit_event',
  component: () => import('./components/Event/EventEdit')
},
{
  path: '/venue',
  name: 'index_venue',
  component: () => import('./components/Venue/VenueIndex')
},
{
  path: '/venue/create',
  name: 'add_venue',
  component: () => import('./components/Venue/VenueCreate')
},
{
  path: '/venue/edit/:id',
  name: 'edit_venue',
  component: () => import('./components/Venue/VenueEdit')
},
{
  path: '/ticket_booking',
  name: 'index_ticket_booking',
  component: () => import('./components/Ticket_booking/Ticket_bookingIndex')
},
{
  path: '/ticket_booking/create',
  name: 'add_ticket_booking',
  component: () => import('./components/Ticket_booking/Ticket_bookingCreate')
},
{
  path: '/ticket_booking/edit/:id',
  name: 'edit_ticket_booking',
  component: () => import('./components/Ticket_booking/Ticket_bookingEdit')
},
{
  path: '/wishlist',
  name: 'wishlist_index',
  component: () => import('./components/Wishlist/WishlistIndex')
},
{
  path: '/wishlist/create',
  name: 'add_wishlist',
  component: () => import('./components/Wishlist/WishlistCreate')
},
{
  path: '/wishlist/edit/:id',
  name: 'edit_wishlist',
  component: () => import('./components/Wishlist/WishlistEdit')
},

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;