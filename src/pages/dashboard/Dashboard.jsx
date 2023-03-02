import React, { useContext, useState } from "react";
import styles from "./styles.module.scss";
import { UserContext } from "../../store/Contexts";
import SideBar from "../../layouts/SideBar/SideBar";

function Dashboard() {
  const { user } = useContext(UserContext);
  const [reduced, setReduces] = useState(false);

  const handle_reduce = () => {
    setReduces(!reduced);
  };

  return (
    <div className={styles.main}>
      <SideBar reduced={reduced} handle_reduce={handle_reduce} />
      <div className={`${styles.show} ${reduced ? styles.reduced : ""}`}>
        <div className={styles.navbar}></div>
      </div>
    </div>
  );
}

export default Dashboard;
