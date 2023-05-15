import React, { useContext, useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { UserContext } from "../../store/Contexts";
import SideBar from "../../layouts/SideBar/SideBar";
import {
  Route,
  Routes,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";

import { dashboard } from "../../routes/routes";
import NavBar from "../../layouts/NavBar/NavBar";

function Dashboard() {
  const { user } = useContext(UserContext);
  const [reduced, setReduces] = useState(false);
  const navig = useNavigate();
  const location = useLocation();

  const handle_reduce = () => {
    setReduces(!reduced);
  };

  useEffect(() => {
    if (user) {
      let allowed_routes = dashboard.routes.map((elem) => {
        return elem.route;
      });
      console.log(allowed_routes);
      let current_toute = location.pathname.split("/")[2];
      console.log(current_toute);
      if (allowed_routes.indexOf(current_toute) === -1) {
        navig(dashboard.default);
      }
    }
  }, [user]);

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
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
