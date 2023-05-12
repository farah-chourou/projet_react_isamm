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
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import DetailsEvent from "../pages/dashboard/ManageEvents/DetailsEvent";
import AcountsPage from "../pages/dashboard/AcountStudents/AcountsPage";
import EventDetail from "../pages/dashboard/MainPage/Event/EventDetail";
import CVStudent from "../pages/dashboard/ManageStudents/CVStudent";
import ManageAdmins from "../pages/dashboard/ManageAdmins/ManageAdmins";

const not_logged = {
  routes: [
    { path: "/login", route: "login", Component: Login },
    { path: "/register", route: "register", Component: Register },
  ],
  default: "/login",
};

const logged = {
  routes: [{ path: "/dash/*", route: "dash", Component: Dashboard }],
  default: "/dash/main",
};

const dashboard = {
  routes: [
    {
      main: "/dash",
      route: "main",
      path: "/main",
      Component: MainPage,
      title: "Page Principal",
      Icon: DashboardIcon,
      role: [roles.ALL],
      perm_name: permissions.all,
      in_nav: true,
    },
    {
      // back to this part ....
      main: "/dash",
      route: "event",
      path: "/event/:_id",
      Component: EventDetail,
      title: "Page Principal",
      Icon: DashboardIcon,
      role: [roles.ALL],
      perm_name: permissions.event,
      in_nav: false,
    },
    {
      main: "/dash",
      route: "profile",
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
      route: "ChangerPwd",
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
      route: "gest_students",
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
      route: "gest_students",
      path: "/gest_students/cv/:_id",
      Component: CVStudent,
      Icon: SchoolIcon,
      role: [roles.TEACHER, roles.RESPONSIBLE, roles.STUDENT, roles.ALUMINIE],
      perm_name: permissions.all,
      in_nav: false,
    },
    {
      main: "/dash",
      route: "GestionDesEnseignants",
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
      route: "GestionDesEvenement",
      path: "/GestionDesEvenement",
      Component: ManageEvents,
      title: "Gest Evénement",
      Icon: EventIcon,
      role: [roles.ADMIN, roles.SUPERADMIN],
      perm_name: permissions.event,
      in_nav: true,
    },
    {
      main: "/dash",
      route: "GestionDesAdmin",
      path: "/GestionDesAdmin",
      Component: ManageAdmins,
      title: "Gest Adminstrateur",
      Icon: SupervisorAccountIcon,
      role: [roles.SUPERADMIN],
      perm_name: permissions.admin,
      in_nav: true,
    },
    {
      main: "/dash",
      route: "GestionDesEvenement",
      path: "/GestionDesEvenement/details/:_id",
      Component: DetailsEvent,
      title: "Se Déconnecter",
      Icon: MeetingRoomIcon,
      role: [roles.ADMIN, roles.SUPERADMIN],
      perm_name: permissions.event,
      in_nav: false,
    },
    {
      main: "/dash",
      route: "logout",
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
      route: "ComptePublic",
      path: "/ComptePublic",
      Component: AcountsPage,
      title: "Compte Public",
      Icon: MeetingRoomIcon,
      role: [roles.STUDENT, roles.ALUMINIE],
      perm_name: permissions.all,
      in_nav: true,
    },
  ],
  default: "/dash/main",
};

export { not_logged, logged, dashboard };
