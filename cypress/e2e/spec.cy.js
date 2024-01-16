describe('Testing site', () => {
  beforeEach('Practice makes a man perfect',()=>{
    cy.visit('https://imo.ls.codesorbit.net/')
  })
  it('..', () => {
    cy.get('#navbarSupportedContent > .navbar-nav > :nth-child(2) > .nav-link').invoke('removeAttr', 'target').click()
    cy.go('back')
    
  })
})