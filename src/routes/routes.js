// ------------------------- COMPONENTS --------------------------------
import Register from "../pages/auth/register/Register";
import Login from "../pages/auth/login/Login";
import Logout from "../pages/auth/logout/Logout";
import Dashboard from "../pages/dashboard/Dashboard";
import MainPage from "../pages/dashboard/MainPage/MainPage";

import ManageStudents from "../pages/dashboard/ManageStudents/ManageStudents";
import ManageTeachers from "../pages/dashboard/ManageTeachers/ManageTeachers";
import Profile from "../pages/dashboard/Profile/Profile";

// ------------------------- ICONS --------------------------------
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import SchoolIcon from "@mui/icons-material/School";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import DashboardIcon from "@mui/icons-material/Dashboard";
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
      path: "/main",
      Component: MainPage,
      title: "Dashboard",
      Icon: DashboardIcon,
      role: [roles.ALL],
      perm_name: permissions.all,
    },
    {
      main: "/dash",
      path: "/profile",
      Component: Profile,
      title: "My Profile",
      Icon: AccountBoxIcon,
      role: [roles.ALL],
      perm_name: permissions.all,
    },
    {
      main: "/dash",
      path: "/gest_students",
      Component: ManageStudents,
      title: "Manage Students",
      Icon: SchoolIcon,
      role: [roles.ADMIN, roles.SUPERADMIN, roles.TEACHER, roles.RESPONSIBLE],
      // role: [roles.ALL],
      perm_name: permissions.student,
    },
    {
      main: "/dash",
      path: "/ManageTeachers",
      Component: ManageTeachers,
      title: "Manage Teachers",
      Icon: CoPresentIcon,
      role: [roles.ADMIN, roles.SUPERADMIN],
      // role: [roles.ALL],
      perm_name: permissions.teacher,
    },
    {
      main: "/dash",
      path: "/logout",
      Component: Logout,
      title: "Logout",
      Icon: MeetingRoomIcon,
      role: [roles.ALL],
      perm_name: permissions.all,
    },
  ],
  default: "/dash/main",
};

export { not_logged, logged, dashboard };
