describe("GestionAlumini", () => {
    beforeEach(() => {
     cy.connect_as_superadmin();
     cy.visit("/dash/validateAlumini");
     // Replace with the actual URL of the page
    });
  
    it("should display the list of aluminies", () => {
      cy.get("[data-testid='aluminiTableRow']").should("have.length.greaterThan", 0);
    });
  
    it("should validate alumini on button click", () => {
      cy.get("[data-testid='validateButton']").first().click();
      // Implement assertions to check if the validation was successful
    });
  

    // Add more test cases as needed
  
  });
  