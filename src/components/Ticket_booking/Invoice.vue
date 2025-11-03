<template>
  <div class="invoice-container">
    <h1>Invoice</h1>

    <div v-if="booking">
      <p><strong>Invoice ID:</strong> {{ booking.id }}</p>
      <p><strong>Event Name:</strong> {{ booking.event.title }}</p>
      <p><strong>Customer Name:</strong> {{ booking.customer_name }}</p>
      <p><strong>Tickets:</strong> {{ booking.quantity }}</p>
      <p><strong>Total Amount:</strong> ${{ booking.total_amount }}</p>
      <p><strong>Booking Date:</strong> {{ formatDate(booking.created_at) }}</p>
    </div>
    <div v-else>
      <p>Loading invoice...</p>
    </div>

    <button @click="printInvoice">Print Invoice</button>
  </div>
</template>

<script>
import DataService from "../../services/DataService";
export default {
  name: "Invoice",
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
    printInvoice() {
      window.print();
    }
  }
};
</script>

<style scoped>
.invoice-container {
  max-width: 600px;
  margin: 50px auto;
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background: #fff;
}
button {
  margin-top: 20px;
  padding: 10px 15px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background: #0056b3;
}
</style>
