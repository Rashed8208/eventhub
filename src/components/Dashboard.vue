<template>
  <div class="dashboard">
    <!-- Header -->
    <div class="dashboard-header">
      <h1>Dashboard</h1>
      <p class="subtitle">Welcome back! Here's what's happening with your events.</p>
    </div>

    <!-- Stats Cards -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon" style="background: #e3f2fd">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2196f3" stroke-width="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
        </div>
        <div class="stat-content">
          <h3>{{ stats.totalEvents }}</h3>
          <p>Total Events</p>
          <span class="stat-change positive">+12% from last month</span>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon" style="background: #f3e5f5">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9c27b0" stroke-width="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        </div>
        <div class="stat-content">
          <h3>{{ stats.totalAttendees }}</h3>
          <p>Total Attendees</p>
          <span class="stat-change positive">+8% from last month</span>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon" style="background: #e8f5e9">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4caf50" stroke-width="2">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
          </svg>
        </div>
        <div class="stat-content">
          <h3>{{ stats.activeEvents }}</h3>
          <p>Active Events</p>
          <span class="stat-change">Happening now</span>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon" style="background: #fff3e0">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff9800" stroke-width="2">
            <line x1="12" y1="1" x2="12" y2="23"></line>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
        </div>
        <div class="stat-content">
          <h3>${{ stats.revenue.toLocaleString() }}</h3>
          <p>Revenue</p>
          <span class="stat-change positive">+23% from last month</span>
        </div>
      </div>
    </div>

    <!-- Charts Section -->
    <div class="charts-grid">
      <div class="chart-card">
        <div class="card-header">
          <h2>Event Attendance Overview</h2>
          <select v-model="chartPeriod" class="period-select">
            <option value="week">Last 7 Days</option>
            <option value="month">Last Month</option>
            <option value="year">Last Year</option>
          </select>
        </div>
        <div class="chart-container">
          <canvas ref="attendanceChart"></canvas>
        </div>
      </div>

      <div class="chart-card">
        <div class="card-header">
          <h2>Event Categories</h2>
        </div>
        <div class="chart-container">
          <canvas ref="categoriesChart"></canvas>
        </div>
      </div>
    </div>

    <!-- Recent Events & Activities -->
    <div class="content-grid">
      <div class="recent-card">
        <div class="card-header">
          <h2>Recent Events</h2>
          <button class="btn-link">View All</button>
        </div>
        <div class="event-list">
          <div v-for="event in recentEvents" :key="event.id" class="event-item">
            <div class="event-image" :style="{ background: event.color }">
              <span class="event-date">{{ event.date }}</span>
            </div>
            <div class="event-details">
              <h3>{{ event.title }}</h3>
              <p>{{ event.location }}</p>
              <div class="event-meta">
                <span class="attendees">👥 {{ event.attendees }} attendees</span>
                <span :class="['status', event.status]">{{ event.status }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="activity-card">
        <div class="card-header">
          <h2>Recent Activity</h2>
        </div>
        <div class="activity-list">
          <div v-for="activity in activities" :key="activity.id" class="activity-item">
            <div class="activity-icon" :style="{ background: activity.color }">
              {{ activity.icon }}
            </div>
            <div class="activity-content">
              <p><strong>{{ activity.user }}</strong> {{ activity.action }}</p>
              <span class="activity-time">{{ activity.time }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  props: {
    msg: String
  }
}
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



