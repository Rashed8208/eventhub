<template>
  <div class="container mt-4">
    <h2 class="mb-3">Create Ticket Booking</h2>
    <form @submit.prevent="createBooking">
      <div class="mb-3">
        <label>User ID</label>
        <input type="number" v-model="form.user_id" class="form-control" />
      </div>
      <div class="mb-3">
        <label>Event ID</label>
        <input type="number" v-model="form.event_id" class="form-control" />
      </div>
      <div class="mb-3">
        <label>Quantity</label>
        <input type="number" v-model="form.quantity" class="form-control" />
      </div>
      <div class="mb-3">
        <label>Total Amount</label>
        <input type="number" step="0.01" v-model="form.total_amount" class="form-control" />
      </div>
      <div class="mb-3">
        <label>Status</label>
        <select v-model="form.status" class="form-select">
          <option value="0">Pending</option>
          <option value="1">Confirmed</option>
          <option value="2">Cancelled</option>
        </select>
      </div>
      <div class="mb-3">
        <label>Booking Date</label>
        <input type="date" v-model="form.booking_date" class="form-control" />
      </div>

      <button type="submit" class="btn btn-success">Save</button>
    </form>
  </div>
</template>

<script>
import DataService from "@/services/DataService";

export default {
  data() {
    return {
      form: {
        user_id: "",
        event_id: "",
        quantity: "",
        total_amount: "",
        status: 0,
        booking_date: "",
      },
    };
  },
  methods: {
    async createBooking() {
      await DataService.createTicketBooking(this.form);
      alert("Booking created successfully!");
      this.$router.push("/ticket-bookings");
    },
  },
};
</script>
