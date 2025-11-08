<template>
  <div id="app">
    <!-- Header for normal users -->
    <header v-if="!uid && !hiddenRoutes.includes(currentRouteName)" class="header">
      <div class="container">
        <div class="header-content">
          <router-link to="/" class="logo">
            <img src="assets/img/logo.png" alt="Logo">
          </router-link>

          <nav class="nav-menu">
            <router-link to="/">Home</router-link>
            <router-link to="/speaker">Speaker</router-link>
            <router-link to="/event_schedule">Schedule</router-link>
            <router-link to="/venue">Venue</router-link>
            <router-link to="/hotel">Hotel</router-link>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#buy-tickets" class="buy-tickets-btn">Buy Tickets</a>
        </div>
      </div>
    </header>

    <!-- Admin Navbar -->
    <nav v-if="uid" class="admin-nav">
      <div class="container">
        <div class="admin-nav-content">
          <router-link to="/dashboard" class="admin-logo">Admin Panel</router-link>
          
          <div class="admin-links">
            <router-link to="/index_event">Events</router-link>
            <router-link to="/event-schedules">Schedules</router-link>
            <router-link to="/index_venue">Venues</router-link>
            <router-link to="/index_ticket_booking">Bookings</router-link>
            <router-link to="/index_wishlist">Wishlist</router-link>
          </div>

          <button @click="logout" class="logout-btn">Logout</button>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main :class="{ 'with-header': !uid && !hiddenRoutes.includes(currentRouteName), 'with-admin-nav': uid }">
      <router-view />
    </main>

    <!-- Footer -->
    <footer v-if="!hiddenRoutes.includes(currentRouteName)" class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>EventHub</h3>
            <p>Creating memorable experiences through exceptional events.</p>
          </div>
          <div class="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/speaker">Speakers</router-link></li>
              <li><router-link to="/event_schedule">Schedule</router-link></li>
              <li><router-link to="/venue">Venue</router-link></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Contact</h4>
            <p>123 Event Street, City</p>
            <p>+1 234 567 8900</p>
            <p>info@eventhub.com</p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 EventHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
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
    const hiddenRoutes = ['dashboard', 'login']
    const currentRouteName = computed(() => route.name)

    return { currentRouteName, hiddenRoutes }
  },
  methods: {
    logout() {
      this.uid = ""
      sessionStorage.setItem('uid', '')
      this.$router.push('/')
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Header Styles */
.header {
  background-color: #1a1a1a;
  padding: 1rem 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  height: 80px;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.logo img {
  height: 40px;
}

.nav-menu {
  display: flex;
  gap: 2rem;
}

.nav-menu a,
.nav-menu router-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-menu a:hover,
.nav-menu router-link:hover {
  color: #ffcc00;
}

.buy-tickets-btn {
  background-color: #ffcc00;
  color: #1a1a1a;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s;
}

.buy-tickets-btn:hover {
  background-color: #ffb700;
}

/* Admin Navbar */
.admin-nav {
  background-color: #4e73df;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 999;
  height: 60px;
}

.admin-nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.admin-logo {
  color: white;
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: 700;
}

.admin-links {
  display: flex;
  gap: 1.5rem;
}

.admin-links a,
.admin-links router-link {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.admin-links a:hover,
.admin-links router-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.logout-btn {
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.logout-btn:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

/* Main Content */
main {
  min-height: calc(100vh - 60px);
}

main.with-header {
  padding-top: 80px;
}

main.with-admin-nav {
  padding-top: 60px;
}

/* Footer */
.footer {
  background-color: #1a1a1a;
  color: white;
  padding: 3rem 0 1rem;
  margin-top: 3rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3,
.footer-section h4 {
  color: #ffcc00;
  margin-bottom: 1rem;
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 0.5rem;
}

.footer-section a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.3s;
}

.footer-section a:hover {
  color: #ffcc00;
}

.footer-bottom {
  text-align: center;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
}

/* Responsive Design */
@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    gap: 1rem;
  }
  
  .nav-menu {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
  
  .admin-nav-content {
    flex-direction: column;
    gap: 1rem;
  }
  
  .admin-links {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  main.with-header {
    padding-top: 120px;
  }
  
  main.with-admin-nav {
    padding-top: 100px;
  }
}
</style>