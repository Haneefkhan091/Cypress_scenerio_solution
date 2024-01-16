describe("Testing site", () => {
  beforeEach("Practice makes a man perfect", () => {
    cy.visit("https://demoqa.com/");
  });
  it.only("Alerts", () => {
    cy.get(":nth-child(3) > :nth-child(1) > .card-body > h5").should(
      "have.text",
      "Alerts, Frame & Windows"
    );
    cy.get(":nth-child(3) > :nth-child(1) > .card-body > h5").should(
      "be.visible"
    );
    cy.get(":nth-child(3) > :nth-child(1) > .avatar > svg").click();
    cy.get(
      ":nth-child(3) > .element-list > .menu-list > #item-0 > .text"
    ).should("have.text", "Browser Windows");
    cy.get(":nth-child(3) > .element-list > .menu-list > #item-1").should(
      "have.text",
      "Alerts"
    );
    cy.get(":nth-child(3) > .element-list > .menu-list > #item-2").should(
      "have.text",
      "Frames"
    );
    cy.get(":nth-child(3) > .element-list > .menu-list > #item-3").should(
      "have.text",
      "Nested Frames"
    );
    cy.get(
      ":nth-child(3) > .element-list > .menu-list > #item-4 > .text"
    ).should("have.text", "Modal Dialogs");
    cy.get(
      ":nth-child(3) > .element-list > .menu-list > #item-0 > .text"
    ).click();
    cy.scrollTo("top");
    // cy.get("#tabButton").invoke("removeAttr", "target").should("not.have.attr", "target").then(($element) => {
    //     cy.wrap($element).click();
    //   });
    cy.get('#windowButton').invoke('removeAttr','target').click()
    cy.title();
    
    
  });
});
