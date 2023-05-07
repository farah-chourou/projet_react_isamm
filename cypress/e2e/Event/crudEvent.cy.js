/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
describe("CRUD EVENT", () => {
  let token;
  let savedEvent;
  let updatedEvent;
  let API_URL = Cypress.env("urlBackend") + "/event/";

  it("Should Connect", () => {
    const data = {
      eventDateDebut: "2022-05-09T23:00:00.000Z",
      eventDateFin: null,
      eventType: "Journée d'integration",
      description: "ffffffff",
      eventName: "formation node js",
      location: "technopole manouba",
    };

    cy.request({
      method: "POST",
      url: `${API_URL}create`,
      body: data,
      headers: {
        Authorization: token,
      },
      failOnStatusCode: false,
    }).then((resp) => {
      console.log(resp);
      expect(resp.status).to.eq(401);
    });
  });

  describe("CRUD EVENT WITH CONNEXION", () => {
    beforeEach(() => {
      cy.connect_as_superadmin().then((resp) => (token = `Bearer ${resp}`));
      API_URL = Cypress.env("urlBackend") + "/event/";
    });
    it("Should Add Event", () => {
      const data = {
        eventDateDebut: "2022-05-09T23:00:00.000Z",
        eventDateFin: null,
        eventType: "Journée d'integration",
        description: "ffffffff",
        eventName: "formation node js",
        location: "technopole manouba",
      };

      cy.request({
        method: "POST",
        url: `${API_URL}create`,
        body: data,
        headers: {
          Authorization: token,
        },
      }).then((resp) => {
        console.log(resp.body.data);

        expect(resp.status).to.eq(200);
        expect(resp.body.data.eventName).to.eq(data.eventName);
        expect(resp.body.data.eventDateDebut).to.eq(data.eventDateDebut);
        expect(resp.body.data.eventType).to.eq(data.eventType);
        expect(resp.body.data.description).to.eq(data.description);
        expect(resp.body.data.description).to.eq(data.description);
        expect(resp.body.data.location).to.eq(data.location);
        expect(resp.body.data._id).to.exist;
        savedEvent = resp.body.data;
        console.log(savedEvent);
      });
    });

    it("Check If Event Added Exist ", () => {
      cy.request({
        method: "GET",
        url: `${API_URL}getAll`,
        headers: {
          Authorization: token,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        const events = response.body.data;
        const event = events.find((t) => t._id === savedEvent._id);
        expect(event).to.exist;
      });
    });

    it("should update event", () => {
      const data = {
        eventDateDebut: "2022-05-09T23:00:00.000Z",
        eventDateFin: null,
        eventType: "Journée d'integration",
        description: "ffffffff",
        eventName: "formation react js",
        location: "technopole manouba",
      };
      cy.request({
        method: "PUT",
        url: `${API_URL}update/${savedEvent._id}`,
        body: data,
        headers: {
          Authorization: token,
        },
      }).then((resp) => {
        expect(resp.status).to.eq(200);

        expect(resp.body.data._id).to.exist;
        updatedEvent = resp.body.data;
      });
    });
    it("check if task is updated by id", () => {
      cy.request({
        method: "GET",
        url: `${API_URL}getOne/${savedEvent._id}`,
        headers: {
          Authorization: token,
        },
      }).then((resp) => {
        expect(resp.status).to.eq(200);
        expect(resp.body.data.eventName).to.eq(updatedEvent.eventName);
        expect(resp.body.data.eventDateDebut).to.eq(
          updatedEvent.eventDateDebut
        );
        expect(resp.body.data.eventType).to.eq(updatedEvent.eventType);
        expect(resp.body.data.description).to.eq(updatedEvent.description);
        expect(resp.body.data.description).to.eq(updatedEvent.description);
        expect(resp.body.data.location).to.eq(updatedEvent.location);
      });
    });

    it("Should Delete Event Added", () => {
      cy.request({
        method: "DELETE",
        url: `${API_URL}delete/${savedEvent._id}`,
        headers: {
          Authorization: token,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
    });

    it("Check If Event Delected Succesfully ", () => {
      cy.request({
        method: "GET",
        url: `${API_URL}getOne/${savedEvent._id}`,
        headers: {
          Authorization: token,
        },
        failOnStatusCode: false, // to prevent Cypress from failing the test due to a 404 status code
      }).then((response) => {
        expect(response.status).to.eq(404);
      });
    });
  });
});
