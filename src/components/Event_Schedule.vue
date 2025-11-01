<template>
  <!-- Schedule Section -->
  <section id="schedule" class="schedule section mt-5 pt-5">

    <!-- Section Title -->
    <div class="container section-title mt-5">
      <h2>Schedule of {{ eventData.title }}<br></h2>
      <p>{{ eventData.location }}</p>
    </div><!-- End Section Title -->

    <div class="container">
    <!-- Schedule Day 1 -->
      <div class="row schedule-item" v-for="schedule in schedules" :key="schedule.id">
        <div class="col-md-2"><time>{{formatDateTime(schedule.time)}}</time></div>
        <div class="col-md-10">
          <h4>{{schedule.title}}</h4>
          <p>{{schedule.details}}</p>
        </div>
      </div>
    </div>
  </section>
  <!-- Booking Section -->
    <section id="contact" class="contact section">

      <!-- Section Title -->
      <div class="container section-title" >
        <h2>
          Booking
        </h2>
      </div><!-- End Section Title -->

      <div class="container"  >
        <div class="row gy-4 mt-1">
          <div class="col-lg-12">
            <form @submit.prevent="bookTicket" class="php-email-form">
              <div class="row gy-4">
                <div class="col-md-6">
                  <label class="form-label">Your Name</label>
                  <input 
                    type="text" 
                    v-model="bookingForm.customer_name" 
                    class="form-control" 
                    placeholder="Enter your full name"
                    required
                  >
                </div>

                <div class="col-md-6">
                  <label class="form-label">Email Address</label>
                  <input 
                    type="email" 
                    v-model="bookingForm.customer_email" 
                    class="form-control" 
                    placeholder="your.email@example.com"
                    required
                  >
                </div>

                <div class="col-md-6">
                  <label class="form-label">Phone Number</label>
                  <input 
                    type="tel" 
                    v-model="bookingForm.customer_phone" 
                    class="form-control" 
                    placeholder="Your contact number"
                    required
                  >
                </div>

                <div class="col-md-6">
                  <label class="form-label">Number of Tickets</label>
                  <input 
                    type="number" 
                    v-model.number="bookingForm.quantity" 
                    class="form-control" 
                    min="1" 
                    :max="eventData.available_tickets"
                    required
                  >
                  <small class="text-muted">Available tickets: {{ eventData.available_tickets }}</small>
                </div>

                <div class="col-md-12">
                  <label class="form-label">Total Amount</label>
                  <input 
                    type="text" 
                    :value="calculateTotal" 
                    class="form-control" 
                    readonly
                  >
                </div>

                <div class="col-md-12 text-center">
                  <div v-if="loading" class="loading">Processing booking...</div>
                  <div v-if="error" class="error-message">{{ error }}</div>
                  <div v-if="success" class="sent-message">{{ success }}</div>

                  <button 
                    type="submit" 
                    class="btn btn-primary" 
                    :disabled="loading || !eventData.available_tickets"
                  >
                    Book Tickets
                  </button>
                </div>
              </div>
            </form>
          </div><!-- End Contact Form -->
        </div>
      </div>

    </section><!-- /Contact Section -->
</template>

<script>
import DataService from "../services/DataService";

export default {
  name: "Event_Schedule",
  data() {
    return {
      schedules: [],
      eventData: [],
      loading: false,
      error: null,
      success: null,
      bookingForm: {
        customer_name: '',
        customer_email: '',
        customer_phone: '',
        quantity: 1,
        event_id: null,
        total_amount: 0,
        status: 0,
        booking_date: new Date().toISOString().slice(0, 19).replace('T', ' ')
      }
    };
  },
  computed: {
    calculateTotal() {
      return this.bookingForm.quantity * (this.eventData.price || 0);
    }
  },
  methods: {
    fetchSchedules() {
      const eventId = this.$route.params.id;
      this.bookingForm.event_id = eventId; // Set the event_id for booking
      DataService.SingleEvent(eventId)
        .then((response) => {
          this.eventData = response.data;
          this.schedules = response.data.schedules || [];
        })
        .catch((error) => {
          console.error("Error fetching schedules:", error);
          this.error = "Error loading event data";
        });
    },
    bookTicket() {
      this.loading = true;
      this.error = null;
      this.success = null;

      // Set the total amount based on quantity and event price
      this.bookingForm.total_amount = this.calculateTotal;
      
      DataService.AddTicketBooking(this.bookingForm)
        .then(response => {
          console.log(response)
          this.success = "Booking successful! Thank you for your purchase.";
          this.bookingForm.quantity = 1; // Reset form
          // Refresh event data to get updated available tickets
          this.fetchSchedules();
        })
        .catch(error => {
          console.error("Booking error:", error);
          this.error = error.response?.data?.message || "Error processing your booking";
        })
        .finally(() => {
          this.loading = false;
        });
    },
    formatDateTime(dt) {
      if (!dt) return "—";
      const d = new Date(dt);
      return d.toLocaleTimeString('en-US', { 
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true 
      });
    }
  },
  mounted() {
    this.fetchSchedules();
  }
};
</script>

<style scoped>
.schedule .speaker img {
  width: 60px;
  border-radius: 50%;
}
.schedule .schedule-item {
  margin-bottom: 20px;
}
.schedule .nav-tabs {
  justify-content: center;
  margin-bottom: 20px;
}
.schedule .nav-link.active {
  background-color: #ff4c60;
  color: #fff;
}
</style>
