<template>
  <div class="container py-5">
    <h2 class="mb-4">Add Wishlist Item</h2>
    <form @submit.prevent="createWishlist">
      <div class="row">
        <div class="col-md-6 mb-3">
          <label>User ID</label>
          <input v-model="form.user_id" type="number" class="form-control" />
        </div>

        <div class="col-md-6 mb-3">
          <label>Event ID</label>
          <input v-model="form.event_id" type="number" class="form-control" />
        </div>
      </div>

      <button class="btn btn-success">Add to Wishlist</button>
    </form>
  </div>
</template>

<script>
import DataService from "../../services/DataService";

export default {
  name: "CreateWishlist",
  data() {
    return {
      form: {
        user_id: "",
        event_id: "",
      },
    };
  },
  methods: {
    createWishlist() {
      let formData = new FormData();
      formData.append("user_id", this.form.user_id);
      formData.append("event_id", this.form.event_id);

      DataService.AddWishlist(formData)
        .then((response) => {
          console.log(response.data);
          alert("Wishlist item added successfully!");
          this.$router.push({ name: "index_wishlist" });
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>
