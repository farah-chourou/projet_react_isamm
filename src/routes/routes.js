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
import EventIcon from "@mui/icons-material/Event";
// ------------------------- ROLES --------------------------------
import { roles, permissions } from "../custom/roles";
import ChangePwd from "../pages/dashboard/changerMdp/ChangerMdp";
import ManageEvents from "../pages/dashboard/ManageEvents/ManageEvents";
import { Details } from "@mui/icons-material";
import DetailsEvent from "../pages/dashboard/ManageEvents/DetailsEvent";
import AcountsPage from "../pages/dashboard/AcountStudents/AcountsPage";
import EventDetail from "../pages/dashboard/MainPage/Event/EventDetail";

const not_logged = {
  routes: [
    { path: "/login", Component: Login },
    { path: "/register", Component: Register },
  ],
  default: "/login",
};

const logged = {
  routes: [{ path: "/dash/*", Component: Dashboard }],
  default: "/dash/main",
};

const dashboard = {
  routes: [
    {
      main: "/dash",
      path: "/main",
      Component: MainPage,
      title: "Page Principal",
      Icon: DashboardIcon,
      role: [roles.ALL],
      perm_name: permissions.all,
      in_nav: true,
    },
    {
      main: "/dash",
      path: "/main/event/:_id",
      Component: EventDetail,
      title: "Page Principal",
      Icon: DashboardIcon,
      role: [roles.ALL],
      perm_name: permissions.all,
      in_nav: false,
    },
    {
      main: "/dash",
      path: "/profile",
      Component: Profile,
      title: "Profil",
      Icon: AccountBoxIcon,
      role: [roles.ALL],
      perm_name: permissions.all,
      in_nav: false,
    },
    {
      main: "/dash",
      path: "/ChangerPwd",
      Component: ChangePwd,
      title: "Changer Mot de passe",
      Icon: AccountBoxIcon,
      role: [roles.ALL],
      perm_name: permissions.all,
      in_nav: false,
    },
    {
      main: "/dash",
      path: "/gest_students",
      Component: ManageStudents,
      title: "Gest Etudiants",
      Icon: SchoolIcon,
      role: [roles.ADMIN, roles.SUPERADMIN, roles.TEACHER, roles.RESPONSIBLE],
      perm_name: permissions.student,
      in_nav: true,
    },
    {
      main: "/dash",
      path: "/GestionDesEnseignants",
      Component: ManageTeachers,
      title: "Gest Enseignants",
      Icon: CoPresentIcon,
      role: [roles.ADMIN, roles.SUPERADMIN],
      perm_name: permissions.teacher,
      in_nav: true,
    },
    {
      main: "/dash",
      path: "/GestionDesEvenement",
      Component: ManageEvents,
      title: "Gest Evénement",
      Icon: EventIcon,
      role: [roles.ADMIN, roles.SUPERADMIN],
      perm_name: permissions.teacher,
      in_nav: true,
    },
    {
      main: "/dash",
      path: "/GestionDesEvenement/details/:_id",
      Component: DetailsEvent,
      title: "Se Déconnecter",
      Icon: MeetingRoomIcon,
      role: [roles.ADMIN, roles.SUPERADMIN],
      perm_name: permissions.teacher,
      in_nav: false,
    },
    {
      main: "/dash",
      path: "/logout",
      Component: Logout,
      title: "Se Déconnecter",
      Icon: MeetingRoomIcon,
      role: [roles.ALL],
      perm_name: permissions.all,
      in_nav: false,
    },
    {
      main: "/dash",
      path: "/ComptePublic",
      Component: AcountsPage,
      title: "Compte Public",
      Icon: MeetingRoomIcon,
      role: [roles.STUDENT],
      perm_name: permissions.all,
      in_nav: true,
    },
  ],
  default: "/dash/main",
};

export { not_logged, logged, dashboard };
