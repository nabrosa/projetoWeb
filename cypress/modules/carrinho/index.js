export function acessarCarrinho(){
    cy.get('.modal-content').contains('View Cart').click()
}

export function irParaPagamento(){
    cy.contains('Proceed To Checkout').click()
}

export function descricaoPedido(comentario){
    cy.get('.form-control').type(comentario)
    cy.contains('Place Order').click()
}

export function dadosCartaoCredito(){
    cy.get('[data-qa="name-on-card"]').type('Fulana Silva')
    cy.get('[data-qa="card-number"]').type('1234 4321 9876 6789')
    cy.get('[data-qa="cvc"]').type('123')
    cy.get('[data-qa="expiry-month"]').type('02')
    cy.get('[data-qa="expiry-year"]').type('2028')
    cy.get('[data-qa="pay-button"]').click()
}