
describe('Login page test', function () {
  beforeEach(function () {
    //Open login page before any test
    cy.visit('login')
  })

  it('Login with empty username and password', function () {
    cy.log('Login without entering userName and password')
    cy.submit()  
    cy.get('#email-error-text').should('contain', 'This field is required!')
  })

  it(' Login with email does not exist in the system ', function () {
    cy.log('Login with email does not exist in the system')
    cy.tryToLogin('noorelazab4@gmail.com', '123456')
    cy.get('#email-error-text').should('contain', 'This email does not exist in our system!')
  })

  it('Login with invalid username ', function () {
    cy.log('Login with invalid username')
    cy.tryToLogin('noor', '123456')
    cy.get('#email-error-text').should('contain', 'This email is invalid!')
  })

  it('Login with correct username and wrong password', function () {
    cy.log('Login With Correct UserName And Wrong Password')
    cy.tryToLogin('noorelazab5@gmail.com', '123456')
    cy.get('.cu-form__error-text').should('contain', 'Incorrect password for this email.')
  })

  it('Login with entering  username only', function () {
    cy.log('Login with enter nothing into password field')
    cy.get('#email-input').type('noorelazab5@gmail.com').should('have.value', 'noorelazab5@gmail.com')
    cy.submit()  
    cy.get('#password-error-text').should('contain', 'This field is required!')
  })

  it('Login with entering password only', function () {
    cy.log('Login with enter nothing into username field and enter any password')
    cy.get('#password-input').type('123456').should('have.value', '123456')
    cy.submit()  
    cy.get('#email-error-text').should('contain', 'This field is required!')
  })

  it('Login with password less than 6 characters', function () {
    cy.log('Login with entering password less than 6 Characters')
    cy.tryToLogin('noorelazab5@gmail.com', '123')
    cy.get('#password-error-text.cu-form__error-text').should('contain', 'Password must be 6 characters or longer!')
  })

  it('Login with correct username and password', function () {
    cy.log('Login with correct user name and correct password')
    cy.login()
    })
  

  it('Check Forget Password', function () {
    cy.log('Click in forgot password link ')
    cy.get('#login-forgot').click()
    cy.get('#forgot-password-input').type('noorelazab5@gmail.com').should('have.value', 'noorelazab5@gmail.com')
    cy.get('.cu-btn').click()
    cy.title().should('eq', 'Login')
  })

})