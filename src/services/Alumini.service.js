import axios from "../custom/axios";
import { toast } from "react-hot-toast";
import { GetOnly } from "../functions/Arrays.functions";

const GetAllAlumini = (succ, fail) => {
  axios
    .get("/api/student/getall")
    .then((res) => {
      console.log(res);
      const { allpublicAluminies, allpublicStrudents } = res.data.data;
      succ(allpublicAluminies);
      //succ([...res.data.data, ...res2.data.data]);
    })
    .catch((error) => {
      fail(error);
      toast.error(error.response.data.Message);
    });
};

const validateAluminiInscription = (idAlumini, validated, succ, fail) => {
  axios
    .put(`/api/student/validateAlumini`, 
    { idAlumini : idAlumini,
       validated:validated })
    .then((res) => {
      console.log(res);
      toast.success(res.data.Message);

      // Perform any necessary operations with the response data
      succ(res.data); // Pass the response data to the success callback
    })
    .catch((error) => {
      fail(error);
      toast.error(error.response.data.Message);
    });
};



export default {
    GetAllAlumini,
    validateAluminiInscription
};
