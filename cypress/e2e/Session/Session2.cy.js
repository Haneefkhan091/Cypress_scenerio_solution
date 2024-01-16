describe('Login Tests', () => {
    beforeEach(() => {
      // Start a new session or restore the existing session
      cy.loginSession();

    });
  
    it('should access the protected resource', () => {
        cy.clearAllCookies()
       cy.visit("https://imo.ls.codesorbit.net/");
       cy.get('#filter-btn > img').click({force:true})
    });
  });
  