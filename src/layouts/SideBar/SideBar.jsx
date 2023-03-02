import React from "react";
import styles from "./styles.module.scss";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import DashboardIcon from "@mui/icons-material/Dashboard";

function SideBar({ reduced, handle_reduce }) {
  return (
    <div className={`${styles.main} ${reduced ? styles.reduced : ""}`}>
      <div className={styles.reduce_btn}>
        <span> ISAMM MANAGE</span>
        <ArrowBackIosNewIcon className={styles.icon} onClick={handle_reduce} />
      </div>

      <div className={styles.links}>
        <h3>Main Content</h3>
      </div>

      <div className={styles.link}>
        <DashboardIcon className={styles.icon} /> <span>Dashboard</span>
      </div>
      <div className={styles.link}>
        <DashboardIcon className={styles.icon} /> <span>Dashboard</span>
      </div>
      <div className={styles.link}>
        <DashboardIcon className={styles.icon} /> <span>Dashboard</span>
      </div>
      <div className={styles.link}>
        <DashboardIcon className={styles.icon} /> <span>Dashboard</span>
      </div>
      <div className={styles.link}>
        <DashboardIcon className={styles.icon} /> <span>Dashboard</span>
      </div>
    </div>
  );
}

export default SideBar;
