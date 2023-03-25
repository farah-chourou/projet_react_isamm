import axios from "../custom/axios";

const API_URL = "/api/event/";

const GetAllEvents = () => {
  return axios.get(`${API_URL}getAll`);
};

const AddEvent = (info) => {
  return axios.post(`${API_URL}create`, info);
};
const DeleteEvent = (_id) => {
  return axios.delete(`${API_URL}delete/${_id}`);
};
const UpdateEvent = (_id, info) => {
  console.log(info);
  return axios.put(`${API_URL}update/${_id}`, info);
};
export default {
  GetAllEvents,
  AddEvent,
  DeleteEvent,
  UpdateEvent,
};
