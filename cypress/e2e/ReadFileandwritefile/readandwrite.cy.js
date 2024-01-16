describe("Testing site", () => {
  // beforeEach('Practice makes a man perfect',()=>{
  //   cy.visit('https://imo.ls.codesorbit.net/')
  // })
  it("Write file", () => {
    cy.writeFile("Haneef.txt", "AllhamDulliAllah for everything \n");
    cy.writeFile("Haneef.txt", "Do as you want to do by others to you \n", {
      flag: "a+",
    });
    cy.writeFile("Haneef.txt", "Postive", {
        flag: "a+",
      });
      cy.writeFile("CypressAutomation/cypress/fixtures/test22222.json",{
        data1:"test",
        data2:"test",
        data3:"test",
        data4:"test"
      })

  });


  it('Read file ',()=>{
     cy.readFile('CypressAutomation/cypress/fixtures/test22222.json').then((data)=>{
        cy.log('Data****',data)
       
     })
  })
});
