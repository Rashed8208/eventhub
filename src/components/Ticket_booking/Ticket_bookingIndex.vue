<template>
  <div class="container mt-5">
    <h3><strong>All Ticket Bookings</strong></h3>

    <router-link to="/add_ticket_booking" class="btn btn-primary mb-3">Add New Ticket</router-link>

    <div class="row">
      <div class="col-12">
        <table class="table table-striped align-middle">
          <thead class="table-dark">
            <tr>
              <th>#SL</th>
              <th>Customer Name</th>
              <th>Customer Email</th>
              <th>Customer Phone</th>
              <th>Event</th>
              <th>Quantity</th>
              <th>Total Amount</th>
              <th>Status</th>
              <th>Booking Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(ticket, index) in ticketData" :key="ticket.id">
              <td>{{ index + 1 }}</td>
              <td>{{ ticket.customer_name }}</td>
              <td>{{ ticket.customer_email }}</td>
              <td>{{ ticket.customer_phone }}</td>
              <td>{{ ticket.event.title }}</td>
              <td>{{ ticket.quantity }}</td>
              <td>{{ ticket.total_amount }}</td>
              <td>
                <span
                  :class="ticket.status === 1 ? 'badge bg-success' : ticket.status === 2 ? 'badge bg-danger' : 'badge bg-warning text-dark'"
                >
                  {{ ticket.status === 1 ? 'Confirmed' : ticket.status === 2 ? 'Cancelled' : 'Pending' }}
                </span>
              </td>
              <td>{{ ticket.booking_date }}</td>
              <td>
                <router-link
                  :to="'/edit_ticket_booking/' + ticket.id"
                  class="btn btn-sm btn-primary me-2"
                >
                  Edit
                </router-link>
                <router-link
                  :to="'/invoice/' + ticket.id"
                  class="btn btn-sm btn-info me-2"
                >
                  Invoice
                </router-link>
                <button
                  @click="deleteTicketBooking(ticket.id)"
                  class="btn btn-sm btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <!-- Optional: Simple list view for invoice links -->
        <div class="mt-4">
          <h5>Quick Invoice Links:</h5>
          <ul>
            <li v-for="ticket in ticketData" :key="'invoice-' + ticket.id">
              {{ ticket.event.title }} - {{ ticket.customer_name }}
              <router-link :to="`/invoice/${ticket.id}`">View Invoice</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DataService from "../../services/DataService";

export default {
  name: "Ticket_bookingIndex",
  data() {
    return {
      ticketData: [],
    };
  },
  methods: {
    getData() {
      // Fetch tickets via DataService
      DataService.TicketBookingIndex()
        .then((response) => {
          this.ticketData = response.data;
        })
        .catch((e) => console.log("Error fetching tickets:", e));
    },
    deleteTicketBooking(id) {
      if (!confirm("Are you sure you want to delete this ticket?")) return;
      DataService.DeleteTicketBooking(id)
        .then(() => {
          alert("Ticket deleted successfully!");
          this.getData();
        })
        .catch((e) => console.log("Error deleting ticket:", e));
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
