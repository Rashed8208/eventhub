<template>
  <div class="container py-5">
    <h2 class="mb-4">Create Ticket Booking</h2>
    <form @submit.prevent="createTicketBooking">
      <div class="row">
        <!-- Customer Name -->
        <div class="col-md-6 mb-3">
          <label>Customer Name</label>
          <input v-model="form.customer_name" type="text" class="form-control" />
        </div>

        <!-- Customer Email -->
        <div class="col-md-6 mb-3">
          <label>Customer Email</label>
          <input v-model="form.customer_email" type="email" class="form-control" />
        </div>

        <!-- Customer Phone -->
        <div class="col-md-6 mb-3">
          <label>Customer Phone</label>
          <input v-model="form.customer_phone" type="text" class="form-control" />
        </div>

        <!-- Event ID -->
        <div class="col-md-6 mb-3">
          <label>Event ID</label>
          <input v-model="form.event_id" type="number" class="form-control" />
        </div>

        <!-- Quantity -->
        <div class="col-md-6 mb-3">
          <label>Quantity</label>
          <input v-model="form.quantity" type="number" min="1" class="form-control" />
        </div>

        <!-- Total Amount -->
        <div class="col-md-6 mb-3">
          <label>Total Amount</label>
          <input v-model="form.total_amount" type="number" step="0.01" class="form-control" />
        </div>

        <!-- Status -->
        <div class="col-md-6 mb-3">
          <label>Status</label>
          <select v-model.number="form.status" class="form-control">
            <option :value="0">Pending</option>
            <option :value="1">Confirmed</option>
            <option :value="2">Cancelled</option>
          </select>
        </div>

        <!-- Booking Date -->
        <div class="col-md-6 mb-3">
          <label>Booking Date</label>
          <input v-model="form.booking_date" type="date" class="form-control" />
        </div>
      </div>

      <button type="submit" class="btn btn-success" :disabled="loading">
        {{ loading ? "Creating..." : "Create Ticket" }}
      </button>
    </form>
  </div>
</template>

<script>
import DataService from "../../services/DataService";

export default {
  name: "Ticket_bookingCreate",
  data() {
    return {
      form: {
        customer_name: "",
        customer_email: "",
        customer_phone: "",
        event_id: "",
        quantity: "",
        total_amount: "",
        status: 0,
        booking_date: "",
      },
      loading: false
    };
  },
  methods: {
    async createTicketBooking() {
      try {
        this.loading = true;
        await DataService.AddTicketBooking(this.form); // Removed unused variable
        alert("Ticket created successfully!");
        this.$router.push({ name: "index_ticket_booking" });
      } catch (error) {
        console.error(error);
        alert(error.response?.data?.message || "Failed to create ticket.");
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
label {
  font-weight: 500;
}
</style>
