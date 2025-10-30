export function verificarAssinatura(email) {
    cy.get('[id="susbscribe_email"]').type(email)
    cy.get('button[id="subscribe"]').click()
}