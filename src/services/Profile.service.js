import axios from "../custom/axios";


  const UpdateGeneral = (data,succ) => {
    console.log(data);
    try{ 
      axios.put(`/api/user/update_general`, { ...data }).then(res=>{
        succ(res)
      })
    } catch(error)  {
      console.log(error);
        }
  };


  // update email
  const UpdateEmail = (data,succ) => {
    try{ 
      axios.put(`/api/user/change_mail`, { email:data }).then((res)=>{
        succ(res);
      })
    } catch(error)  {
      console.log(error);
        }
  };


  export default {
    UpdateGeneral,
    UpdateEmail,
  };
  