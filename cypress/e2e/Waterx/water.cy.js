describe('Find broken links on the page', () => {
    beforeEach(()=>{
        cy.visit('https://dripx.iottechnologies.io/')
        // cy.checkBrokenLinks();
    })
        it('Finding broken link', () => {
            cy.get('#email').type('loremo6641@aaorsi.com')
            cy.get('#password').type('King@123{Enter}')
            cy.wait(4000)
            cy.reload({force:true})
            cy.checkBrokenLinks();
    })})