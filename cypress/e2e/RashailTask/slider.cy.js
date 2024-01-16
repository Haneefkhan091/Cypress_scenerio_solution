describe("Task", () => {
  beforeEach("Visit a site", () => {
    cy.visit(
      "https://www.lambdatest.com/selenium-playground/drag-drop-range-sliders-demo"
    );
  });
  it("Test", () => {
    const valueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      'value',
    ).set
    cy.get('#slider1 > div.sp__range > .sp__range').then(function ($slider) {
      valueSetter.call($slider[0], 90)
    }).trigger('change',{force:true}).click({force:true})
    // cy.get('@range').siblings('p').should('have.text', '90') 
})
});
