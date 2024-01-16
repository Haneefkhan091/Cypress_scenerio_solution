describe("Testing site", () => {
  beforeEach("Practice makes a man perfect", () => {
    cy.visit("https://demoqa.com/alertsWindows");
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
  });
  it("", () => {
    cy.get(":nth-child(3) > .element-list > .menu-list > #item-0").click();
    cy.get(":nth-child(3) > .element-list > .menu-list > #item-1").click();
    cy.get("#alertButton").click();
    cy.on("window:alert", (text) => {
      expect(text).to.equal("You clicked a button"); // Assert the text of the alert
      return true; // Confirm the alert
    });
    cy.on("window:confirm", (text2) => {
      expect(text2).to.contain(" This alert appeared after 5 seconds"); // Assert the text of the alert
      // Confirm the alert
    });
    cy.get("#timerAlertButton").click();
    cy.wait(5000);
  });
  // cy.get("#confirmButton").click();
  // cy.wait(1000)

  // cy.get("#promtButton").click();

  it("cancel an alert", () => {
    cy.get(":nth-child(3) > .element-list > .menu-list > #item-0").click();
    cy.get(":nth-child(3) > .element-list > .menu-list > #item-1").click();
    cy.on("window:confirm", () => false);
    cy.get("#confirmButton").click();
  });

  it("iframe", () => {
    cy.get(":nth-child(3) > .element-list > .menu-list > #item-2").click({
      force: true,
    });
    cy.frameLoaded("#frame1");
    cy.iframe("#tabButton").click({ force: true });
  });

  it("Nested iframe", () => {
    cy.get(":nth-child(3) > .element-list > .menu-list > #item-3").click();
    cy.frameLoaded("#frame1");
    cy.frameLoaded("#frame1").iframeCustom().find("html").iframeCustom();
  });

  it("Nested iframe", () => {
    cy.get(":nth-child(3) > .element-list > .menu-list > #item-4").click();
    cy.get("#showSmallModal").click();
    cy.get("#closeSmallModal").click();
    cy.get("#showLargeModal").click();

    cy.get("p").should(
      "have.text",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    );

    cy.get("#closeLargeModal").click();
  });

  
});
