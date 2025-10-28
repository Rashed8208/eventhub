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
          <button class="btn btn-danger btn-sm">
            <i class="fas fa-sign-out-alt me-1"></i> Logout
          </button>
        </div>
      </nav>

      <!-- Main Slot -->
      <main class="p-4">
        <slot />
      </main>
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

<style>
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

/* Smooth animations */
button, .sidebar, .navbar, main {
  transition: all 0.3s ease;
}
</style>
