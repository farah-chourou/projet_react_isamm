import React, { useContext, useState } from "react";
import { UserContext } from "../../store/Contexts";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";

import Avatar from "../../components/Avatar/Avatar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// import SettingsIcon from '@mui/icons-material/Settings';
import MenuItems from "../../components/MenuItems/MenuItems";

import MUIAvatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";

import NotificationsIcon from "@mui/icons-material/Notifications";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Settings from "@mui/icons-material/Settings";
import MailIcon from "@mui/icons-material/Mail";
import Logout from "@mui/icons-material/Logout";
import MenuItem from "@mui/material/MenuItem";
import LockIcon from "@mui/icons-material/Lock";

function NavBar() {
  const { user } = useContext(UserContext);

  const [target, setTarget] = useState(null);

  const handle_open = (event) => {
    setTarget(event.currentTarget);
  };

  const handle_close = () => {
    setTarget(null);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.user_name}>
        <Avatar name={`${user?.firstName} ${user?.lastName}`} />
        <p className={styles.user_full_name}>
          {user?.firstName} {user?.lastName}
        </p>
      </div>

      <div className={styles.notifications}>
        {/* ----------------- NOTIFICATIONS  ----------------- */}
        <Badge badgeContent={2} color="error">
          <CalendarMonthIcon className={styles.icon} />
        </Badge>

        <Badge badgeContent={4} color="error">
          <MailIcon className={styles.icon} />
        </Badge>

        <Badge badgeContent={6} color="error">
          <NotificationsIcon className={styles.icon} />
        </Badge>

        <MoreVertIcon className={styles.icon} onClick={handle_open} />
        {/* ----------------- MORE ICON  ----------------- */}
        <MenuItems target={target} handleClose={handle_close} pos={-7}>
          <NavLink to="/dash/profile" className={styles.link}>
            <MenuItem onClick={handle_close}>
              <MUIAvatar /> Profile
            </MenuItem>
          </NavLink>
          <Divider />
          <MenuItem onClick={handle_close}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <NavLink to="/dash/profile" className={styles.link}>
            <MenuItem onClick={handle_close}>
              <ListItemIcon>
                <LockIcon fontSize="small" />
              </ListItemIcon>
              Change Password
            </MenuItem>
          </NavLink>
          <NavLink to="/dash/logout" className={styles.link}>
            <MenuItem onClick={handle_close}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </NavLink>
        </MenuItems>
      </div>
    </div>
  );
}

export default NavBar;
