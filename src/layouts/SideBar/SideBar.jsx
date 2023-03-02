import React, { useEffect, useState, useContext } from "react";
import styles from "./styles.module.scss";
import { NavLink } from "react-router-dom";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import { dashboard } from "../../routes/routes";
import { have_access } from "../../custom/roles";
import { UserContext } from "../../store/Contexts";

function SideBar({ reduced, handle_reduce }) {
  const { user } = useContext(UserContext);
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    console.log(user);
    let allowed_routes = dashboard.routes.filter((route) => {
      return have_access(user, route.role, route.perm_name);
    });
    setRoutes(allowed_routes);
  }, [user, dashboard]);

  return (
    <div className={`${styles.main} ${reduced ? styles.reduced : ""}`}>
      <div className={styles.reduce_btn}>
        <span> ISAMM MANAGE</span>
        <ArrowBackIosNewIcon className={styles.icon} onClick={handle_reduce} />
      </div>

      <div className={styles.links}>
        <h3>Main Content</h3>

        {routes.map(({ Icon, main, path, title }, key) => {
          return (
            <NavLink to={`${main}${path}`} key={key} className={styles.link}>
              <Icon className={styles.icon} /> <span>{title}</span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default SideBar;
