<template>
  <div class="container mt-5">
    <h3><strong>All Venues</strong></h3>

    <router-link to="/add_venue" class="btn btn-primary mb-3">Add New Venue</router-link>

    <div class="row">
      <div class="col-12">
        <table class="table table-striped align-middle">
          <thead class="table-dark">
            <tr>
              <th>#SL</th>
              <th>Name</th>
              <th>Description</th>
              <th>Address</th>
              <th>City</th>
              <th>Capacity</th>
              <th>Price/Day</th>
              <th>Image</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(venue, index) in venueData" :key="venue.id">
              <td>{{ index + 1 }}</td>
              <td>{{ venue.name }}</td>
              <td>{{ venue.description }}</td>
              <td>{{ venue.address }}</td>
              <td>{{ venue.city }}</td>
              <td>{{ venue.capacity }}</td>
              <td>{{ venue.price_per_day }}</td>
              <td>
                <img
                  v-if="venue.image"
                  :src="`${venue.image}`"
                  alt="Venue Image"
                  width="60"
                  height="60"
                  class="rounded"
                />
                <span v-else>No Image</span>
              </td>
              <td>
                <span
                  :class="venue.status === 'active' ? 'badge bg-success' : 'badge bg-secondary'"
                 >
                  {{ venue.status }}
                </span>
              </td>
              <td>
                <router-link
                  :to="'/edit_venue/' + venue.id"
                  class="btn btn-sm btn-primary me-2"
                >
                  Edit
                </router-link>
                <button
                  @click="deleteVenue(venue.id)"
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
  name: "IndexVenue",
  data() {
    return {
      venueData: [],
    };
  },
  methods: {
    getData() {
      DataService.VenueIndex()
        .then((response) => {
          if (response.data) this.venueData = response.data;
          else alert(response.data.error || "Failed to load venues.");
        })
        .catch((e) => {
          console.log("Error fetching venues:", e);
        });
    },
    deleteVenue(id) {
      if (!confirm("Are you sure you want to delete this venue?")) return;
      DataService.DeleteVenue(id)
        .then((response) => {
          console.log(response.data);
          alert("Venue deleted successfully!");
          this.getData(); 
        })
        .catch((e) => {
          console.log("Error deleting venue:", e);
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
