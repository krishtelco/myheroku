import axios from "axios";

export default axios.create({
  baseURL: "https://krishtelcoserver.herokuapp.com/",
  headers: {
    "Content-type": "application/json",
  },
});
