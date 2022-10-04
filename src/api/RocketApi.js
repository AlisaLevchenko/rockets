import axios from "axios";

axios.defaults.baseURL = "https://api.spacexdata.com/v4/dragons/";
// 5e9d058759b1ff74a7ad5f8f

export const getRocketsApi = () => {
  return axios.get("/").then((response) => response.data);
};
