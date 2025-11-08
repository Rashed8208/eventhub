<template>
  <section id="hotels" class="hotels section">
    <!-- Section Title -->
    <div class="container section-title">
      <h2>Hotels</h2>
      <p>Find the best hotels nearby for your stay during the events.</p>
    </div>

    <!-- Gallery Section -->
    <section id="gallery" class="gallery section">
      <div class="container section-title">
        <h2>Gallery</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div class="container">
        <div class="swiper init-swiper">
          <div class="swiper-wrapper align-items-center">
            <div class="swiper-slide" v-for="(img, index) in galleryImages" :key="index">
              <a class="glightbox" data-gallery="images-gallery" :href="img">
                <img :src="img" class="img-fluid" alt="">
              </a>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </section>

    <!-- Sponsors Section -->
    <section id="sponsors" class="sponsors section light-background">
      <div class="container section-title">
        <h2>Sponsors</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div class="container">
        <div class="row g-0 clients-wrap">
          <div class="col-xl-3 col-md-4 client-logo" v-for="(logo, index) in sponsors" :key="index">
            <img :src="logo" class="img-fluid" alt="Sponsor Logo">
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "Hotel",
  data() {
    return {
      // Sample Gallery Images
      galleryImages: [
        "https://images.unsplash.com/photo-1501117716987-c8eabfdcfb8c?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1505691723518-34d5e5cbfc29?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1519821172145-4d1ce7f44c98?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1472220625704-91e1462799b2?auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=60",
      ],

      // Sample Sponsors Logos
      sponsors: [
        "https://via.placeholder.com/200x100?text=Sponsor+1",
        "https://via.placeholder.com/200x100?text=Sponsor+2",
        "https://via.placeholder.com/200x100?text=Sponsor+3",
        "https://via.placeholder.com/200x100?text=Sponsor+4",
        "https://via.placeholder.com/200x100?text=Sponsor+5",
        "https://via.placeholder.com/200x100?text=Sponsor+6",
        "https://via.placeholder.com/200x100?text=Sponsor+7",
        "https://via.placeholder.com/200x100?text=Sponsor+8",
      ],
    };
  },
};
</script>

<style scoped>
.section-title {
  text-align: center;
  margin-bottom: 40px;
}
.swiper {
  padding: 20px 0;
}
.swiper-slide img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
}
.clients-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
.client-logo img {
  max-width: 100%;
  max-height: 100px;
  object-fit: contain;
  padding: 10px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.1);
}
.light-background {
  background: #f8f9fa;
}
</style>
