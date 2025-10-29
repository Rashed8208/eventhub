<template>
  <div :class="['d-flex', { dark: isDark }]" id="wrapper">
    <!-- Page Content -->
    <div id="page-content-wrapper" class="flex-grow-1">
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
