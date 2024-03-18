import axios from "axios";

const BASE_URL = "https://api.oakchain.io/api";

// //console.log(baseURL);
const Axios = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 60000,
});

export default Axios;
