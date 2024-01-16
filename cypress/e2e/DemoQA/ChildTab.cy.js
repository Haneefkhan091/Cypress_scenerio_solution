describe("Testing site", () => {
  beforeEach("Practice makes a man perfect", () => {
    cy.visit("https://demoqa.com/browser-windows");
  });
  it("..", () => {
    cy.get("#tabButton")
      .invoke("attr", "target", "_self")
      .click({ force: true });
    cy.origin("https://demoqa.com/sample"),
      () => {
        cy.get("#sampleHeading", { timeout: 2000 }).should("be.visible");
      }; 
  });
});
