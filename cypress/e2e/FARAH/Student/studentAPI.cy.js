/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
describe("Student API", () => {
  let token;
  let savedstudent;
  let updatedstudent;
  let API_URL = Cypress.env("urlBackend") + "/student/";
  let studentData;
  let studentDataUpdated;

  beforeEach(() => {
    cy.connect_as_superadmin().then((resp) => (token = `Bearer ${resp}`));
  });

  it("Should return list of students", () => {
    cy.request({
      method: "GET",
      url: `${API_URL}getAll`,
      headers: {
        Authorization: token,
      },
    }).then((response) => {
      const student = response.body.data;
      expect(student).to.exist;
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("data");
      expect(response.body.data)
        .to.have.property("allpublicStrudents")
        .that.is.an("array");
      expect(response.body.data)
        .to.have.property("allpublicAluminies")
        .that.is.an("array");
      // expect(response.body.data.allpublicAluminies.length).to.be.greaterThan(0);
      expect(response.body.data.allpublicStrudents.length).to.be.greaterThan(0);
      response.body.data.allpublicStrudents.forEach((student) => {
        expect(student).to.have.property("firstName");
        expect(student).to.have.property("phoneNumber");
      });
    });
  });
  it.skip("should upload file using FormData", () => {
    cy.fixture("student.xlsx", "base64").then((content) => {
      console.log(content);
      const blob = Cypress.Blob.base64StringToBlob(
        content,
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      );
      console.log(blob); // add this line

      const f = new FormData();
      f.append("file", "John");
      for (const [key, value] of f.entries()) {
        console.log(`${key}: ${value}`);
      }
      cy.request({
        method: "POST",
        url: `${API_URL}/create_multiple_with_excel`,
        body: f,
        headers: {
          Authorization: token,
        },
        processData: false,
        contentType: false,
      }).then((resp) => {
        expect(resp.status).to.eq(200);
        expect(resp.body.data)
          .to.have.property("succeeded_saved_students")
          .that.is.an("array");
        expect(resp.body.data)
          .to.have.property("failed_saved_students")
          .that.is.an("array");
      });
    });
  });

  it("should update student", () => {
    cy.request({
      method: "PUT",
      url: `${API_URL}update/${savedstudent._id}`,
      body: studentDataUpdated,
      headers: {
        Authorization: token,
      },
    }).then((resp) => {
      expect(resp.status).to.eq(200);

      expect(resp.body.data._id).to.exist;
      updatedstudent = resp.body.data;
    });
  });
  it("check if task is updated by id", () => {
    cy.request({
      method: "GET",
      url: `${API_URL}getOne/${savedstudent._id}`,
      headers: {
        Authorization: token,
      },
    }).then((resp) => {
      expect(resp.status).to.eq(200);
      expect(resp.body.data.studentName).to.eq(updatedstudent.studentName);
      expect(resp.body.data.studentDateDebut).to.eq(
        updatedstudent.studentDateDebut
      );
      expect(resp.body.data.studentType).to.eq(updatedstudent.studentType);
      expect(resp.body.data.description).to.eq(updatedstudent.description);
      expect(resp.body.data.description).to.eq(updatedstudent.description);
      expect(resp.body.data.location).to.eq(updatedstudent.location);
    });
  });

  it("Should Delete student Added", () => {
    cy.request({
      method: "DELETE",
      url: `${API_URL}delete/${savedstudent._id}`,
      headers: {
        Authorization: token,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Check If student Delected Succesfully ", () => {
    cy.request({
      method: "GET",
      url: `${API_URL}getOne/${savedstudent._id}`,
      headers: {
        Authorization: token,
      },
      failOnStatusCode: false, // to prstudent Cypress from failing the test due to a 404 status code
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });
});
