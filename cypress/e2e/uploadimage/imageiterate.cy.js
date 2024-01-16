describe("Find broken links on the page", () => {
  const imagePaths = [
    "images.jpg",
    "pexels.jpg",
    "pexels.jpg",
    "download.jpg",
    // Add more image paths as needed
  ];

  beforeEach(() => {
    cy.loginSession();
    cy.visit("https://imo.ls.codesorbit.net/");
  });

  it("verify navigation across the pages", () => {
    cy.get(".user-image").click({ force: true });
    cy.get(":nth-child(1) > .col-md-12 > .w-100").click({ force: true });
    cy.get(".avatar-edit > label").scrollIntoView({ duration: 1000 });
    cy.step("++++++ Image uploading Iterations ++++++");
    // Iterate through the image paths
    imagePaths.forEach((imagePath) => {
      // Upload the image using the input field
      cy.get('input[type="file"]').attachFile(imagePath);
      cy.wait(3000);
    });
  });
});
