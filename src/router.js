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
  path: '/event-schedule',
  alias:"/event-schedule",
  name: "event_schedule",
  component: () => import('./components/Event_Schedule.vue')
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
  path: '/events',
  name: 'index_event',
  component: () => import('./components/Event/EventIndex.vue')
},
{
  path: '/events/create',
  name: 'add_event',
  component: () => import('./components/Event/EventCreate.vue')
},
{
  path: '/events/edit/:id',
  name: 'edit_event',
  component: () => import('./components/Event/EventEdit.vue')
},
{
  path: '/venue',
  name: 'index_venue',
  component: () => import('./components/Venue/VenueIndex.vue')
},
{
  path: '/venue/create',
  name: 'add_venue',
  component: () => import('./components/Venue/VenueCreate.vue')
},
{
  path: '/venue/edit/:id',
  name: 'edit_venue',
  component: () => import('./components/Venue/VenueEdit.vue')
},
{
  path: '/ticket_booking',
  name: 'index_ticket_booking',
  component: () => import('./components/Ticket_booking/Ticket_bookingIndex.vue')
},
{
  path: '/ticket_booking/create',
  name: 'add_ticket_booking',
  component: () => import('./components/Ticket_booking/Ticket_bookingCreate.vue')
},
{
  path: '/ticket_booking/edit/:id',
  name: 'edit_ticket_booking',
  component: () => import('./components/Ticket_booking/Ticket_bookingEdit.vue')
},
{
  path: '/wishlist',
  name: 'wishlist_index',
  component: () => import('./components/Wishlist/WishlistIndex.vue')
},
{
  path: '/wishlist/create',
  name: 'add_wishlist',
  component: () => import('./components/Wishlist/WishlistCreate.vue')
},
{
  path: '/wishlist/edit/:id',
  name: 'edit_wishlist',
  component: () => import('./components/Wishlist/WishlistEdit.vue')
},

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;