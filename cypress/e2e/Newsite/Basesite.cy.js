describe('Find broken links on the page', () => {
beforeEach(()=>{
    cy.visit('https://imo.ls.codesorbit.net/')
    cy.checkBrokenLinks();
})
    it('verify navigation across the pages', () => {
       
})
})