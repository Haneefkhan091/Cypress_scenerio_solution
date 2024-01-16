describe("Checking flow", () => {
    beforeEach(() => {
      cy.visit("https://imaratresidences.com/");
    });
  
    it("Testing checking", () => {
      cy.fixture("test.json").then((data) => {
        data.forEach((dataset) => {
          cy.get('.slick-current > .banner-img-container > .banner-img').should('be.visible');
          cy.get(".col-lg-7 > ul > .register-tab > .btn").click({ force: true });
          cy.get("div.form-element-field3 input").type(dataset.name);
          cy.get("div.form-element-field6 input").type(dataset.phoneNumber);
          cy.get("div.form-element-field11 input").type(dataset.email);
          
          cy.get("div.form-element-field17 select").select(dataset.apartmentType);
          cy.get("textarea").clear().type(dataset.message);
          cy.get("#colophon button").click();



          



          cy.get(".final-success")
            .should('be.visible')
            .should('contain', 'Thanks. We will get back to you soon');
          cy.get("div.final-success > span").click();
          cy.get("div.lead-form-popup a").click();
        });
      });
    });
  });
  