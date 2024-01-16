describe("Testing", () => {
  beforeEach("", () => {
    cy.visit("https://demoqa.com/widgets");
  });
  it("", () => {
    cy.get(
      ":nth-child(4) > .element-list > .menu-list > #item-0 > .text"
    ).click();
    cy.wait(1000);
    cy.get("#section1Heading").click();
    cy.get("#section1Heading").should("have.text", "What is Lorem Ipsum?");
    cy.get("#section1Heading").click();
    cy.wait(1000);
    cy.get("#section1Content > p").should(
      "have.text",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    );
    cy.wait(1000);
    cy.get("#section2Heading").click();
    cy.get("#section2Heading").should("have.text", "Where does it come from?");
    cy.wait(1000);
    cy.get("#section2Content > :nth-child(1)").should(
      "have.text",
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
    );
    cy.wait(1000);
    cy.get("#section2Content > :nth-child(2)").should(
      "have.text",
      'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'
    );
    cy.get("#section3Heading").click();
    cy.get("#section3Heading").should("have.text", "Why do we use it?");
    cy.wait(1000);
    cy.get("#section3Content > p").should(
      "have.text",
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    );
    cy.wait(1000);
  });
  it("Autocomplete", () => {
    cy.get(
      ":nth-child(4) > .element-list > .menu-list > #item-1 > .text"
    ).click();
    cy.wait(1000); // Wait for 1 second

    cy.get(
      "#autoCompleteMultipleContainer > .auto-complete__control > .auto-complete__value-container"
    ).click();
    cy.wait(1000); // Wait for 1 second

    cy.get("#autoCompleteMultipleInput").clear();
    cy.get("#autoCompleteMultipleInput").type("a");
    cy.wait(1000); // Wait for 1 second

    cy.get("#react-select-2-option-0").click();
    cy.wait(1000); // Wait for 1 second

    cy.get("#autoCompleteMultipleInput").clear();
    cy.get("#autoCompleteMultipleInput").type("a");
    cy.wait(1000); // Wait for 1 second

    cy.get("#react-select-2-option-1").click();
    cy.wait(1000); // Wait for 1 second

    cy.get("#autoCompleteMultipleInput").clear();
    cy.get("#autoCompleteMultipleInput").type("a");
    cy.wait(1000); // Wait for 1 second

    cy.get("#react-select-2-option-2").click();
    cy.wait(1000); // Wait for 1 second

    cy.get(".css-xb97g8 > .css-19bqh2r > path").click();
    cy.wait(1000); // Wait for 1 second

    cy.get(
      "#autoCompleteSingleContainer > .auto-complete__control > .auto-complete__value-container"
    ).click();
    cy.wait(1000); // Wait for 1 second

    cy.get("#autoCompleteSingleInput").clear();
    cy.get("#autoCompleteSingleInput").type("v");
    cy.wait(1000); // Wait for 1 second

    cy.get("#react-select-3-option-0").click();
    cy.wait(1000); // Wait for 1 second

    cy.get(
      "#autoCompleteSingleContainer > .auto-complete__control > .auto-complete__value-container"
    ).click();
    cy.wait(1000); // Wait for 1 second

    cy.get(".col-md-6").click();
    cy.wait(1000); // Wait for 1 second

    cy.get("#autoCompleteSingle > :nth-child(1)").should(
      "have.text",
      "Type single color name"
    );
    cy.get("#autoCompleteMultiple > :nth-child(1)").should(
      "have.text",
      "Type multiple color names"
    );
  });
  it.only('test',()=>{
   
  })
});
