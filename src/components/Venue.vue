<template>
  <section id="venue" class="venue section">

    <!-- Section Title -->
    <div class="container section-title">
      <h2>Event Venue</h2>
      <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
    </div>
    <!-- End Section Title -->

    <div class="container-fluid">
      <div class="row g-0">
        <div class="col-lg-6 venue-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>

        <div class="col-lg-6 venue-info">
          <div class="row justify-content-center">
            <div class="col-11 col-lg-8 position-relative">
              <h3>Downtown Conference Center, New York</h3>
              <p>
                Iste nobis eum sapiente sunt enim dolores labore accusantium autem.
                Cumque beatae ipsam. Est quae sit qui voluptatem corporis velit.
                Qui maxime accusamus possimus. Consequatur sequi et ea suscipit
                enim nesciunt quia velit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Venue Gallery -->
    <div class="container-fluid venue-gallery-container">
      <div class="row g-0">
        <div
          class="col-lg-3 col-md-4"
          v-for="(img, index) in images"
          :key="index"
        >
          <div class="venue-gallery">
            <a :href="img" class="glightbox" data-gall="venue-gallery">
              <img :src="img" alt="Venue image" class="img-fluid" />
            </a>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: "Venue",
  data() {
    return {
      images: [
        "assets/img/venue-gallery/venue-gallery-1.jpg",
        "assets/img/venue-gallery/venue-gallery-2.jpg",
        "assets/img/venue-gallery/venue-gallery-3.jpg",
        "assets/img/venue-gallery/venue-gallery-4.jpg",
        "assets/img/venue-gallery/venue-gallery-5.jpg",
        "assets/img/venue-gallery/venue-gallery-6.jpg",
        "assets/img/venue-gallery/venue-gallery-7.jpg",
        "assets/img/venue-gallery/venue-gallery-8.jpg",
      ],
    };
  },
};
</script>

<style scoped>
.venue {
  padding: 60px 0;
}

.venue-map iframe {
  width: 100%;
  height: 400px;
  border: 0;
}

.venue-info {
  background: #f8f9fa;
  padding: 40px 0;
}

.venue-gallery-container {
  margin-top: 40px;
}

.venue-gallery {
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
}

.venue-gallery img {
  width: 100%;
  border-radius: 8px;
}

.venue-gallery:hover {
  transform: scale(1.03);
}
</style>
