describe("Checkingflow ", () => {
    beforeEach(() => {
      cy.visit("https://imaratresidences.com/");
    });
    it("Testing checking", () => {
      cy.get('.slick-current > .banner-img-container > .banner-img').should('be.visible')
      cy.get(".col-lg-7 > ul > .register-tab > .btn").click({ force: true });
     
      cy.get("div.form-element-field3 input").type("Haneef");
    ;
      cy.get("div.form-element-field6 input").type("031121217383");
     
      cy.get("div.form-element-field11 input").type("sahel8971@gmail.com");
      cy.get("div.form-element-field17 select").select('2 Bed Apartment');
      cy.get("textarea").clear()
      cy.get("textarea").type("Cross checking");
      cy.get("#colophon button").click();
      cy.get(".final-success").should('be.visible').should('contain','Thanks. We will get back to you soon')
      cy.get("div.final-success > span").click();
      cy.get("div.lead-form-popup a").click();
    });
  });
  