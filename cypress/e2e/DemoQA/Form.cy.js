describe("Testing site", () => {
  beforeEach("Practice makes a man perfect", () => {
    cy.visit("https://demoqa.com/");
  });
  it("Student Registration Form", () => {
    cy.get(":nth-child(2) > :nth-child(1) > .card-body > h5").click();
    cy.get(".col-md-6").should("be.visible");
    cy.get(".col-md-6").should(
      "have.text",
      "Please select an item from left to start practice."
    );
    cy.get(":nth-child(2) > .element-list > .menu-list > #item-0").click();
    cy.get("h5").should("be.visible");
    cy.get("#firstName").click();
    cy.get("#firstName").type("Haneef");
    cy.get("#lastName").clear("K");
    cy.get("#lastName").type("Khan");
    cy.get("#userEmail").type("Email@gmail.com");
    cy.get(
      "#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label"
    ).click();
    cy.get("#gender-radio-1").check();
    cy.get("#userForm").click();
    cy.get("#userNumber").clear("+");
    cy.get("#userNumber").type("+923129137");
    cy.get("#dateOfBirthInput").click();
    cy.get(":nth-child(3) > .react-datepicker__day--012").click();
    cy.get(".subjects-auto-complete__value-container").click();

    cy.get("#subjectsInput").type("S");
    cy.get("#react-select-2-option-4").click();
    cy.get("#hobbiesWrapper > .col-md-9 > :nth-child(1)").click();
    cy.get(
      "#hobbiesWrapper > .col-md-9 > :nth-child(1) > .custom-control-label"
    ).click();
    cy.get("#hobbiesWrapper > .col-md-9 > :nth-child(2)").click();
    cy.get(
      "#hobbiesWrapper > .col-md-9 > :nth-child(2) > .custom-control-label"
    ).click();
    cy.get("#hobbiesWrapper > .col-md-9 > :nth-child(1)").click();
    cy.get("#uploadPicture").attachFile("images.jpg");

    cy.get("#uploadPicture").should("be.enabled");
    cy.get("#currentAddress").click();
    cy.get("#state").click();
    cy.get("#react-select-3-option-2").click();
    cy.get("#userForm").click();

    cy.get("#city > .css-yk16xz-control > .css-1hwfws3").type("Kar");

    cy.get("#react-select-4-option-0").click();
  });
  it("should allow filling in the form and verify input values", () => {
    cy.get(":nth-child(2) > :nth-child(1) > .card-body > h5").click();
    cy.get(".col-md-6").should("be.visible");
    cy.get(":nth-child(2) > .element-list > .menu-list > #item-0").click();
    cy.get("h5").should("be.visible");
    cy.get("#firstName").type("Haneef").should("have.value", "Haneef");
    cy.get("#lastName").clear().type("Khan").should("have.value", "Khan");
    cy.get("#userEmail")
      .type("Email@gmail.com")
      .should("have.value", "Email@gmail.com");
    cy.get("#gender-radio-1").check({force:true}).should("be.checked");
    cy.get("#userNumber")
      .clear()
      .type("+923129137")
      .should("have.value", "+923129137");
    cy.get("#dateOfBirthInput").click();
    cy.get(":nth-child(3) > .react-datepicker__day--012").click();
    cy.get(".subjects-auto-complete__value-container").click();
    cy.get("#subjectsInput").type("S");
    cy.get("#react-select-2-option-4").click();
    cy.get("#hobbiesWrapper > .col-md-9 > :nth-child(1)")
      .click()
      .should("be.visible");
    cy.get("#hobbiesWrapper > .col-md-9 > :nth-child(2)")
      .click()
      .should("be.visible");
    cy.get("#uploadPicture").attachFile("images.jpg");
    cy.get("#uploadPicture").should("be.enabled");
    cy.get("#currentAddress")
      .click()
      .type("Sample Address")
      .should("have.value", "Sample Address");
    cy.get("#state")
      .click()
      .get("#react-select-3-option-2")
      .click()
      .should("be.visible");
    cy.get("#city > .css-yk16xz-control > .css-1hwfws3").type("Kar");
    cy.get("#react-select-4-option-0").click().should("be.visible");
  });


});
