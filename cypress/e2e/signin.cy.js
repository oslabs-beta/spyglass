describe('SignIn Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/signin') // Replace with the URL of your sign-in page
  })

  it('should display the sign-in form', () => {
    cy.get('.formWrapper').should('be.visible')
  })

  it('should contain input fields for username and password', () => {
    cy.get('#username').should('exist')
    cy.get('#password').should('exist')
  })

  it('should show error message for invalid credentials', () => {
    cy.get('#username').type('invalidUsername')
    cy.get('#password').type('invalidPassword')
    cy.get('button[type="submit"]').click()
    cy.contains('Invalid username or password').should('be.visible')
  })

  it('should navigate to the sign-up page', () => {
    cy.contains("Don't have an account?").click()
    cy.url().should('include', '/signup')
  })

  it('should redirect to the home page after successful sign-in', () => {
    // Assuming valid credentials are entered
    cy.get('#username').type('test')
    cy.get('#password').type('test')
    cy.get('button[type="submit"]').click()
    cy.url().should('equal', 'http://localhost:8080/') // Replace with the URL of the home page
  })
})
