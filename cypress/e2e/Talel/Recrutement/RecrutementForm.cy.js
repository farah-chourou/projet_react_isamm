describe("RecruitmentScreen", () => {
    beforeEach(() => {
        cy.clearToken();
        cy.connect_as_superadmin();
      cy.visit("/dash/RecrutementForm");
    });
 
    it("should create a recruitment request", () => {
        cy.intercept("POST", "/api/recruitment", { // Replace with your API endpoint
          statusCode: 200,
          body: {
            // Mock response body
            message: "Recruitment request created successfully",
          },
        }).as("createRecruitmentRequest");
      
      
        cy.get("select[data-cy='type-select']").select("Expert");
        cy.get("select[data-cy='type-select']").should("have.value", "Expert");


        cy.get('[data-cy="skills-input"]').type("Skill 1{enter}"); // Add a skill
        cy.get('[data-cy="description-input"]').type("This is a recruitment request description"); // Add a description
        cy.get('[data-cy="submit-button"]').click(); // Submit the form
      
        cy.wait("@createRecruitmentRequest").then(() => {
          // Assert on the success message or any other expected behavior
          cy.contains("Recruitment request created successfully");
        });
      });
      
  });
  