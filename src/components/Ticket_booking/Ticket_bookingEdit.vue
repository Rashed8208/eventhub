<template>
  <div class="container py-5">
    <h2 class="mb-4">Edit Ticket Booking</h2>
    <form @submit.prevent="updateTicket">
      <div class="row">
        <div class="col-md-6 mb-3">
          <label>User ID</label>
          <input v-model="form.user_id" type="number" class="form-control" />
        </div>
        <div class="col-md-6 mb-3">
          <label>Event ID</label>
          <input v-model="form.event_id" type="number" class="form-control" />
        </div>
        <div class="col-md-6 mb-3">
          <label>Quantity</label>
          <input v-model="form.quantity" type="number" class="form-control" />
        </div>
        <div class="col-md-6 mb-3">
          <label>Total Amount</label>
          <input v-model="form.total_amount" type="number" step="0.01" class="form-control" />
        </div>
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

      <button class="btn btn-primary">Update Ticket</button>
    </form>
  </div>
</template>

<script>
import DataService from "../../services/DataService";

export default {
  name: "Ticket_bookingEdit",
  data() {
    return {
      form: {},
    };
  },
  methods: {
    getTicketBooking(id) {
      DataService.SingleTicketBooking(id)
        .then((response) => {
          this.form = response.data;
        })
        .catch((e) => console.log(e));
    },
    updateTicketBooking() {
      const id = this.$route.params.id;
      DataService.UpdateTicketBooking(id, this.form)
        .then(() => {
          alert("Ticket updated successfully!");
          this.$router.push({ name: "index_ticket_booking" });
        })
        .catch((e) => console.log(e));
    },
  },
  mounted() {
    const id = this.$route.params.id;
    if (id) this.getTicket(id);
  },
};
</script>
