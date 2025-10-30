export function getRandomNumber() {
    return new Date().getTime() 
}

export function getRandomEmail() {
    return `qa-tester-${getRandomNumber()}@test.com`
}

export function rolarPáginaAteEncontrarElemento(elemento) {
    cy.contains(elemento).scrollIntoView();
}