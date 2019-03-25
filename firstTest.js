
describe('My First Test', function () {
  beforeEach(function () {
    cy.visit('https://app.clickup.com/login')
  })

  it('Empty UserName And Password', function () {
    cy.log('Login Without Entering UserName And Password')
    cy.get('#login-submit').click()
    cy.get('#email-error-text').should('contain', 'This field is required!')
  })

  it(' email does not exist in the system ', function () {
    cy.log('Login with email does not exist in the system')
    cy.login('noorelazab4@gmail.com', '123456')
    cy.get('#email-error-text').should('contain', 'This email does not exist in our system!')
  })

  it('Invalid UserName ', function () {
    cy.log('Login With Invalid UserName')
    cy.login('noor', '123456')
    cy.get('#email-error-text').should('contain', 'This email is invalid!')
  })

  it('Correct UserName And Wrong Password', function () {
    cy.log('Login With Correct UserName And Wrong Password')
    cy.login('noorelazab5@gmail.com', '123456')
    cy.get('.cu-form__error-text').should('contain', 'Incorrect password for this email.')
  })
 
  it('Enter UserName Only', function () {
    cy.log('Login With Entering Nth Into Password Field' )
    cy.get('#email-input').type('noorelazab5@gmail.com{enter}').should('have.value','noorelazab5@gmail.com')
    //cy.get('#login-submit').click()
    cy.get('#password-error-text').should('contain', 'Password required!')
  })

  it('Enter Password Only', function () {
    cy.log('Login With Entering Nth Into UserName Field And Enter Any Password' )
    cy.get('#password-input').type('123456').should('have.value','123456')
    cy.get('#login-submit').click()
    cy.get('#email-error-text').should('contain', 'This field is required!')
  })

  it('Password less than 6 characters', function () {
    cy.log('Login with Entering Password Less Than 6 Characters')
    cy.login('noorelazab5@gmail.com', '123')
   
    cy.get('#password-error-text.cu-form__error-text').should('contain', 'Password must be 6 characters or longer!')
  })

  it('Correct Username And Password', function () {
    cy.log('Login with Correct User Name And Correct Password')
    cy.login('noorelazab5@gmail.com', 'noor1371312')
    cy.wait(5000);
    // cy.location('pathname', { timeout: 60000 })
    //   .should('include', '/newPage');
    cy.get('.create-task-button__new-task').click()
  })

  it('Check Forget Password', function () {
    cy.log('Click in Forgot Password Link ')
    cy.get('#login-forgot').click()
    cy.get('#forgot-password-input').type('noorelazab5@gmail.com')
    cy.get('.cu-btn').click()
    cy.title().should('eq', 'Login')
  })

})

