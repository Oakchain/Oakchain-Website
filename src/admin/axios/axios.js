import axios from "axios";
const BASE_URL = "https://api.oakchain.io/api";

export default axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  Accept: "application/json",
});
