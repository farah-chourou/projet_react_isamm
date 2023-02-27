import React, { useContext } from "react";
import styles from "./styles.module.scss";
import { UserContext } from "../../store/Contexts";

function Dashboard() {
  const { user } = useContext(UserContext);
  return (
    <div>
      {user.firstName} {user.lastName}
    </div>
  );
}

export default Dashboard;
