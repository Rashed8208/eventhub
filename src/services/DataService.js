import http from "../http-common";

class DataService {
  login(data) {
    return http.post("/login", data);
  }
  
  EventList() {
    return http.get("/events");
  }

  SingleEvent(id) {
    return http.get(`/events/${id}`);
  }

  AddEvent(data) {
    return http.post("/events", data);
  }

  
  UpdateEvent(id, data) {
    return http.put(`/events/${id}`, data);
  }

  
  DeleteEvent(id) {
    return http.delete(`/events/${id}`);
  }
}
  

export default new DataService();