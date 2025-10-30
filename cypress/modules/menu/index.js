export function acessarLogin() {
    cy.get('a[href="/login"]').click()
}

export function acessarProdutos() {
    cy.get('a[href="/products"]').click()
}

export function excluirConta(){
    cy.get('a[href="/delete_account"]').click()
}