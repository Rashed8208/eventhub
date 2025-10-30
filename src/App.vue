<template>

  
    <!-- Only show header if not on dashboard -->
  <header
    v-if="!uid"
    id="header"
    class="header d-flex align-items-center fixed-top custom-header"
  >
    <div class="container-fluid container-xl position-relative d-flex align-items-center">
      <a href="index.html" class="logo d-flex align-items-center me-auto">
        <img src="assets/img/logo.png" alt="">
      </a>

      <nav id="navmenu" class="navmenu">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="speaker">Speaker</router-link></li>
          <li><router-link to="event_schedule">Event Schedule</router-link></li>
          <li><router-link to="venue">Venue</router-link></li>
          <li><a href="#hotels">Hotels</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <a class="cta-btn d-none d-sm-block" href="#buy-tickets">Buy Tickets</a>
    </div>
  </header>

  <nav class="navbar navbar-expand-lg bg-body-tertiary" v-if="uid">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Admin</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/index_event" class="nav-link active" aria-current="page">Event</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/index_venue" class="nav-link active" aria-current="page">Venue</router-link>
        </li>
         <li class="nav-item">
          <router-link to="/index_ticket_booking" class="nav-link active" aria-current="page">Ticket Booking</router-link>
        </li>
         <li class="nav-item">
          <router-link to="/index_wishlist" class="nav-link active" aria-current="page">Wishlist</router-link>
        </li>
        
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

  
 <router-view></router-view>

    <!-- Only show footer if not on dashboard -->
    
    <footer v-if="!isDashboardRoute" id="footer" class="footer dark-background">

      <div class="footer-top">
        <div class="container">
          <div class="row gy-4">
            <div class="col-lg-4 col-md-6 footer-about">
              <a href="index.html" class="logo d-flex align-items-center">
                <span class="sitename">TheEvent</span>
              </a>
              <div class="footer-contact pt-3">
                <p>A108 Adam Street</p>
                <p>New York, NY 535022</p>
                <p class="mt-3"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
                <p><strong>Email:</strong> <span>info@example.com</span></p>
              </div>
            </div>

            <div class="col-lg-2 col-md-3 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Terms of service</a></li>
                <li><a href="#">Privacy policy</a></li>
              </ul>
            </div>

            <div class="col-lg-2 col-md-3 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><a href="#">Web Design</a></li>
                <li><a href="#">Web Development</a></li>
                <li><a href="#">Product Management</a></li>
                <li><a href="#">Marketing</a></li>
                <li><a href="#">Graphic Design</a></li>
              </ul>
            </div>

            <div class="col-lg-2 col-md-3 footer-links">
              <h4>Hic solutasetp</h4>
              <ul>
                <li><a href="#">Molestiae accusamus iure</a></li>
                <li><a href="#">Excepturi dignissimos</a></li>
                <li><a href="#">Suscipit distinctio</a></li>
                <li><a href="#">Dilecta</a></li>
                <li><a href="#">Sit quas consectetur</a></li>
              </ul>
            </div>

            <div class="col-lg-2 col-md-3 footer-links">
              <h4>Nobis illum</h4>
              <ul>
                <li><a href="#">Ipsam</a></li>
                <li><a href="#">Laudantium dolorum</a></li>
                <li><a href="#">Dinera</a></li>
                <li><a href="#">Trodelas</a></li>
                <li><a href="#">Flexo</a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      <div class="copyright text-center">
        <div class="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">

          <div class="d-flex flex-column align-items-center align-items-lg-start">
            <div>
              © Copyright <strong><span>MyWebsite</span></strong>. All Rights Reserved
            </div>
            <div class="credits">
              <!-- All the links in the footer should remain intact. -->
              <!-- You can delete the links only if you purchased the pro version. -->
              <!-- Licensing information: https://bootstrapmade.com/license/ -->
              <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/herobiz-bootstrap-business-template/ -->
              Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> Distributed by <a href="https://themewagon.com" target="_blank">ThemeWagon</a>
            </div>
          </div>

          <div class="social-links order-first order-lg-last mb-3 mb-lg-0">
            <a href=""><i class="bi bi-twitter-x"></i></a>
            <a href=""><i class="bi bi-facebook"></i></a>
            <a href=""><i class="bi bi-instagram"></i></a>
            <a href=""><i class="bi bi-linkedin"></i></a>
          </div>

        </div>
      </div>

    </footer>

    <!-- Scroll Top -->
    <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        uid:sessionStorage.getItem('uid')
      };
    },
    methods: {
      logout() {
        this.uid="";
        sessionStorage.setItem('uid', '');
        window.location.href='/';
      }
    }
  }
</script>
<style scoped>
.custom-header {
  background-color: #1a1a1a; /* navbar color */
  color: white;
  transition: background-color 0.3s ease;
}

/* Optional: change link color */
.custom-header a {
  color: white;
}

.custom-header a:hover {
  color: #ffcc00;
}
</style>
