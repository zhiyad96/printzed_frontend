import axios from "axios";

export const api = axios.create({
  baseURL: "https://prinzed-backend-5.onrender.com/",
});