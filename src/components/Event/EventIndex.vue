<template>
  <div class="container mt-5">
    <h3><strong>All Events</strong></h3>

    <router-link to="/add_event" class="btn btn-primary mb-3">Add New Event</router-link>

    <div class="row">
      <div class="col-12">
        <table class="table table-striped align-middle">
          <thead class="table-dark">
            <tr>
              <th>#SL</th>
              <th>Title</th>
              <th>Location</th>
              <th>Date</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Price</th>
              <th>Available Tickets</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(event, index) in eventData" :key="event.id">
              <td>{{ index + 1 }}</td>
              <td>{{ event.title }}</td>
              <td>{{ event.location }}</td>
              <td>{{ event.date }}</td>
              <td>{{ event.start_time }}</td>
              <td>{{ event.end_time }}</td>
              <td>{{ event.price }}</td>
              <td>{{ event.available_tickets }}</td>
              <td>
                <img
                  v-if="event.image"
                  :src="`${event.image}`"
                  alt="Event Image"
                  width="60"
                  height="60"
                  class="rounded"
                />
                <span v-else>No Image</span>
              </td>
              <td>
                <router-link
                  :to="'/edit_event/' + event.id"
                  class="btn btn-sm btn-primary me-2"
                >
                  Edit
                </router-link>
                <button
                  @click="deleteEvent(event.id)"
                  class="btn btn-sm btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import DataService from "../../services/DataService";

export default {
  name: "IndexEvent",
  data() {
    return {
      eventData: [],
    };
  },
  methods: {
    getData() {
      DataService.EventIndex()
        .then((response) => {
          if (response.data) this.eventData = response.data;
          else alert(response.data.error);
        })
        .catch((e) => {
          console.log("Error fetching events:", e);
        });
    },
    deleteEvent(id) {
      if (!confirm("Are you sure you want to delete this event?")) return;
      DataService.DeleteEvent(id)
        .then((response) => {
          console.log(response.data);
          alert("Event deleted successfully!");
          this.getData(); // Refresh the list
        })
        .catch((e) => {
          console.log("Error deleting event:", e);
        });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style scoped>
table img {
  object-fit: cover;
}
</style>
