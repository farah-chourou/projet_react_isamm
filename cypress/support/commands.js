/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */

/**********************    LOGIN COMMANDS *******************/
import { format } from "date-fns";

Cypress.Commands.add("connect_as_superadmin", () => {
  cy.clearToken();
  cy.request({
    method: "POST",
    url: Cypress.env("urlBackend") + "/user/login",
    body: {
      userName: "58217520",
      password: "58217520",
    },
  }).then((resp) => {
    console.log(resp.body.data.token);
    window.localStorage.setItem("isamm_token", resp.body.data.token);
    window.localStorage.setItem("isamm_ref_token", resp.body.data.refreshToken);
    return resp.body.data.token;
  });
});

Cypress.Commands.add("connect_as_admin", () => {
  cy.request({
    method: "POST",
    url: Cypress.env("urlBackend") + "/user/login",
    body: {
      userName: "27893540",
      password: "27893540",
    },
  }).then((resp) => {
    console.log(resp);
    window.localStorage.setItem("isamm_token", resp.body.data.token);
    window.localStorage.setItem("isamm_ref_token", resp.body.data.refreshToken);
    return resp.body.data.token;
  });
});
Cypress.Commands.add("connect_as_teacher", () => {
  cy.request({
    method: "POST",
    url: Cypress.env("urlBackend") + "/user/login",
    body: {
      userName: "99800937",
      password: "99800937",
    },
  }).then((resp) => {
    console.log(resp);
    window.localStorage.setItem("isamm_token", resp.body.data.token);
    window.localStorage.setItem("isamm_ref_token", resp.body.data.refreshToken);
    return resp.body.data.token;
  });
});

Cypress.Commands.add("connect_as_student", () => {
  cy.request({
    method: "POST",
    url: Cypress.env("urlBackend") + "/user/login",
    body: {
      userName: "58217529",
      password: "58217529",
    },
  }).then((resp) => {
    console.log(resp);
    window.localStorage.setItem("isamm_token", resp.body.data.token);
    window.localStorage.setItem("isamm_ref_token", resp.body.data.refreshToken);
    return resp.body.data.token;
  });
});

Cypress.Commands.add("connect_as_aluminie", () => {
  cy.request({
    method: "POST",
    url: Cypress.env("urlBackend") + "/user/login",
    body: {
      userName: "58217570",
      password: "58217570",
    },
  }).then((resp) => {
    console.log(resp);
    window.localStorage.setItem("isamm_token", resp.body.data.token);
    window.localStorage.setItem("isamm_ref_token", resp.body.data.refreshToken);
    return resp.body.data.token;
  });
});

Cypress.Commands.add("connect_with_actual_data", (data) => {
  cy.request({
    method: "POST",
    url: Cypress.env("urlBackend") + "/user/login",
    body: {
      userName: data,
      password: data,
    },
  }).then((resp) => {
    console.log(resp);
    window.localStorage.setItem("isamm_token", resp.body.data.token);
    window.localStorage.setItem("isamm_ref_token", resp.body.data.refreshToken);
    return resp.body.data.token;
  });
});

/**********************    OTHER COMMANDS *******************/

Cypress.Commands.add("clearToken", () => {
  window.localStorage.removeItem("isamm_token");
  window.localStorage.removeItem("isamm_ref_token");
});
Cypress.Commands.add("getByData", (selector) => {
  return cy.get(`[data-test=${selector}]`);
});
Cypress.Commands.add("getByName", (selector) => {
  return cy.get(`[name=${selector}]`);
});
Cypress.Commands.add("getUserByToken", () => {
  cy.request({
    method: "GET",
    url: Cypress.env("urlBackend") + "/user/get_user_by_token",
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("isamm_token")}`,
    },
  }).then((response) => {
    console.log(response);
    return response.data;
  });
});

Cypress.Commands.add(
  "typeDate",
  { prevSubject: "element" },
  (subject, date) => {
    const formattedDate = format(new Date(date), "yyyy-MM-dd");
    cy.wrap(subject).type(formattedDate);
  }
);
