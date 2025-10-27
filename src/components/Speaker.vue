<template>
  <!-- Speakers Section -->
  <section id="speakers" class="speakers section">
    <!-- Section Title -->
    <div class="container section-title">
      <h2>Event Speakers<br></h2>
    </div>

    <div class="container">
      <div class="row gy-4">
        <!-- Loop through speakers dynamically -->
        <div
          class="col-xl-3 col-lg-4 col-md-6"
          v-for="speaker in speakers"
          :key="speaker.id"
        >
          <div class="member">
            <img :src="speaker.image" class="img-fluid" :alt="speaker.name" />
            <div class="member-info">
              <div class="member-info-content">
                <h4><a :href="speaker.detailsLink">{{ speaker.name }}</a></h4>
                <span>{{ speaker.title }}</span>
              </div>
              <div class="social">
                <a v-for="(link, platform) in speaker.social" :key="platform" :href="link">
                  <i :class="'bi bi-' + platform"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- End Speaker -->
      </div>
    </div>
  </section>
</template>

<script>
import Speakers from "./components/Speaker.vue";

export default {
  components: {
    Speakers,
  },
};
</script>


