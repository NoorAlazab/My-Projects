describe('Add new project test suite', function () {

  beforeEach(function () {
    //login to the project page before start testing
    cy.log('Login before eche Test')
    cy.visit('login')
    cy.login()
  
  })
  it('Add new project', () => {
    cy.log('Adding new project')
    cy.get('.sidebar-section__name .nav-category__plus').click({ force: true })
    cy.get('.cu-form__input').type('project{enter}').should('have.value', 'project')

  })

  it('Add exist project', () => {
    cy.log('Adding exist project')
    cy.get('.sidebar-section__name .nav-category__plus').click({ force: true })
    cy.get('.cu-form__input').type('project{enter}').should('have.value', 'project')
    cy.get('.cu-form__error .cu-form__error-text').should('contain', 'Project name taken')

  })


  it('Add new list', () => {
    cy.log('Adding new list to some project')
    cy.get('.nav-category_open .nav-category__plus').click()
    cy.get('.ng-star-inserted .nav-section-maker__input').type('noor{enter}').should('have.value', 'noor')


  })
  it('Add exist list', () => {
    cy.log('Adding exist list to some project')
    cy.get('.nav-category_open .nav-category__plus').click()
    cy.get('.ng-star-inserted .nav-section-maker__input').type('noor{enter}').should('have.value', 'noor')
    cy.get('.popover-content .cu-error-popover').should('contain', 'Whoops! A list already exists with this name.')

  })

  
})


