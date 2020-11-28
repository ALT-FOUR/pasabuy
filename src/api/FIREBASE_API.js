import axios from "axios";

export const FIREBASE_API = axios.create({
  baseURL: "http://localhost:5000/pasabuy-85838/us-central1/api",
});
