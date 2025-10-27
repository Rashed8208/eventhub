<template>
  <div :class="['d-flex', { dark: isDark }]" id="wrapper">
    <!-- Sidebar -->
    <aside class="border-end sidebar" :class="{ collapsed: isCollapsed }" id="sidebar-wrapper">
      <div class="sidebar-heading text-white fw-bold text-center py-3">
        <i class="fas fa-bolt me-2"></i> EventHub
      </div>
      <div class="list-group list-group-flush">
        <router-link
          v-for="item in menuItems"
          :key="item.name"
          :to="item.route"
          class="list-group-item list-group-item-action text-white"
        >
          <i :class="item.icon" class="me-2"></i>
          <span v-if="!isCollapsed">{{ item.name }}</span>
        </router-link>
      </div>
    </aside>

    <!-- Page Content -->
    <div id="page-content-wrapper" class="flex-grow-1">
      <!-- Top Navbar -->
      <nav class="navbar navbar-expand-lg bg-light border-bottom shadow-sm py-2 px-3 d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center">
          <button class="btn btn-outline-primary me-2" @click="toggleSidebar">
            <i class="fas fa-bars"></i>
          </button>
          <h5 class="m-0 text-primary fw-bold">Dashboard</h5>
        </div>

        <div class="d-flex align-items-center gap-2">
          <!-- Dark Mode Toggle -->
          <button class="btn btn-outline-secondary" @click="toggleDarkMode">
            <i :class="isDark ? 'fas fa-sun' : 'fas fa-moon'"></i>
          </button>

          <!-- Logout -->
          <button class="btn btn-danger btn-sm" @click="logout">
            <i class="fas fa-sign-out-alt me-1"></i> Logout
          </button>
        </div>
      </nav>

      <!-- Main Dashboard Content -->
      <main class="p-4">
        <div class="dashboard-container">
          <!-- Header Section -->
          <header class="dashboard-header">
            <h1 class="dashboard-title">Event Hub Dashboard</h1>
            <p class="dashboard-subtitle">Welcome back! Here's what's happening with your events.</p>
          </header>

          <!-- Stats Cards Section -->
          <section class="stats-section">
            <div class="stats-grid">
              <div class="stat-card">
                <div class="stat-icon events-icon">
                  <i class="fas fa-calendar-alt"></i>
                </div>
                <div class="stat-content">
                  <h3 class="stat-title">Total Events</h3>
                  <p class="stat-value">{{ stats.totalEvents }}</p>
                </div>
              </div>

              <div class="stat-card">
                <div class="stat-icon upcoming-icon">
                  <i class="fas fa-clock"></i>
                </div>
                <div class="stat-content">
                  <h3 class="stat-title">Upcoming Events</h3>
                  <p class="stat-value">{{ stats.upcomingEvents }}</p>
                </div>
              </div>

              <div class="stat-card">
                <div class="stat-icon attendees-icon">
                  <i class="fas fa-users"></i>
                </div>
                <div class="stat-content">
                  <h3 class="stat-title">Total Attendees</h3>
                  <p class="stat-value">{{ stats.totalAttendees }}</p>
                </div>
              </div>

              <div class="stat-card">
                <div class="stat-icon revenue-icon">
                  <i class="fas fa-dollar-sign"></i>
                </div>
                <div class="stat-content">
                  <h3 class="stat-title">Revenue</h3>
                  <p class="stat-value">${{ stats.revenue.toLocaleString() }}</p>
                </div>
              </div>
            </div>
          </section>

          <!-- Main Content Area -->
          <div class="dashboard-content">
            <!-- Recent Events Section -->
            <section class="recent-events">
              <div class="section-header">
                <h2 class="section-title">Recent Events</h2>
                <router-link to="/events" class="view-all-link">View All</router-link>
              </div>
              
              <div class="events-list">
                <div v-for="event in recentEvents" :key="event.id" class="event-card">
                  <div class="event-date">
                    <span class="event-day">{{ formatDate(event.date).day }}</span>
                    <span class="event-month">{{ formatDate(event.date).month }}</span>
                  </div>
                  <div class="event-details">
                    <h3 class="event-title">{{ event.title }}</h3>
                    <p class="event-location">
                      <i class="fas fa-map-marker-alt"></i> {{ event.location }}
                    </p>
                    <div class="event-stats">
                      <span class="event-attendees">
                        <i class="fas fa-users"></i> {{ event.attendees }} attendees
                      </span>
                      <span class="event-status" :class="event.status.toLowerCase()">
                        {{ event.status }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Quick Actions Section -->
            <section class="quick-actions">
              <h2 class="section-title">Quick Actions</h2>
              <div class="actions-grid">
                <button @click="createNewEvent" class="action-btn primary-btn">
                  <i class="fas fa-plus-circle"></i> Create New Event
                </button>
                <router-link to="/events" class="action-btn secondary-btn">
                  <i class="fas fa-list"></i> Manage Events
                </router-link>
                <router-link to="/attendees" class="action-btn secondary-btn">
                  <i class="fas fa-user-friends"></i> Manage Attendees
                </router-link>
                <router-link to="/reports" class="action-btn secondary-btn">
                  <i class="fas fa-chart-bar"></i> View Reports
                </router-link>
              </div>
            </section>
          </div>

          <!-- Upcoming Events Chart -->
          <section class="chart-section">
            <h2 class="section-title">Upcoming Events</h2>
            <div class="chart-container">
              <div class="chart-placeholder">
                <p>Chart visualization would appear here</p>
                <p>(Consider integrating Chart.js or similar library)</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      isCollapsed: false,
      isDark: localStorage.getItem("darkMode") === "true",
      menuItems: [
        { name: "Dashboard", icon: "fas fa-tachometer-alt", route: "/dashboard" },
        { name: "Events", icon: "fas fa-calendar-alt", route: "/events" },
        { name: "Bookings", icon: "fas fa-ticket-alt", route: "/bookings" },
        { name: "Users", icon: "fas fa-users", route: "/users" },
        { name: "Reports", icon: "fas fa-chart-line", route: "/reports" },
        { name: "Settings", icon: "fas fa-cogs", route: "/settings" },
      ],
      stats: {
        totalEvents: 24,
        upcomingEvents: 5,
        totalAttendees: 1248,
        revenue: 24560
      },
      recentEvents: [
        {
          id: 1,
          title: 'Tech Conference 2023',
          date: '2023-11-15',
          location: 'Convention Center',
          attendees: 320,
          status: 'Upcoming'
        },
        {
          id: 2,
          title: 'Product Launch',
          date: '2023-10-28',
          location: 'Downtown Hall',
          attendees: 150,
          status: 'Completed'
        },
        {
          id: 3,
          title: 'Marketing Workshop',
          date: '2023-11-05',
          location: 'Business Center',
          attendees: 85,
          status: 'Upcoming'
        },
        {
          id: 4,
          title: 'Annual Gala',
          date: '2023-09-20',
          location: 'Grand Hotel',
          attendees: 450,
          status: 'Completed'
        }
      ]
    };
  },
  methods: {
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed;
    },
    toggleDarkMode() {
      this.isDark = !this.isDark;
      localStorage.setItem("darkMode", this.isDark);
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      return {
        day: date.getDate(),
        month: date.toLocaleString('default', { month: 'short' })
      };
    },
    createNewEvent() {
      alert('Navigate to event creation form');
    },
    logout() {
      sessionStorage.removeItem('uid');
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
/* Layout structure */
#wrapper {
  min-height: 100vh;
  overflow-x: hidden;
  transition: all 0.3s ease;
}
.sidebar {
  background-color: #4e73df;
  color: #fff;
  min-height: 100vh;
  width: 250px;
  transition: all 0.3s ease;
}
.sidebar.collapsed {
  width: 80px;
}
.sidebar-heading {
  font-size: 1.25rem;
}
.list-group-item {
  background: transparent;
  border: none;
  font-weight: 500;
  transition: 0.3s;
}
.list-group-item:hover {
  background-color: rgba(255, 255, 255, 0.15);
}
#page-content-wrapper {
  transition: all 0.3s ease;
}

