describe("Add a property automation", () => {
  beforeEach(() => {
    cy.loginSession();
    cy.visit("https://imo.ls.codesorbit.net/");
  });

  it("Step 1 upto step 3", () => {
    cy.visit("https://imo.ls.codesorbit.net/add-property");
    cy.get("li:nth-of-type(7) > a").click();
    cy.get("section.banner-sm a").click();
    cy.get("section.banner-sm > div > div").click();
  
    cy.get("#category").select("Flat");
    cy.get(
      "div.col-md-7 > div > div:nth-of-type(2) div.row > div:nth-of-type(2)"
    ).click();
    
  });
});
