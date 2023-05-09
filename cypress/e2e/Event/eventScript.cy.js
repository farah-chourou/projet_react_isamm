/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
describe("Event page", () => {
  let eventData;
  beforeEach(() => {
    cy.clearToken();
    cy.connect_as_superadmin();
    cy.fixture("event.json").then((data) => {
      eventData = data.event;
    });
  });
  it("Add Event Successfully", () => {
    cy.visit("/dash/GestionDesEvenement");
    cy.getByData("addEventButton").click();
    cy.getByData("modal").should("be.visible");
    cy.getByName("eventName").type(eventData.eventName);
    cy.get("#demo-simple-select").click();
    cy.get('.MuiList-root > [tabindex="0"]').click();
    cy.getByName("eventDateDebut").type(eventData.eventDateDebut);
    cy.getByName("eventDateFin").type(eventData.eventDateFin);
    cy.getByName("location").type(eventData.location);
    cy.getByName("duration").type(eventData.duration);
    cy.getByName("organizedBy").type(eventData.organizedBy);
    cy.getByData("dd").type(eventData.description);
    cy.getByData("buttonAddEvent").click();
    cy.contains("Evénement Ajouter avec Succès.");
    cy.getByData("modal").should("not.exist");
    //  cy.contains("td", "Test Event").should("exist");
  });

  it("Add Event Already Exist", () => {
    cy.visit("/dash/GestionDesEvenement");
    cy.getByData("addEventButton").click();
    cy.getByData("modal").should("be.visible");
    cy.getByName("eventName").type(eventData.eventName);
    cy.get("#demo-simple-select").click();
    cy.get('.MuiList-root > [tabindex="0"]').click();
    cy.getByName("eventDateDebut").type(eventData.eventDateDebut);
    cy.getByName("eventDateFin").type(eventData.eventDateFin);
    cy.getByName("location").type(eventData.location);
    cy.getByName("duration").type(eventData.duration);
    cy.getByName("organizedBy").type(eventData.organizedBy);
    cy.getByData("dd").type(eventData.description);
    cy.getByData("buttonAddEvent").click();
    cy.contains("Evénement déjà existe");
    // cy.getByData("modal").should("be.exist");
  });
});
