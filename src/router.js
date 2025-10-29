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
  path: "/event_schedule",
  name: "Event_Schedule",
  component: () => import("./components/Event_Schedule.vue"),
},
 {
  path: '/speaker',
  alias:"/speaker",
  name: 'speaker',
  component: () => import('./components/Speaker.vue')
} ,
 {
  path: '/venue',
  alias:"/venue",
  name: 'venue',
  component: () => import('./components/Venue.vue')
} ,
  {
  path: '/index_event',
  name: 'index_event',
  component: () => import('./components/Event/EventIndex')
},
{
  path: '/add_event',
  name: 'add_event',
  component: () => import('./components/Event/EventCreate.vue')
},
{
  path: '/edit_event/:id',
  name: 'edit_event',
  component: () => import('./components/Event/EventEdit.vue')
},
{
  path: '/index_venue',
  name: 'index_venue',
  component: () => import('./components/Venue/VenueIndex.vue')
},
{
  path: '/add_venue',
  name: 'add_venue',
  component: () => import('./components/Venue/VenueCreate.vue')
},
{
  path: '/edit_venue/:id',
  name: 'edit_venue',
  component: () => import('./components/Venue/VenueEdit.vue')
},
{
  path: '/index_ticket_booking',
  name: 'index_ticket_booking',
  component: () => import('./components/Ticket_booking/Ticket_bookingIndex.vue')
},
{
  path: '/add_ticket_booking',
  name: 'add_ticket_booking',
  component: () => import('./components/Ticket_booking/Ticket_bookingCreate.vue')
},
{
  path: '/edit_ticket_booking/:id',
  name: 'edit_ticket_booking',
  component: () => import('./components/Ticket_booking/Ticket_bookingEdit.vue')
},
{
  path: '/wishlist_index',
  name: 'wishlist_index',
  component: () => import('./components/Wishlist/WishlistIndex.vue')
},
{
  path: '/add_wishlist',
  name: 'add_wishlist',
  component: () => import('./components/Wishlist/WishlistCreate.vue')
},
{
  path: '/edit_wishlist/:id',
  name: 'edit_wishlist',
  component: () => import('./components/Wishlist/WishlistEdit.vue')
},

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;