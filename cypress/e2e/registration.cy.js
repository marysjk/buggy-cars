import { generateRandomUsername, generateRandomFirstName, generateRandomLastName, generateRandomPassword } from '../support/commands';

describe('Register users', () => {
    it('Register valid user', () => {
        cy.visit("https://buggy.justtestit.org/")
        cy.get('.btn-success-outline').click()
        cy.get('#username').type(generateRandomUsername())
        cy.get('#firstName').type(generateRandomFirstName())
        cy.get('#lastName').type(generateRandomLastName())
        const randomPassword = generateRandomPassword(10)
        //cy.log(randomPassword);
        cy.get('#password').type(randomPassword)
        cy.get('#confirmPassword').type(randomPassword)
        cy.get('.btn-default').click()
        cy.get('.result').contains('Registration is successful')

    })

    it('Existing User', () => {
        cy.visit("https://buggy.justtestit.org/")
        cy.get('.btn-success-outline').click()
        cy.get('#username').type("tauser")
        cy.get('#firstName').type("TestA")
        cy.get('#lastName').type("AnalystA")
        const randomPassword = generateRandomPassword(10)
        //cy.log(randomPassword);
        cy.get('#password').type(randomPassword)
        cy.get('#confirmPassword').type(randomPassword)
        cy.get('.btn-default').click()
        cy.get('.result').contains('UsernameExistsException: User already exists')

    })

    it('Weak password', () => {
        cy.visit("https://buggy.justtestit.org/")
        cy.get('.btn-success-outline').click()
        cy.get('#username').type(generateRandomUsername())
        cy.get('#firstName').type(generateRandomFirstName())
        cy.get('#lastName').type(generateRandomLastName())
        const randomPassword = generateRandomPassword(4)
        //cy.log(randomPassword);
        cy.get('#password').type(randomPassword)
        cy.get('#confirmPassword').type(randomPassword)
        cy.get('.btn-default').click()
        cy.get('.result').contains('InvalidParameter: 1 validation error(s) found. - minimum field size of 6, SignUpInput.Password.')

    })
})