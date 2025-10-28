<template>
  <section id="speakers" class="speakers section">
    <div class="container section-title">
      <h2>Event Speakers</h2>
      <p>Meet our professional and inspiring speakers</p>
    </div>

    <div class="container">
      <div class="row gy-4">
        <div class="col-lg-3 col-md-6" v-for="(speaker, index) in speakers" :key="index">
          <div class="speaker">
            <img :src="speaker.image" class="img-fluid" :alt="speaker.name" />
            <div class="details">
              <h3>{{ speaker.name }}</h3>
              <p>{{ speaker.designation }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Speaker",
  data() {
    return {
      speakers: [
        {
          name: "John Doe",
          designation: "Event Organizer",
          image: "https://via.placeholder.com/300x300",
        },
        {
          name: "Jane Smith",
          designation: "Marketing Specialist",
          image: "https://via.placeholder.com/300x300",
        },
        {
          name: "Michael Lee",
          designation: "Motivational Speaker",
          image: "https://via.placeholder.com/300x300",
        },
        {
          name: "Sara Khan",
          designation: "Tech Enthusiast",
          image: "https://via.placeholder.com/300x300",
        },
      ],
    };
  },
};
</script>

<style scoped>
.speakers {
  padding: 60px 0;
}
.speaker {
  text-align: center;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s;
}
.speaker:hover {
  transform: translateY(-5px);
}
.details {
  background: #fff;
  padding: 15px;
}
</style>
