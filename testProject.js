describe('My First Test', function () {

  beforeEach(function () {
    cy.log('Login before eche Test')
    cy.visit('https://app.clickup.com/login')
    cy.login('noorelazab5@gmail.com', 'noor1371312')
    cy.wait(10000)
  })

  it('Add New project', () => {
    cy.log('Adding New Project')
    cy.get('.sidebar-section__name .nav-category__plus').click({ force: true })
    cy.get('.cu-form__input').type('project{enter}').should('have.value', 'project')

  })

  it('Add exist Project', () => {
    cy.log('Adding Exist Project')
    cy.get('.sidebar-section__name .nav-category__plus').click({ force: true })
    cy.get('.cu-form__input').type('project{enter}').should('have.value', 'project')
    cy.get('.cu-form__error .cu-form__error-text').should('contain', 'Project name taken')

  })


  it('Add New list', () => {
    cy.log('Adding New List To Some Project')
    cy.get('.nav-category_open .nav-category__plus').click()
    cy.get('.ng-star-inserted .nav-section-maker__input').type('noor{enter}').should('have.value', 'noor')


  })
  it('Add exist list', () => {
    cy.log('Adding Exist List To Some Project')
    cy.get('.nav-category_open .nav-category__plus').click()
    cy.get('.ng-star-inserted .nav-section-maker__input').type('noor{enter}').should('have.value', 'noor')
    cy.get('.popover-content .cu-error-popover').should('contain', 'Whoops! A list already exists with this name.')

  })

  
})