/* Dark Mode Styles */
.dark {
  background-color: #1a1d24;
  color: #f8f9fa;
}
.dark .sidebar {
  background-color: #111827;
}
.dark .navbar {
  background-color: #1f2937 !important;
  border-color: #374151 !important;
}
.dark .list-group-item {
  color: #e5e7eb !important;
}
.dark .list-group-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dark .btn-outline-secondary {
  border-color: #9ca3af;
  color: #f9fafb;
}
.dark .btn-outline-secondary:hover {
  background-color: #374151;
}

/* Dashboard specific styles */
.dashboard-container {
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
}

.dashboard-header {
  margin-bottom: 30px;
}

.dashboard-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 10px;
}

.dashboard-subtitle {
  font-size: 1.1rem;
  color: #7f8c8d;
}

/* Stats Cards */
.stats-section {
  margin-bottom: 40px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.stat-card {
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
}

.stat-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  font-size: 1.5rem;
  color: white;
}

.events-icon { background-color: #3498db; }
.upcoming-icon { background-color: #2ecc71; }
.attendees-icon { background-color: #9b59b6; }
.revenue-icon { background-color: #f1c40f; }

.stat-content h3 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 5px;
  color: #7f8c8d;
}

.stat-value {
  font-size: 1.8rem;
  font-weight: 700;
  color: #2c3e50;
}

/* Main Content */
.dashboard-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
  margin-bottom: 40px;
}

/* Recent Events */
.recent-events {
  background: white;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c3e50;
}

.view-all-link {
  color: #3498db;
  text-decoration: none;
  font-weight: 500;
}

.view-all-link:hover {
  text-decoration: underline;
}

.events-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.event-card {
  display: flex;
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid #3498db;
  background-color: #f8f9fa;
  transition: background-color 0.3s ease;
}

.event-card:hover {
  background-color: #f1f1f1;
}

.event-date {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: #3498db;
  color: white;
  border-radius: 8px;
  margin-right: 15px;
}

.event-day {
  font-size: 1.2rem;
  font-weight: 700;
}

.event-month {
  font-size: 0.8rem;
  text-transform: uppercase;
}

.event-details {
  flex: 1;
}

.event-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 5px;
  color: #2c3e50;
}

.event-location {
  display: flex;
  align-items: center;
  color: #7f8c8d;
  margin-bottom: 8px;
}

.event-location i {
  margin-right: 5px;
}

.event-stats {
  display: flex;
  justify-content: space-between;
}

.event-attendees {
  display: flex;
  align-items: center;
  color: #7f8c8d;
}

.event-attendees i {
  margin-right: 5px;
}

.event-status {
  padding: 3px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.upcoming {
  background-color: #d4edda;
  color: #155724;
}

.completed {
  background-color: #e2e3e5;
  color: #383d41;
}

/* Quick Actions */
.quick-actions {
  background: white;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.actions-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
}

.action-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 15px;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.action-btn i {
  margin-right: 8px;
}

.primary-btn {
  background-color: #3498db;
  color: white;
  border: none;
}

.primary-btn:hover {
  background-color: #2980b9;
}

.secondary-btn {
  background-color: #f8f9fa;
  color: #2c3e50;
  border: 1px solid #dee2e6;
}

.secondary-btn:hover {
  background-color: #e9ecef;
}

/* Chart Section */
.chart-section {
  background: white;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.chart-container {
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
  border-radius: 8px;
  border: 1px dashed #dee2e6;
}

.chart-placeholder {
  text-align: center;
  color: #7f8c8d;
}

/* Responsive Design */
@media (max-width: 768px) {
  .dashboard-content {
    grid-template-columns: 1fr;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .actions-grid {
    grid-template-columns: 1fr;
  }
}

/* Smooth animations */
button, .sidebar, .navbar, main {
  transition: all 0.3s ease;
}
</style>