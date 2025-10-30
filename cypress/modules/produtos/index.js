export function detalharProduto(produto) {
    cy.contains('p', produto).closest('.product-image-wrapper').contains('a', 'View Product').click();
}

export function pesquisarProduto(produto) {
    cy.get('[id="search_product"]').type(produto)
    cy.get('[id="submit_search"]').click()
}

export function adicionarProdutoCarrinho(produto) {
    cy.contains('p', produto).closest('.product-image-wrapper').contains('a', 'Add to cart').click();
}