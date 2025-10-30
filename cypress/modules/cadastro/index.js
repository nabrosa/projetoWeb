import data from "../../fixtures/dataTest.json"
import { faker } from '@faker-js/faker'


export function formularioCadastro() {
    cy.get('input[type=radio]').check('Mrs')
    cy.get('[data-qa="password"]').type(data.password, {log: false })
    cy.get('[data-qa="days"]').select('4')
    cy.get('[data-qa="months"]').select('December')
    cy.get('[data-qa="years"]').select('1987')
    cy.get('[id="newsletter"]').check()

    cy.get('[data-qa="first_name"]').type(data.firstName)
    cy.get('[data-qa="last_name"]').type(data.lastName)
    cy.get('[data-qa="company"]').type(`Projeto ${faker.company.name()}`)
    cy.get('[data-qa="address"]').type(faker.location.streetAddress())
    cy.get('[data-qa="country"]').select('United States')
    cy.get('[data-qa="state"]').type(faker.location.state())
    cy.get('[data-qa="city"]').type(faker.location.city())
    cy.get('[data-qa="zipcode"]').type(faker.location.zipCode())
    cy.get('[data-qa="mobile_number"]').type('987654 8522')

    cy.get('[data-qa="create-account"]').click()
}