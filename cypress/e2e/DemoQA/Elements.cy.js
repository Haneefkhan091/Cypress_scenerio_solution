describe("Testing site", () => {
  beforeEach("Practice makes a man perfect", () => {
    cy.visit("https://demoqa.com");
  });
  it("Testing fields", () => {
    cy.get(":nth-child(1) > :nth-child(1) > .card-body > h5").click();
    cy.get(":nth-child(1) > .element-list > .menu-list > #item-0").click();
    cy.wait(1000);
    cy.get("#userName").type("Haneef kHan");
    cy.get("#userForm").click();
    cy.wait(1000);
    cy.get("#userEmail").type("Email@example.com");
    cy.wait(1000);
    cy.get("#currentAddress").type("Pakistan");
    cy.wait(1000);
    cy.get("#permanentAddress").type("Pakistan");
    cy.get("#submit").click();
    cy.get(".border")
      .invoke("text")
      .then((text) => {
        cy.log(text); // Print the inner text in the Cypress console
      });
  });

  it("Testcheckboxandradiobuttons", function () {
    cy.get(".category-cards > :nth-child(1) > :nth-child(1)").click();
    cy.wait(1000); // Wait for 1 second
    cy.get(
      ":nth-child(1) > .element-list > .menu-list > #item-1 > .text"
    ).click();
    cy.wait(1000); // Wait for 1 second
    cy.get(".rct-checkbox > .rct-icon").click();
    cy.wait(1000); // Wait for 1 second
    cy.get("#tree-node-home").check({ force: true });
    cy.wait(1000); // Wait for 1 second
    cy.get(".rct-checkbox > .rct-icon > path").click({ force: true });
    cy.wait(1000); // Wait for 1 second
    cy.get("#tree-node-home").uncheck({ force: true });
    cy.wait(1000); // Wait for 1 second
    cy.get(".rct-option-expand-all > .rct-icon").click({ force: true });
    cy.wait(1000); // Wait for 1 second
    cy.get(".rct-option-expand-all > .rct-icon").click({ force: true });
    cy.wait(1000); // Wait for 1 second
    cy.get(
      "#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(1) > ol > :nth-child(2) > .rct-text > label > .rct-title"
    ).click({ force: true });
    cy.wait(1000); // Wait for 1 second
    cy.get("#tree-node-commands").check({ force: true });
    cy.wait(1000); // Wait for 1 second
    cy.get(
      ":nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > :nth-child(1) > :nth-child(1) > label > .rct-title"
    ).click({ force: true });
    cy.wait(1000); // Wait for 1 second
    cy.get("#tree-node-workspace").check({ force: true });
    cy.wait(1000); // Wait for 1 second
    cy.get(
      ":nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > :nth-child(2) > :nth-child(1) > label > .rct-node-icon > .rct-icon > path"
    ).click({ force: true });
    cy.wait(1000); // Wait for 1 second
    cy.get("#tree-node-office").check({ force: true });
    cy.wait(1000); // Wait for 1 second
    cy.get(
      "#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(3) > :nth-child(1) > label > .rct-title"
    ).click({ force: true });
    cy.wait(1000); // Wait for 1 second
    cy.get("#tree-node-downloads").check({ force: true });
    cy.wait(1000); // Wait for 1 second
    cy.get(".rct-option-collapse-all > .rct-icon > path").click({
      force: true,
    });
    cy.wait(1000); // Wait for 1 second
    // cy.get(":nth-child(1) > :nth-child(1) > .card-body").click(); this is the element of element
    cy.wait(1000);
    cy.get(":nth-child(1) > .element-list > .menu-list > #item-2").click();
    cy.wait(1000);
    cy.get(":nth-child(2) > .custom-control-label").click();
    cy.wait(1000);
    cy.get("#yesRadio").check();
    cy.wait(1000);
    cy.get(".col-md-6 > :nth-child(2) > :nth-child(3)").click();
    cy.wait(1000);
    cy.get(":nth-child(3) > .custom-control-label").click();
    cy.wait(1000);
    cy.get("#impressiveRadio").check();
    cy.wait(1000);
    cy.get(".col-md-6 > :nth-child(2) > :nth-child(2)").click();
    cy.wait(1000);
    cy.get(".col-md-6 > :nth-child(2) > :nth-child(2)").click();
    cy.wait(1000);
    cy.get(":nth-child(2) > .custom-control-label").click();
    cy.wait(1000);
    cy.get("#yesRadio").check();
    cy.wait(1000);
    cy.get(".custom-control.disabled > .custom-control-label").click();
    cy.wait(1000);
    cy.get(":nth-child(3) > .custom-control-label").click();
    cy.wait(1000);
    cy.get("#impressiveRadio").check();
    cy.wait(1000);
    cy.get(".text-success").click();
    cy.wait(1000);
    cy.get(".custom-control.disabled").click();
    cy.wait(1000);
    cy.get(".text-success").should("have.text", "Impressive");
    cy.wait(1000);
    cy.get(":nth-child(2) > .custom-control-label").should("have.text", "Yes");
    cy.wait(1000);
    cy.get(":nth-child(2) > .custom-control-label").click();
    cy.wait(1000);
    cy.get("#yesRadio").check();
    cy.wait(1000);
    cy.get(".text-success").should("have.text", "Yes");
    cy.wait(1000);
    cy.get(".custom-control.disabled > .custom-control-label").should(
      "have.text",
      "No"
    );
  });

  it("web tables", () => {
    cy.get(".category-cards > :nth-child(1)").click();
    cy.get(":nth-child(1) > .element-list > .menu-list > #item-3").click();
    cy.get("#addNewRecordButton").click();
    cy.get("#firstName").clear("K");
    cy.get("#firstName").type("King");
    cy.get("#lastName").clear("K");
    cy.get("#lastName").type("KHan");
    cy.get("#age-wrapper").click();
    cy.get("#userEmail").clear("T");
    cy.get("#userEmail").type("Test@gmail.com");
    cy.get("#age").clear("1");
    cy.get("#age").type("12");
    cy.get("#salary").clear("5");
    cy.get("#salary").type("50000");
    cy.get("#department").clear("S");
    cy.get("#department").type("SQA");
    cy.get("#submit").click();
    cy.get(".col-md-6").each(($row) => {
      cy.wrap($row)
        .invoke("text")
        .then((rowText) => {
          cy.log(rowText);
        });
    });
  });
  it("Buttons", () => {
    cy.get(".category-cards > :nth-child(1) > :nth-child(1)").click();
    cy.get(":nth-child(1) > .element-list > .menu-list > #item-4").click();

    cy.get("#rightClickBtn").should("have.text", "Right Click Me");
    cy.get(".col-md-6").click();
    cy.get("#rightClickBtn").rightclick();
    cy.get("#doubleClickBtn").dblclick();
    // cy.get('#LRZSS').find('.dynamic-button').click({ force: true });
  });
  it("Links", () => {
    cy.get(":nth-child(1) > :nth-child(1) > .card-body").click();
    cy.get(":nth-child(1) > .element-list > .menu-list > #item-5").click();
    cy.get("#simpleLink").should("have.text", "Home");
    cy.get("#dynamicLink").should("be.visible");
    cy.get("#created").should("have.text", "Created");
    cy.get("#no-content").should("have.text", "No Content");
    cy.get("#moved").should("have.text", "Moved");
    cy.get("#bad-request").should("have.text", "Bad Request");
    cy.get("#unauthorized").should("have.text", "Unauthorized");
    cy.get("#forbidden").should("have.text", "Forbidden");
    cy.get("#invalid-url").should("have.text", "Not Found");
    cy.get("#created").click();
    cy.get("#linkResponse").should(
      "have.text",
      "Link has responded with staus 201 and status text Created"
    );
    cy.get("#no-content").click();
    cy.get("#linkResponse").should(
      "have.text",
      "Link has responded with staus 204 and status text No Content"
    );
    cy.get("#moved").click();
    cy.get("#linkResponse").should(
      "have.text",
      "Link has responded with staus 301 and status text Moved Permanently"
    );
    cy.get("#bad-request").click();
    cy.get("#linkResponse").should(
      "have.text",
      "Link has responded with staus 400 and status text Bad Request"
    );
    cy.get("#unauthorized").click();
    cy.get("#linkResponse").should(
      "have.text",
      "Link has responded with staus 401 and status text Unauthorized"
    );
    cy.get("#forbidden").click();
    cy.get("#linkResponse").should(
      "have.text",
      "Link has responded with staus 403 and status text Forbidden"
    );
    cy.get("#invalid-url").click();
    cy.get("#linkResponse").should(
      "have.text",
      "Link has responded with staus 404 and status text Not Found"
    );
    cy.scrollTo("top");
    cy.get("#simpleLink").invoke("removeAttr", "target").click();
    cy.go("back");
  });
  it("images and broken links", () => {
    cy.get(":nth-child(1) > :nth-child(1) > .card-up").click();
    cy.get(
      ":nth-child(1) > .element-list > .menu-list > #item-6 > .text"
    ).click();
    cy.get(".col-md-6 > :nth-child(2) > :nth-child(1)").should("be.visible");
    cy.get(':nth-child(2) > [src="/images/Toolsqa.jpg"]').should("be.visible");
    cy.get(".col-md-6 > :nth-child(2) > :nth-child(5)").should("be.visible");
    cy.get('[src="/images/Toolsqa_1.jpg"]').should("be.visible");
    // cy.get('').click();
    cy.get('[href="http://demoqa.com"]')
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.go("back");
    cy.get('[href="http://the-internet.herokuapp.com/status_codes/500"]')
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("p").should("be.visible").wait(2000);
    cy.go("back");
    // cy.get('[src="/images/Toolsqa_1.jpg"]').each(($img) => {
    //   cy.wrap($img).should('be.visible');

    //   cy.wrap($img)
    //     .then(($img) => {
    //       const imgElement = $img[0];
    //       if (imgElement.naturalWidth === 0) {
    //         cy.log('Image failed to load');
    //         throw new Error('Image failed to load');
    //       }
    //     });
  });
  it("Upload and download ", () => {
    cy.get(":nth-child(1) > :nth-child(1) > .avatar > svg").click();
    cy.get(
      ":nth-child(1) > .element-list > .menu-list > #item-7 > .text"
    ).click();
    cy.get("#downloadButton").click();
    // cy.task('download','https://demoqa.com/upload-download', 'CypressAutomation/downloads/image.jpg');
    // });
    cy.get("#uploadFile").attachFile("download.jpg");
  });
  it("Dynamic Properties", () => {
    cy.get(":nth-child(1) > :nth-child(1) > .card-body > h5").click();
    cy.get(
      ":nth-child(1) > .element-list > .menu-list > #item-8 > .text"
    ).click();
    cy.get("#colorChange").click();
    cy.wait(6000)
    cy.get("#visibleAfter").click();
    cy.get("#visibleAfter").should("be.visible");
    cy.get("#colorChange").should("be.enabled");
  });
});
// it('images and broken links',()=>{

// })
