import Register from "../pages/auth/register/Register";
import Login from "../pages/auth/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";

import ManageStudents from "../pages/dashboard/ManageStudents/ManageStudents";
import ManageTeachers from "../pages/dashboard/ManageTeachers/ManageTeachers";
import Profile from "../pages/dashboard/Profile/Profile";

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
  routes: [{ path: "/profile", Component: Profile, role: [ALL] }],
  routes: [
    {
      path: "/gest_students",
      Component: ManageStudents,
      role: [ADMIN, SUPERADMIN, TEACHER, RESPONSIBLE],
    },
  ],
  routes: [
    {
      path: "/ManageTeachers",
      Component: ManageStudents,
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
