<template>
  <div class="container mt-4">
    <h2 class="mb-3">All Venues</h2>

    <div class="d-flex justify-content-between mb-3">
      <router-link to="/create-venue" class="btn btn-primary">+ Add Venue</router-link>
    </div>

    <table class="table table-bordered table-striped">
      <thead class="table-dark">
        <tr>
          <th>ID</th>
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
        <tr v-for="venue in venues" :key="venue.id">
          <td>{{ venue.id }}</td>
          <td>{{ venue.name }}</td>
          <td>{{ venue.description }}</td>
          <td>{{ venue.address }}</td>
          <td>{{ venue.city }}</td>
          <td>{{ venue.capacity }}</td>
          <td>{{ venue.price_per_day }}</td>
          <td>
            <img v-if="venue.image" :src="venue.image" alt="Venue" width="80" height="60" class="rounded" />
          </td>
          <td>
            <span
              :class="venue.status === 'active' ? 'badge bg-success' : 'badge bg-secondary'"
            >
              {{ venue.status }}
            </span>
          </td>
          <td>
            <router-link :to="`/edit-venue/${venue.id}`" class="btn btn-sm btn-info me-2">
              Edit
            </router-link>
            <button class="btn btn-sm btn-danger" @click="deleteVenue(venue.id)">
              Delete
            </button>
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
    return {
      venues: [],
    };
  },
  methods: {
    async fetchVenues() {
      const response = await DataService.getAllVenues();
      this.venues = response.data;
    },
    async deleteVenue(id) {
      if (confirm("Are you sure you want to delete this venue?")) {
        await DataService.deleteVenue(id);
        this.fetchVenues();
      }
    },
  },
  mounted() {
    this.fetchVenues();
  },
};
</script>
