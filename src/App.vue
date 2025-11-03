<template>
  <!-- Header for normal users -->
  <header
    v-if="!uid && !hiddenRoutes.includes(currentRouteName)"
    id="header"
    class="header d-flex align-items-center fixed-top custom-header"
  >
    <div class="container-fluid container-xl position-relative d-flex align-items-center">
      <a href="/" class="logo d-flex align-items-center me-auto">
        <img src="assets/img/logo.png" alt="">
      </a>

      <nav id="navmenu" class="navmenu">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/speaker">Speaker</router-link></li>
          <li><router-link to="/event_schedule">Event Schedule</router-link></li>
          <li><router-link to="/venue">Venue</router-link></li>
          <li><a href="#hotels">Hotels</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <a class="cta-btn d-none d-sm-block" href="#buy-tickets">Buy Tickets</a>
    </div>
  </header>

  <!-- Admin Navbar -->
  <nav class="navbar navbar-expand-lg bg-body-tertiary" v-if="uid">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Admin</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/index_event" class="nav-link active">Event</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/event-schedules" class="nav-link active">Event Schedule</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/index_venue" class="nav-link active">Venue</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/index_ticket_booking" class="nav-link active">Ticket Booking</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/index_wishlist" class="nav-link active">Wishlist</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Main Content -->
  <router-view />

  <!-- Footer (hidden on dashboard and login) -->
  <footer v-if="!hiddenRoutes.includes(currentRouteName)" id="footer" class="footer dark-background">
    <!-- Existing footer content here -->
  </footer>

  <!-- Scroll Top -->
  <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center">
    <i class="bi bi-arrow-up-short"></i>
  </a>
</template>

<script>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

export default {
  name: 'App',
  data() {
    return {
      uid: sessionStorage.getItem('uid')
    }
  },
  setup() {
    const route = useRoute()

    // Array of route names where header/footer should be hidden
    const hiddenRoutes = ['dashboard', 'login']

    // Get current route name
    const currentRouteName = computed(() => route.name)

    return { currentRouteName, hiddenRoutes }
  },
  methods: {
    logout() {
      this.uid = ""
      sessionStorage.setItem('uid', '')
      window.location.href = '/'
    }
  }
}
</script>

<style scoped>
.custom-header {
  background-color: #1a1a1a;
  color: white;
  transition: background-color 0.3s ease;
}

.custom-header a {
  color: white;
}

.custom-header a:hover {
  color: #ffcc00;
}
</style>



