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
import Roles from "../custom/roles";

const { ADMIN, ALL, ALUMINIE, RESPONSIBLE, STUDENT, SUPERADMIN, TEACHER } =
  Roles.roles;

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
      path: "/profile",
      Component: Profile,
      icon: <AccountBoxIcon />,
      role: [ALL],
    },
    {
      path: "/logout",
      Component: Logout,
      icon: <MeetingRoomIcon />,
      role: [ALL],
    },
    {
      path: "/gest_students",
      Component: ManageStudents,
      icon: <SchoolIcon />,
      role: [ADMIN, SUPERADMIN, TEACHER, RESPONSIBLE],
    },
    {
      path: "/ManageTeachers",
      Component: ManageTeachers,
      icon: <CoPresentIcon />,
      role: [ADMIN, SUPERADMIN],
    },
  ],
  default: "/profile",
};

export default {
  not_logged,
  logged,
  dashboard,
};
