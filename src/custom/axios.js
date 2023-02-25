import axios from "axios";

const { REACT_APP_API_BACK } = process.env;

const customAxios = axios.create({
  baseURL: REACT_APP_API_BACK,
});

customAxios.defaults.headers.common["Authorization"] = `Bearer ${
  localStorage.getItem("isamm_token") || ""
}`;

export default customAxios;
