const roles = {
  ALL: "ALL",
  STUDENT: "STUDENT",
  ALUMINIE: "ALUMINIE",
  TEACHER: "TEACHER",
  RESPONSIBLE: "RESPONSIBLE",
  ADMIN: "ADMIN",
  SUPERADMIN: "SUPERADMIN",
};

const permissions = {
  all: "all",
  student: "student",
  teacher: "teacher",
  user: "user",
  event: "event",
  participation: "participation",
  project: "project",
  technologie: "technologie",
  cv: "cv",
  saison: "saison",
};

const isAll = () => {
  return true;
};

const isSTUDENT = (user) => {
  return user?.role === roles.STUDENT;
};
const isALUMINIE = (user) => {
  return user?.role === roles.ALUMINIE;
};
const isTEACHER = (user) => {
  return user?.role === roles.TEACHER;
};
const isRESPONSIBLE = (user) => {
  return user?.role === roles.RESPONSIBLE;
};
const isADMIN = (user) => {
  return user?.role === roles.ADMIN;
};
const isSUPERADMIN = (user) => {
  // here we have to check their access
  return user?.role === roles.SUPERADMIN;
};

const isRole = {
  isAll,
  isSTUDENT,
  isALUMINIE,
  isTEACHER,
  isRESPONSIBLE,
  isADMIN,
  isSUPERADMIN,
};

const have_access = (user, route_roles, route_perm) => {
  // user role exist in the array of roles
  if (route_roles.indexOf(user?.role) > -1) {
    // user role is ADMIN
    if (user?.role === roles.ADMIN) {
      // so we have to check permission
      return user?.role?.permessions?.indexOf(route_perm) > -1;
    }
  }
  return route_roles.indexOf(user?.role) > -1;
};

export { roles, permissions, isRole, have_access };
