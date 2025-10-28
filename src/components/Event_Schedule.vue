<template>
  <!-- Event Schedule Section -->
  <section id="schedule" class="schedule section">
    <div class="container section-title">
      <h2>Event Schedule</h2>
      <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
    </div>

    <div class="container">
      <!-- Tabs -->
      <ul class="nav nav-tabs" role="tablist">
        <li class="nav-item">
          <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#day-1">Day 1</button>
        </li>
        <li class="nav-item">
          <button class="nav-link" data-bs-toggle="tab" data-bs-target="#day-2">Day 2</button>
        </li>
        <li class="nav-item">
          <button class="nav-link" data-bs-toggle="tab" data-bs-target="#day-3">Day 3</button>
        </li>
      </ul>

      <!-- Tab Content -->
      <div class="tab-content row justify-content-center">
        <h3 class="sub-heading">
          Voluptatem nulla veniam soluta et corrupti consequatur neque eveniet officia.
          Eius necessitatibus voluptatem quis labore perspiciatis quia.
        </h3>

        <div
          v-for="(day, dayIndex) in schedule"
          :key="'day-' + dayIndex"
          :id="'day-' + (dayIndex + 1)"
          class="col-lg-9 tab-pane fade"
          :class="{ 'show active': dayIndex === 0 }"
        >
          <div
            class="row schedule-item"
            v-for="(item, index) in day"
            :key="`day${dayIndex + 1}-${index}`"
          >
            <div class="col-md-2">
              <time>{{ item.time }}</time>
            </div>
            <div class="col-md-10 d-flex align-items-center">
              <div v-if="item.speaker" class="speaker">
                <img :src="item.image" :alt="item.speaker" />
              </div>
              <div>
                <h4>{{ item.title }} <span v-if="item.speaker">{{ item.speaker }}</span></h4>
                <p>{{ item.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Event_Schedule",
  data() {
    return {
      schedule: [
        // Day 1
        [
          { time: "09:30 AM", title: "Registration", desc: "Fugit voluptas iusto maiores temporibus autem numquam magnam." },
          { time: "10:00 AM", title: "Keynote", speaker: "Brenden Legros", image: "assets/img/speakers/speaker-1-2.jpg", desc: "Facere provident incidunt quos voluptas." },
          { time: "11:00 AM", title: "Et voluptatem iusto dicta nobis.", speaker: "Hubert Hirthe", image: "assets/img/speakers/speaker-2-2.jpg", desc: "Maiores dignissimos neque qui cum accusantium ut sit sint inventore." },
          { time: "12:00 PM", title: "Explicabo et rerum quis et ut ea.", speaker: "Cole Emmerich", image: "assets/img/speakers/speaker-3-2.jpg", desc: "Veniam accusantium laborum nihil eos eaque accusantium aspernatur." },
          { time: "02:00 PM", title: "Qui non qui vel amet culpa sequi.", speaker: "Jack Christiansen", image: "assets/img/speakers/speaker-4-2.jpg", desc: "Nam ex distinctio voluptatem doloremque suscipit iusto." },
          { time: "03:00 PM", title: "Quos ratione neque expedita asperiores.", speaker: "Alejandrin Littel", image: "assets/img/speakers/speaker-5.jpg", desc: "Eligendi quo eveniet est nobis et ad temporibus odio quo." },
          { time: "04:00 PM", title: "Quo qui praesentium nesciunt", speaker: "Willow Trantow", image: "assets/img/speakers/speaker-6.jpg", desc: "Voluptatem et alias dolorum est aut sit enim neque veritatis." },
        ],
        // Day 2
        [
          { time: "10:00 AM", title: "Libero corrupti explicabo itaque.", speaker: "Brenden Legros", image: "assets/img/speakers/speaker-1-2.jpg", desc: "Facere provident incidunt quos voluptas." },
          { time: "11:00 AM", title: "Et voluptatem iusto dicta nobis.", speaker: "Hubert Hirthe", image: "assets/img/speakers/speaker-2-2.jpg", desc: "Maiores dignissimos neque qui cum accusantium ut sit sint inventore." },
          { time: "12:00 PM", title: "Explicabo et rerum quis et ut ea.", speaker: "Cole Emmerich", image: "assets/img/speakers/speaker-3-2.jpg", desc: "Veniam accusantium laborum nihil eos eaque accusantium aspernatur." },
          { time: "02:00 PM", title: "Qui non qui vel amet culpa sequi.", speaker: "Jack Christiansen", image: "assets/img/speakers/speaker-4-2.jpg", desc: "Nam ex distinctio voluptatem doloremque suscipit iusto." },
          { time: "03:00 PM", title: "Quos ratione neque expedita asperiores.", speaker: "Alejandrin Littel", image: "assets/img/speakers/speaker-5.jpg", desc: "Eligendi quo eveniet est nobis et ad temporibus odio quo." },
          { time: "04:00 PM", title: "Quo qui praesentium nesciunt", speaker: "Willow Trantow", image: "assets/img/speakers/speaker-6.jpg", desc: "Voluptatem et alias dolorum est aut sit enim neque veritatis." },
        ],
        // Day 3
        [
          { time: "10:00 AM", title: "Et voluptatem iusto dicta nobis.", speaker: "Hubert Hirthe", image: "assets/img/speakers/speaker-2-2.jpg", desc: "Maiores dignissimos neque qui cum accusantium ut sit sint inventore." },
          { time: "11:00 AM", title: "Explicabo et rerum quis et ut ea.", speaker: "Cole Emmerich", image: "assets/img/speakers/speaker-3-2.jpg", desc: "Veniam accusantium laborum nihil eos eaque accusantium aspernatur." },
          { time: "12:00 PM", title: "Libero corrupti explicabo itaque.", speaker: "Brenden Legros", image: "assets/img/speakers/speaker-1-2.jpg", desc: "Facere provident incidunt quos voluptas." },
          { time: "02:00 PM", title: "Qui non qui vel amet culpa sequi.", speaker: "Jack Christiansen", image: "assets/img/speakers/speaker-4-2.jpg", desc: "Nam ex distinctio voluptatem doloremque suscipit iusto." },
          { time: "03:00 PM", title: "Quos ratione neque expedita asperiores.", speaker: "Alejandrin Littel", image: "assets/img/speakers/speaker-5.jpg", desc: "Eligendi quo eveniet est nobis et ad temporibus odio quo." },
          { time: "04:00 PM", title: "Quo qui praesentium nesciunt", speaker: "Willow Trantow", image: "assets/img/speakers/speaker-6.jpg", desc: "Voluptatem et alias dolorum est aut sit enim neque veritatis." },
        ],
      ],
    };
  },
};
</script>

<style scoped>
.schedule {
  padding: 60px 0;
}

.section-title {
  text-align: center;
  margin-bottom: 40px;
}

.schedule-item {
  margin-bottom: 20px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 15px;
}

.speaker img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 15px;
}

.nav-tabs .nav-link.active {
  background-color: #ff4c4c;
  color: #fff;
}

.nav-tabs .nav-link {
  color: #333;
  border-radius: 0;
}

h4 span {
  color: #ff4c4c;
  font-weight: 500;
  margin-left: 10px;
}

.sub-heading {
  text-align: center;
  font-size: 1.1rem;
  margin: 20px 0;
  color: #555;
}
</style>
