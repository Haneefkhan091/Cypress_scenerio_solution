describe("Checkingflow", () => {
    beforeEach(() => {
      cy.visit("https://imaratresidences.com/");
    });
  
    it("Testing checking", () => {
      cy.get('.slick-current > .banner-img-container > .banner-img').should('be.visible');
      cy.get(".col-lg-7 > ul > .register-tab > .btn").click({ force: true });
  
      const name = generateRandomName();
      const phoneNumber = generateRandomPhoneNumber();
      const comment = generateRandomComment();
  
      cy.get("div.form-element-field3 input").type(name);
      cy.get("div.form-element-field6 input").type(phoneNumber);
      cy.get("div.form-element-field11 input").type("sabatkhel8971@gmail.com");
      cy.get("div.form-element-field17 select").select('2 Bed Apartment');
      cy.get("textarea").clear().type(comment);
      cy.get("#colophon button").click();
      cy.get(".final-success").should('be.visible').should('contain', 'Thanks. We will get back to you soon');
      cy.get("div.final-success > span").click();
      cy.get("div.lead-form-popup a").click();
    });
  });
  
//   function generateRandomName() {
//     const letters = 'abcdefghijklmnopqrstuvwxyz';
//     let randomName = 'Kingkha';
  
//     for (let i = 0; i < 4; i++) {
//       const randomIndex = Math.floor(Math.random() * letters.length);
//       randomName += letters[randomIndex];
//     }
  
//     return randomName;
//   }
function generateRandomName() {
    const vowels = 'aeiou';
    const consonants = 'bcdfghjklmnpqrstvwxyz';
  
    const randomNameLength = Math.floor(Math.random() * 4) + 4; // Random name length between 4 and 7
    let randomName = '';
  
    for (let i = 0; i < randomNameLength; i++) {
      if (i % 2 === 0) {
        const randomConsonantIndex = Math.floor(Math.random() * consonants.length);
        randomName += consonants[randomConsonantIndex];
      } else {
        const randomVowelIndex = Math.floor(Math.random() * vowels.length);
        randomName += vowels[randomVowelIndex];
      }
    }
  
    return randomName.charAt(0).toUpperCase() + randomName.slice(1);
  }
  
  
  function generateRandomPhoneNumber() {
    const randomSuffix = Math.floor(Math.random() * 100000000);
    const phoneNumber = `03112${randomSuffix.toString().padStart(6, '0')}`;
    return phoneNumber;
  }
  
  function generateRandomComment() {
    const comments = [
      "Great service!",
      "I'm impressed with the quality.",
      "Highly recommended!",
      "Excellent experience.",
      "Could be better.",
      "Not satisfied with the product.",
      "Average service.",
      "Needs improvement."
    ];
  
    const randomIndex = Math.floor(Math.random() * comments.length);
    return comments[randomIndex];
  }
  
  