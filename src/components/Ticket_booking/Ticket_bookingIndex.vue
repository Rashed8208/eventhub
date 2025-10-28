<template>
  <div class="container mt-4">
    <h2 class="mb-3">All Ticket Bookings</h2>

    <div class="d-flex justify-content-between mb-3">
      <router-link to="/create-ticket-booking" class="btn btn-primary">+ Add Booking</router-link>
    </div>

    <table class="table table-bordered table-striped">
      <thead class="table-dark">
        <tr>
          <th>ID</th>
          <th>User ID</th>
          <th>Event ID</th>
          <th>Quantity</th>
          <th>Total Amount</th>
          <th>Status</th>
          <th>Booking Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="booking in bookings" :key="booking.id">
          <td>{{ booking.id }}</td>
          <td>{{ booking.user_id }}</td>
          <td>{{ booking.event_id }}</td>
          <td>{{ booking.quantity }}</td>
          <td>{{ booking.total_amount }}</td>
          <td>
            <span v-if="booking.status === 0" class="badge bg-warning">Pending</span>
            <span v-else-if="booking.status === 1" class="badge bg-success">Confirmed</span>
            <span v-else class="badge bg-danger">Cancelled</span>
          </td>
          <td>{{ booking.booking_date }}</td>
          <td>
            <router-link :to="`/edit-ticket-booking/${booking.id}`" class="btn btn-sm btn-info me-2">Edit</router-link>
            <button class="btn btn-sm btn-danger" @click="deleteBooking(booking.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import DataService from "@/services/DataService";

export default {
  data() {
    return { bookings: [] };
  },
  methods: {
    async fetchBookings() {
      const response = await DataService.getAllTicketBookings();
      this.bookings = response.data;
    },
    async deleteBooking(id) {
      if (confirm("Are you sure you want to delete this booking?")) {
        await DataService.deleteTicketBooking(id);
        this.fetchBookings();
      }
    },
  },
  mounted() {
    this.fetchBookings();
  },
};
</script>
