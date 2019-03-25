describe('My First Test', function () {
    beforeEach(function () {
        cy.visit('https://app.clickup.com/login')
        cy.login('noorelazab5@gmail.com', 'noor1371312')
        cy.wait(10000);

    })

    it('check Elements in main page', () => {
        cy.title().should('eq', 'testList | noor alazab (Box)')
        cy.get('.ng-star-inserted .create-task-button__text').should('contain', 'New Task')
        cy.get('.cu-nav-pills .cu-nav-pills__link').should('contain', 'Time')
        cy.get('.cu-nav-pills .cu-nav-pills__link').should('contain', 'List')
        cy.get('.cu-nav-pills .cu-nav-pills__link').should('contain', 'Board')
        cy.get('.top-section .top-section__item-title').should('contain', 'Spaces')
        cy.get('.top-section__item .top-section__selected-name').should('contain', "noor alazab's Space")
        cy.get('.sidebar-section__header').trigger('mouseover')
        cy.get('.cu-fill').should('be.visible')
        cy.contains('#sidebar-scroll .nav-filter__input')
      
    })
})