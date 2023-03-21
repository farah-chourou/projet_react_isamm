import React, { useContext, useState } from "react";
import styles from "./styles.module.scss";
import { UserContext } from "../../store/Contexts";
import SideBar from "../../layouts/SideBar/SideBar";
import { Route, Routes, Navigate } from "react-router-dom";

import { dashboard } from "../../routes/routes";
import NavBar from "../../layouts/NavBar/NavBar";

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
        <NavBar />
        <div className={styles.content}>
          <div className={styles.container}>
            <Routes>
              {dashboard.routes.map((route, key) => {
                const { path, Component } = route;
                return (
                  <Route key={key} path={`${path}`} element={<Component />} />
                );
              })}
              {/* <Route path="/*" element={<Navigate to={dashboard.default} />} /> */}
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
