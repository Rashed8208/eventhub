<template>
        
        <!-- Page Heading -->
        <div class="d-sm-flex align-items-center justify-content-between mt-4 mb-4">
            <h1 class="h3 mb-0 text-gray-800">Dashboard Overview</h1>
            <button class="d-none d-sm-inline-block btn btn-primary shadow-sm">
                <i class="fas fa-download fa-sm text-white-50"></i> Generate Report
            </button>
        </div>

        <!-- Statistics Cards -->
        <div class="row">
            <!-- Total Properties -->
            <div class="col-xl-3 col-md-6 mb-4">
                <div class="card stat-card card-primary h-100">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                    Total Properties</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800" id="totalProperties">367
                                </div>
                                <div class="mt-2 text-success">
                                    <small><i class="fas fa-arrow-up me-1"></i> 12% increase</small>
                                </div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-home stat-icon text-primary"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Total Landlords -->
            <div class="col-xl-3 col-md-6 mb-4">
                <div class="card stat-card card-success h-100">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                    Total Landlords</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800" id="totalLandlords">145
                                </div>
                                <div class="mt-2 text-success">
                                    <small><i class="fas fa-arrow-up me-1"></i> 8 new this month</small>
                                </div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-user-tie stat-icon text-success"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Total Tenants -->
            <div class="col-xl-3 col-md-6 mb-4">
                <div class="card stat-card card-info h-100">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-info text-uppercase mb-1">
                                    Total Tenants</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800" id="totalTenants">892
                                </div>
                                <div class="mt-2 text-success">
                                    <small><i class="fas fa-arrow-up me-1"></i> 45 new this month</small>
                                </div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-users stat-icon text-info"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Pending Approvals -->
            <div class="col-xl-3 col-md-6 mb-4">
                <div class="card stat-card card-warning h-100">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                    Pending Approvals</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800" id="pendingApprovals">12
                                </div>
                                <div class="mt-2 text-warning">
                                    <small>Need immediate attention</small>
                                </div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-clock stat-icon text-warning"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Quick Actions & Recent Activity -->
        <div class="row">
            <!-- Quick Actions -->
            <div class="col-lg-6 mb-4">
                <div class="card shadow h-100">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Quick Actions</h6>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <a href="#" class="quick-action-btn" style="background: var(--primary);">
                                    <i class="fas fa-home fa-2x mb-2"></i><br>
                                    View All Posts<br>
                                    <small>367 Properties</small>
                                </a>
                            </div>
                            <div class="col-md-6 mb-3">
                                <a href="#" class="quick-action-btn" style="background: var(--warning);">
                                    <i class="fas fa-flag fa-2x mb-2"></i><br>
                                    Reported Listings<br>
                                    <small>3 Needs Review</small>
                                </a>
                            </div>
                            <div class="col-md-6 mb-3">
                                <a href="#" class="quick-action-btn" style="background: var(--info);">
                                    <i class="fas fa-user-clock fa-2x mb-2"></i><br>
                                    Pending Approvals<br>
                                    <small>12 Landlords</small>
                                </a>
                            </div>
                            <div class="col-md-6 mb-3">
                                <a href="#" class="quick-action-btn" style="background: var(--danger);">
                                    <i class="fas fa-ban fa-2x mb-2"></i><br>
                                    Banned Users<br>
                                    <small>7 Accounts</small>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Recent Activity -->
            <div class="col-lg-6 mb-4">
                <div class="card shadow h-100">
                    <div class="card-header py-3 d-flex justify-content-between align-items-center">
                        <h6 class="m-0 font-weight-bold text-primary">Recent Activity</h6>
                        <span class="badge bg-primary">Live</span>
                    </div>
                    <div class="card-body recent-activity">
                        <div class="activity-item new">
                            <div class="d-flex justify-content-between">
                                <strong>New Property Listed</strong>
                                <small class="text-muted">2 min ago</small>
                            </div>
                            <p class="mb-0">"Luxury Apartment Downtown" by John Doe</p>
                            <small class="text-primary">Needs approval</small>
                        </div>

                        <div class="activity-item warning">
                            <div class="d-flex justify-content-between">
                                <strong>Property Reported</strong>
                                <small class="text-muted">15 min ago</small>
                            </div>
                            <p class="mb-0">"Beach House Malibu" reported for fake images</p>
                            <small class="text-warning">3 reports received</small>
                        </div>

                        <div class="activity-item">
                            <div class="d-flex justify-content-between">
                                <strong>New Landlord Registered</strong>
                                <small class="text-muted">1 hour ago</small>
                            </div>
                            <p class="mb-0">Sarah Johnson signed up as landlord</p>
                            <small class="text-info">Pending verification</small>
                        </div>

                        <div class="activity-item danger">
                            <div class="d-flex justify-content-between">
                                <strong>User Banned</strong>
                                <small class="text-muted">2 hours ago</small>
                            </div>
                            <p class="mb-0">Mike Smith banned for multiple violations</p>
                            <small class="text-danger">Permanent ban</small>
                        </div>

                        <div class="activity-item">
                            <div class="d-flex justify-content-between">
                                <strong>Rent Payment Processed</strong>
                                <small class="text-muted">3 hours ago</small>
                            </div>
                            <p class="mb-0">$1,200 payment for "Garden Apartment"</p>
                            <small class="text-success">Successful</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Additional Stats -->
        <div class="row">
            <div class="col-lg-4 mb-4">
                <div class="card bg-danger text-white shadow">
                    <div class="card-body">
                        <div class="text-white-50 small">Banned Users</div>
                        <div class="mb-0 h4" id="bannedUsers">7</div>
                        <i class="fas fa-ban fa-2x text-white-300 float-end"></i>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 mb-4">
                <div class="card bg-warning text-white shadow">
                    <div class="card-body">
                        <div class="text-white-50 small">Reported Listings</div>
                        <div class="mb-0 h4" id="reportedListings">3</div>
                        <i class="fas fa-flag fa-2x text-white-300 float-end"></i>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 mb-4">
                <div class="card bg-info text-white shadow">
                    <div class="card-body">
                        <div class="text-white-50 small">Active Today</div>
                        <div class="mb-0 h4" id="activeToday">89</div>
                        <i class="fas fa-user-check fa-2x text-white-300 float-end"></i>
                    </div>
                </div>
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
.dashboard {
  padding: 2rem;
  background: #f5f7fa;
  min-height: 100vh;
}

