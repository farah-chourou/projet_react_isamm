// ------------------------- COMPONENTS --------------------------------
import Register from "../pages/auth/register/Register";
import Login from "../pages/auth/login/Login";
import Logout from "../pages/auth/logout/Logout";
import Dashboard from "../pages/dashboard/Dashboard";

import ManageStudents from "../pages/dashboard/ManageStudents/ManageStudents";
import ManageTeachers from "../pages/dashboard/ManageTeachers/ManageTeachers";
import Profile from "../pages/dashboard/Profile/Profile";

// ------------------------- ICONS --------------------------------
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import SchoolIcon from "@mui/icons-material/School";
import CoPresentIcon from "@mui/icons-material/CoPresent";
// ------------------------- ROLES --------------------------------
import { roles, permissions } from "../custom/roles";

const not_logged = {
  routes: [
    { path: "/login", Component: Login },
    { path: "/register", Component: Register },
  ],
  default: "/login",
};

const logged = {
  routes: [{ path: "/dash", Component: Dashboard }],
  default: "/dash",
};

const dashboard = {
  routes: [
    {
      main: "/dash",
      path: "/profile",
      Component: Profile,
      icon: <AccountBoxIcon />,
      role: [roles.ALL],
      perm_name: permissions.all,
    },
    {
      main: "/dash",
      path: "/logout",
      Component: Logout,
      icon: <MeetingRoomIcon />,
      role: [roles.ALL],
      perm_name: permissions.all,
    },
    {
      main: "/dash",
      path: "/gest_students",
      Component: ManageStudents,
      icon: <SchoolIcon />,
      role: [roles.ADMIN, roles.SUPERADMIN, roles.TEACHER, roles.RESPONSIBLE],
      perm_name: permissions.student,
    },
    {
      main: "/dash",
      path: "/ManageTeachers",
      Component: ManageTeachers,
      icon: <CoPresentIcon />,
      role: [roles.ADMIN, roles.SUPERADMIN],
      perm_name: permissions.teacher,
    },
  ],
  default: "/profile",
};

export { not_logged, logged, dashboard };
