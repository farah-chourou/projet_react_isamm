import axios from "../custom/axios";
import { toast } from "react-hot-toast";

const GetUserByToken = (succ, fail) => {
  axios
    .get("/api/user/get_user_by_token")
    .then((res) => {
      const { data, Message } = res.data;
      toast.success(Message);
      console.log(res);
      succ(data);
    })
    .catch((error) => {
      fail(error);
      console.log(error);
    });
};

const Login = (data, succ, fail) => {
  axios
    .post("/api/user/login", { ...data })
    .then((res) => {
      toast.success(res.data.Message);
      const { user, token, refreshToken } = res.data.data;
      localStorage.setItem("isamm_token", token);
      localStorage.setItem("isamm_ref_token", refreshToken);
      succ(user);
    })
    .catch((error) => {
      toast.error(error.response.data.Message);
      console.log(error.response);
      fail(error);
    });
};

// const RegisterAluminie = (data, succ, fail) => {
//   axios
//     .post("/api/user/")
//     .then((res) => {
//       succ(res.data);
//     })
//     .catch((error) => {
//       toast.error("something went wrong...");
//       console.log(error.response);
//     });
// };

export default {
  Login,
  GetUserByToken,
};
