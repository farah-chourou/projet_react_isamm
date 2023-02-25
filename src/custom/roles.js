const roles = {
  ALL: "ALL",
  STUDENT: "STUDENT",
  ALUMINIE: "ALUMINIE",
  TEACHER: "TEACHER",
  RESPONSIBLE: "RESPONSIBLE",
  ADMIN: "ADMIN",
  SUPERADMIN: "SUPERADMIN",
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

const have_access = (user, access) => {
  return access.indexOf(user.role) > -1;
};

export default { roles, isRole, have_access };
