<template>
  <div class="ticket-container">
    <div class="ticket-header">
      <h2>🎟️ Event Ticket</h2>
    </div>

    <div v-if="booking" class="ticket-body">
      <div class="ticket-info">
        <p><strong>Ticket No:</strong> {{ booking.id }}</p>
        <p><strong>Event:</strong> {{ booking.event.title }}</p>
        <p><strong>Customer:</strong> {{ booking.customer_name }}</p>
        <p><strong>Quantity:</strong> {{ booking.quantity }}</p>
        <p><strong>Total Paid:</strong> ${{ booking.total_amount }}</p>
        <p><strong>Booking Date:</strong> {{ formatDate(booking.created_at) }}</p>
      </div>

      <div class="ticket-footer">
        <p>Thank you for booking with <strong>Event Hub</strong>!</p>
        <p>🎫 Please show this ticket at the event entrance.</p>
      </div>
    </div>

    <div v-else class="loading">
      <p>Loading ticket...</p>
    </div>

    <button @click="printTicket">Print Ticket</button>
  </div>
</template>

<script>
import DataService from "../../services/DataService";
export default {
  name: "Ticket",
  props: {
    bookingId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      booking: null
    };
  },
  mounted() {
    this.fetchBooking();
  },
  methods: {
    async fetchBooking() {
      try {
        DataService.SingleTicketBooking(this.$route.params.id)
        .then((response) => {
          this.booking = response.data;
        })
        .catch((e) => console.log("Error fetching tickets:", e));
      } catch (error) {
        console.error("Failed to fetch booking:", error);
      }
    },
    formatDate(date) {
      return new Date(date).toLocaleDateString();
    },
    printTicket() {
      window.print();
    }
  }
};
</script>

<style scoped>
.ticket-container {
  max-width: 500px;
  margin: 40px auto;
  padding: 25px;
  border: 3px dashed #007bff;
  border-radius: 15px;
  background: #f9f9ff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: "Poppins", sans-serif;
}

.ticket-header {
  text-align: center;
  margin-bottom: 20px;
}

.ticket-header h2 {
  color: #007bff;
  font-weight: 700;
}

.ticket-body {
  text-align: left;
  margin-bottom: 20px;
}

.ticket-info p {
  margin: 6px 0;
  font-size: 16px;
}

.ticket-footer {
  text-align: center;
  margin-top: 20px;
  border-top: 1px dashed #007bff;
  padding-top: 10px;
  color: #555;
  font-size: 14px;
}

.loading {
  text-align: center;
  color: #888;
}

button {
  display: block;
  width: 100%;
  margin-top: 15px;
  padding: 10px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background: #0056b3;
}
</style>
