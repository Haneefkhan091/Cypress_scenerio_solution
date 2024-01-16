describe('Table Data Reading', () => {
    beforeEach(() => {
      // Visit the page with the table
      cy.visit('https://cosmocode.io/automation-practice-webtable/')
    })
  
    it('reads data from a table', () => {
      // Get all table cells and iterate over them
      cy.get('.inside-article').each((cell) => {
        // Read and log the cell data
        cy.wrap(cell).invoke('text').then((data) => {
          cy.log(data)
        })
      })
    })
  })
  