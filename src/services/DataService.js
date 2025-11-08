import http from "../http-common";


class DataService {
  login(data) {
    return http.post("/login", data);
  }
  
  EventIndex() {
    return http.get("/events");
  }

  SingleEvent(id) {
    return http.get(`/events/${id}`);
  }

  AddEvent(data) {
    return http.post("/events", data);
  }

  
  UpdateEvent(id, data) {
    return http.post(`/events/${id}`, data);
  }

  
  DeleteEvent(id) {
    return http.delete(`/events/${id}`);
  }

  VenueIndex() {
    return http.get("/venue");
  }

  SingleVenue(id) {
    return http.get(`/venue/${id}`);
  }

  AddVenue(data) {
    return http.post("/venue", data);
  }

  UpdateVenue(id, data) {
    return http.put(`/venue/${id}`, data);
  }

  DeleteVenue(id) {
    return http.delete(`/venue/${id}`);
  }

  WishlistIndex() {
    return http.get("/wishlist");
  }

  SingleWishlist(id) {
    return http.get(`/wishlist/${id}`);
  }

  AddWishlist(data) {
    return http.post("/wishlist", data);
  }
  UpdateWishlist(id, data) {
    return http.put(`/wishlist/${id}`, data);
  }

  DeleteWishlist(id) {
    return http.delete(`/wishlist/${id}`);
  }
  // Event Schedule CRUD
  ScheduleIndex(params = null) {
    // params can include { event_id }
    const query = params ? { params } : {};
    return http.get(`/event-schedules`, query);
  }

  SingleSchedule(id) {
    return http.get(`/event-schedules/${id}`);
  }

  AddSchedule(data) {
    return http.post(`/event-schedules`, data);
  }

  UpdateSchedule(id, data) {
    return http.post(`/event-schedules/${id}`, data);
  }

  DeleteSchedule(id) {
    return http.delete(`/event-schedules/${id}`);
  }
   TicketBookingIndex() {
    return http.get("/ticket-booking");
  }

  SingleTicketBooking(id) {
    return http.get(`/ticket-booking/${id}`);
  }

  AddTicketBooking(data) {
    return http.post("/ticket-booking", data);
  }

  UpdateTicketBooking(id, data) {
    return http.post(`/ticket-booking/${id}`, data);
  }

  DeleteTicketBooking(id) {
    return http.delete(`/ticket-booking/${id}`);
  }
}

  

export default new DataService();