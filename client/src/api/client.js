import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
});

export const getProfile = () => api.get("/profile").then((r) => r.data);
export const getProjects = (featuredOnly = false) =>
  api.get(`/projects${featuredOnly ? "?featured=true" : ""}`).then((r) => r.data);
export const sendContactMessage = (payload) =>
  api.post("/contact", payload).then((r) => r.data);

export default api;
