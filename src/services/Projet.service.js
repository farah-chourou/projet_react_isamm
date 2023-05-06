import axios from "../custom/axios";
import { GetOnly } from "../functions/Arrays.functions";
import { MakeQuery } from "../functions/MakeQuery";

const AddProject = (data) => {
  return axios.post(`/api/project/create`, { ...data });
};

const AddPFA = (data) => {
  return axios.post(`/api/project/create_pfa`, { ...data });
};

const GetMyPfes = () => {
  return axios.get(`/api/project/get_pfe_student`);
};

const GetMyPfa = () => {
  return axios.get(`/api/project/get_pfa_teacher`);
};
const GetPFAResp = () => {
  return axios.get(`/api/project/get_pfa_resp`);
};
const GetEverything = (query = {}) => {
  return axios.get(`/api/project/get_all`, MakeQuery(query));
};

/*const GetMyPfas = () => {
  return axios.get(`/api/project/get_pfe_student`);
};*/

const GetMyStages = () => {
  return axios.get(`/api/project/get_stage_student`);
};

const GetSocietes = () => {
  return axios.get(`/api/project/get_societes`);
};

const UpdateProject = (data) => {
  const allowedData = GetOnly(
    [
      "_id",
      "title",
      "description",
      "encadrant_id",
      "technologies",
      "societe",
      "type",
      "promotion",
      "startDate",
      "endDate",
    ],
    data
  );
  return axios.post(`/api/project/update`, { ...allowedData });
};

const UpdatePFA = (data) => {
  const allowedData = GetOnly(
    [
      "_id",
      "title",
      "description",
      "student_id",
      "technologies",
      "promotion",
      "startDate",
      "endDate",
    ],
    data
  );
  return axios.post(`/api/project/update_pfa`, { ...allowedData });
};

const EnseigChoisirPfe = (_id) => {
  return axios.post(`/api/project/approve_by_enseig/${_id}`);
};

const ResponsableApprvPFA = (_id) => {
  return axios.post(`/api/project/approve_by_responsable/${_id}`);
};

const AdminValidateProject = (_id, data) => {
  return axios.post(`/api/project/approve_by_admin/${_id}`, { ...data });
};

const DeleteProject = (_id) => {
  return axios.delete(`/api/project/delete/${_id}`);
};
const Deletepfa = (_id) => {
  return axios.delete(`/api/project/delete_pfa/${_id}`);
};

// const GetAllTeachers = () => {
//   return axios.get(`${API_URL}get_all`);
// };

// const AddTeacherResponsible = (info) => {
//   return axios.post(`${API_URL}createTeacherResponsible`, info);
// };

// const UpdateTeacher = (_id, info) => {
//   console.log(info);
//   return axios.put(`${API_URL}update_info/${_id}`, info);
// };

export default {
  AddProject,
  AddPFA,
  GetMyPfes,
  GetMyPfa,
  GetSocietes,
  GetMyStages,
  GetEverything,
  UpdateProject,
  UpdatePFA,
  GetPFAResp,
  DeleteProject,
  EnseigChoisirPfe,
  ResponsableApprvPFA,
  AdminValidateProject,
  Deletepfa,
};
