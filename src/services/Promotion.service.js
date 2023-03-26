import axios from "../custom/axios";
import { toast } from "react-hot-toast";

const GetAllPromotions = (succ, fail) => {
  axios
    .get("/api/saison/getall")
    .then((res) => {
      succ(res.data.data);
    })
    .catch((error) => {
      fail(error);
      toast.error(error.response.data.Message);
    });
};

export default {
  GetAllPromotions,
};