.dashboard-header {
  margin-bottom: 2rem;
}

.dashboard-header h1 {
  font-size: 2rem;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 0.5rem 0;
}

.subtitle {
  color: #718096;
  font-size: 1rem;
  margin: 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.stat-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.stat-icon {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-content h3 {
  font-size: 1.75rem;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 0.25rem 0;
}

.stat-content p {
  color: #718096;
  font-size: 0.875rem;
  margin: 0 0 0.5rem 0;
}

.stat-change {
  font-size: 0.75rem;
  color: #718096;
}

.stat-change.positive {
  color: #48bb78;
}

.charts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.chart-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.card-header h2 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0;
}

.period-select {
  padding: 0.5rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 0.875rem;
  color: #4a5568;
  cursor: pointer;
}

.chart-container {
  height: 300px;
  position: relative;
}

.content-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.5rem;
}

.recent-card, .activity-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.btn-link {
  background: none;
  border: none;
  color: #667eea;
  font-size: 0.875rem;
  cursor: pointer;
  font-weight: 500;
}

.event-list, .activity-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.event-item {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-radius: 8px;
  transition: background 0.2s;
}

.event-item:hover {
  background: #f7fafc;
}

.event-image {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.event-date {
  color: white;
  font-weight: 600;
  font-size: 0.875rem;
}

.event-details {
  flex: 1;
}

.event-details h3 {
  font-size: 1rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0 0 0.25rem 0;
}

.event-details p {
  color: #718096;
  font-size: 0.875rem;
  margin: 0 0 0.5rem 0;
}

.event-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.875rem;
}

.attendees {
  color: #718096;
}

.status {
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
}

.status.upcoming {
  background: #e3f2fd;
  color: #2196f3;
}

.status.active {
  background: #e8f5e9;
  color: #4caf50;
}

.status.completed {
  background: #f3e5f5;
  color: #9c27b0;
}

.activity-item {
  display: flex;
  gap: 1rem;
  align-items: start;
}

.activity-icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 1.25rem;
}

.activity-content p {
  margin: 0 0 0.25rem 0;
  color: #1a202c;
  font-size: 0.875rem;
}

.activity-time {
  color: #a0aec0;
  font-size: 0.75rem;
}

@media (max-width: 1024px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
  
  .charts-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .dashboard {
    padding: 1rem;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>



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