describe('Cypress-Testing', () => {
    it('Open User-Onboarding, localhost:3000', () => {
        cy.visit('http://localhost:3000')
        cy.url().should('include', 'localhost')
    })

    it('Get the Name input and type a name in it. Use an assertion to check if the text inputted contains the name you provided (Hint: use the .should assertion)', () => {
        cy.get('input[name="name"]')
            .type('Chris')
            .should('have.value', 'Chris')
    })

    it('Get the Email input and type an email address in it', () => {
        cy.get('input[name="email"]')
            .type('c@c.com')
            .should('have.value', 'c@c.com')
    })

    it('Get the password input and type a password in it', () => {
        cy.get('input[name="password"]')
            .type('Password')
            .should('have.value', 'Password')
    })

    it('Set up a test that will check to see if a user can check the terms of service box', () => {
        cy.get('input[name="read"')
            .click()
    })

    it('Check to see if a user can submit the form data', () => {
        cy.get('button')
            .click()
    })

    it('Check for form validation if an input is left empty', () => {
        cy.get('input[name="name"]')
            .should('not.have.value', "")

        cy.get('input[name="email"]')
            .should('not.have.value', "")

        cy.get('input[name="password"]')
            .should('not.have.value', "")

        cy.get('input[name="read')
            .should('not.have.value', "false")
    })
})