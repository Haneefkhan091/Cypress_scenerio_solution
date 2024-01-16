describe("My test", () => {
  // beforeEach('visit the Url',()=>{
  //   cy.visit('')
  // })
  it("Should wait for the element to appear", () => {
    //     cy.recurse(() => {
    //       cy.get('').should('be.visible');
    //     }, {
    //       attempts: 10,
    //       timeout: 10000,
    //     });
  });
  it("test 2 ", () => {
    const numbercheck = () => {
      cy.task("random number").then("", (n) => {
        console.log("****"+n);
        if (n === 7) {
          cy.log("**NICE**");
          return;
        }
        numbercheck();
      });
      numbercheck();
    };
  });
  it.only("Example Test", () => {
    const recursiveFunction = (number, count) => {
      if (count <= 0) {
        return number;
      } else {
        const newNumber = number * 2; // Example operation, you can modify this as per your needs
        cy.log(newNumber); // Log the intermediate result
        return recursiveFunction(newNumber, count - 1);
      }
    };

    cy.recurse(2, 5).then((result) => {
      // Log the final result
      for (let i = 0; i < result; i++) {
        const element = result[i];
        cy.log(element);
        cy.log(result);
      }
    });
  });
});
