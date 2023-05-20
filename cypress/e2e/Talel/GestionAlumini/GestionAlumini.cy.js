describe("GestionAlumini", () => {
  beforeEach(() => {
    cy.clearToken();
    cy.connect_as_superadmin();
    cy.fixture("aluminies.json").as("aluminiesData");
    cy.intercept("GET", "/api/student/getall", { 
      body: {
        data: {
          allpublicAluminies: []
        }
      }
    }).as("fetchAluminies");
    cy.visit("/dash/validateAlumini");
  });

  it("should display the list of aluminies", () => {
    cy.wait("@fetchAluminies").then((interception) => {
      const aluminies = interception.response.body.data.allpublicAluminies;
      cy.getByData("aluminiTableRow").should("have.length", aluminies.length);
    });
  });

/*   it("should validate alumini on button click", () => {
    cy.intercept("PUT", "/api/student/validateAlumini").as("validateAlumini");

    cy.get("@aluminiesData").then((aluminiesData) => {
      const aluminiToValidate = aluminiesData[0];

      cy.intercept("GET", "/api/student/getall", {
        statusCode: 200,
        body: {
          data: {
            allpublicAluminies: [aluminiToValidate]
          }
        }
      }).as("fetchAluminies");

      cy.wait("@fetchAluminies");

      //cy.getByData(`validateBtn-${aluminiToValidate._id}`)
    // cy.get(`[data-test=validateBtn-${aluminiToValidate.}]`).first().click();
     //cy.get(`[data-test="validateBtn-${aluminiToValidate._id}]`).click();
     cy.getByData(`validateBtn`).first().click();
      cy.wait("@validateAlumini").then((interception) => {
        const response = interception.response.body;
        expect(response.Message).to.equal("Validation successful");
        // Perform any necessary assertions or operations with the response data
      });
    });
  }); */

  // Add more test cases as needed
});
