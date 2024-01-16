describe("Find broken links on the page", () => {
    beforeEach(() => {
      cy.loginSession();
      cy.visit("https://imo.ls.codesorbit.net/");
    });
  
    it("verify navigation across the pages", () => {
      cy.get(".user-image").click({ force: true });
      cy.get(":nth-child(1) > .col-md-12 > .w-100").click({ force: true });
      cy.get(".avatar-edit > label").scrollIntoView({ duration: 1000 });
      cy.fixture('images.jpg').as('jpg')
      cy.get('.avatar-edit > label').selectFile('@jpg')
     
    });
  });
  