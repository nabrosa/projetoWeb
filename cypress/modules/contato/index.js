export function acessarContato() {
    cy.get('a[href="/contact_us"]').click()
}

export function formularioContato(name, email, subject, message) {
    cy.get('[data-qa="name"]').type(name)
    cy.get('[data-qa="email"]').type(email)
    cy.get('[data-qa="subject"').type(subject)
    cy.get('[data-qa="message"]').type(message)

    cy.fixture('imgTest.jpg').as('imgUpload')
    cy.get('[name="upload_file"]').selectFile('@imgUpload')

    cy.get('[data-qa="submit-button"]').click()
}
