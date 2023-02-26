import React from "react";
import styles from "./styles.scss";

function Dashboard({ user }) {
  return (
    <div>
      {user.firstName} {user.lastName}
    </div>
  );
}

export default Dashboard;
