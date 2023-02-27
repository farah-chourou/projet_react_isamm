import React, { useState, useContext } from "react";
import st from "./styles.module.scss";
import AuthServ from "../../../services/Auth.service";
import { UserContext } from "../../../store/Contexts";
import fig1 from "../../../assets/images/figures/login.svg";

function Login() {
  const [form, setForm] = useState({ userName: "", password: "" });
  const { setUser } = useContext(UserContext);

  const handle_change = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handle_submit = () => {
    const succ = (user) => {
      setUser(user);
    };

    const fail = (error) => {};

    AuthServ.Login(form, succ, fail);
  };

  return (
    <div className={st.main}>
      <div className={st.figure}>
        <img src={fig1} />
      </div>
      <div className={st.form}>
        <input
          type="text"
          placeholder="login"
          onChange={handle_change}
          name="userName"
          value={form.userName}
        />
        <input
          type="text"
          placeholder="password"
          onChange={handle_change}
          name="password"
          value={form.password}
        />
        <button onClick={handle_submit}>Login</button>
      </div>
    </div>
  );
}

export default Login;
