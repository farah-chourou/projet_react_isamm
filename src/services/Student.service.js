import axios from "../custom/axios";
import { toast } from "react-hot-toast";

const GetAllPublicStudents = (succ, fail) => {
  axios
    .get("/api/student/getallpublic")
    .then((res) => {
      console.log(res);
      const { allpublicStrudents, allpublicAluminies } = res.data.data;
      succ([...allpublicStrudents, ...allpublicAluminies]);
    })
    .catch((error) => {
      fail(error);
      toast.error(error.response.data.Message);
    });
};

export default {
  GetAllPublicStudents,
};
