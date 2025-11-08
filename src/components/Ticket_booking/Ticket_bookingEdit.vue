<template>
  <div class="container py-5">
    <h2 class="mb-4">Edit Ticket Booking</h2>

    <form @submit.prevent="updateTicketBooking">
      <div class="row">
        <div class="col-md-6 mb-3">
          <label>Status</label>
          <select v-model="form.status" class="form-control">
            <option value="0">Pending</option>
            <option value="1">Confirmed</option>
            <option value="2">Cancelled</option>
          </select>
        </div>

        <div class="col-md-6 mb-3">
          <label>Booking Date</label>
          <input v-model="form.booking_date" type="date" class="form-control" />
        </div>
      </div>

      <button type="submit" class="btn btn-primary">Update Ticket</button>
    </form>
  </div>
</template>

<script>
import DataService from "../../services/DataService";

export default {
  name: "Ticket_bookingEdit",
  data() {
  return {
    form: {
      status: 0,
      booking_date: ''
    }, // <-- comma was missing here
    loading: false
  };
},

  methods: {
    async getTicketBooking(id) {
      try {
        this.loading = true;
        const response = await DataService.SingleTicketBooking(id);
        this.form = response.data;
      } catch (error) {
        console.error("Error fetching ticket:", error);
        alert("Failed to load ticket data.");
      } finally {
        this.loading = false;
      }
    },
    async updateTicketBooking() {
      const id = this.$route.params.id;
      try {
        this.loading = true;
        let formData = { ...this.form,'_method': 'PUT' };
        await DataService.UpdateTicketBooking(id, formData);
        alert("Ticket updated successfully!");
        this.$router.push({ name: "index_ticket_booking" });
      } catch (error) {
        console.error("Error updating ticket:", error);
        alert("Failed to update ticket.");
      } finally {
        this.loading = false;
      }
    }
  },
  mounted() {
    const id = this.$route.params.id;
    if (id) this.getTicketBooking(id);
  }
};
</script>

<style scoped>
/* Optional styling */
</style>
