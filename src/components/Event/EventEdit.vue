<template>
  <div class="container mt-5">
    <h2>Edit Event</h2>

    <form @submit.prevent="updateEvent" enctype="multipart/form-data">
      <div class="row">
        <!-- Title -->
        <div class="col-md-4">
          <div class="mb-3">
            <label for="title" class="form-label">Event Title</label>
            <input
              type="text"
              class="form-control"
              id="title"
              v-model="event.title"
              required
            />
          </div>
        </div>

        <!-- Location -->
        <div class="col-md-4">
          <div class="mb-3">
            <label for="location" class="form-label">Location</label>
            <input
              type="text"
              class="form-control"
              id="location"
              v-model="event.location"
              required
            />
          </div>
        </div>

        <!-- Date -->
        <div class="col-md-4">
          <div class="mb-3">
            <label for="date" class="form-label">Date</label>
            <input
              type="date"
              class="form-control"
              id="date"
              v-model="event.date"
              required
            />
          </div>
        </div>

        <!-- Start Time -->
        <div class="col-md-4">
          <div class="mb-3">
            <label for="start_time" class="form-label">Start Time</label>
            <input
              type="time"
              class="form-control"
              id="start_time"
              v-model="event.start_time"
              required
            />
          </div>
        </div>

        <!-- End Time -->
        <div class="col-md-4">
          <div class="mb-3">
            <label for="end_time" class="form-label">End Time</label>
            <input
              type="time"
              class="form-control"
              id="end_time"
              v-model="event.end_time"
              required
            />
          </div>
        </div>

        <!-- Price -->
        <div class="col-md-4">
          <div class="mb-3">
            <label for="price" class="form-label">Price</label>
            <input
              type="number"
              class="form-control"
              id="price"
              step="0.01"
              v-model="event.price"
              required
            />
          </div>
        </div>

        <!-- Available Ticket
