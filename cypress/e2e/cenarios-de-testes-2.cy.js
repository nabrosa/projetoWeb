///<reference types = "cypress" />

import data from "../fixtures/dataTest.json"
import { acessarContato, formularioContato, uploadArquivo } from "../modules/contato"
import { acessarLogin, acessarProdutos, excluirConta } from "../modules/menu"
import { detalharProduto, pesquisarProduto } from "../modules/produtos"
import { rolarPáginaAteEncontrarElemento, getRandomEmail } from "../support/helpers"
import { verificarAssinatura } from "../modules/principal"
import { formularioPreCadastro } from "../modules/login"
import { formularioCadastro } from "../modules/cadastro"
import { adicionarProdutoCarrinho } from "../modules/produtos"
import { acessarCarrinho, dadosCartaoCredito, descricaoPedido, irParaPagamento } from "../modules/carrinho"

describe('Demais cenários de testes', () => {
    beforeEach(() => {
        cy.visit('https://automationexercise.com')
    })

    it('Validar form Contact us', () => {
        acessarContato()
        cy.contains('Get In Touch')

        formularioContato(data.nameUser, data.emailExistente, 'Teste', 'Validação de teste')

        cy.get('.status').should('have.text', 'Success! Your details have been submitted successfully.')
    })

    it('Verificar todos os produtos e a página de detalhes do produto', () => {
        const produto = "Blue Top"
        acessarProdutos()
        cy.contains('All Products')
        cy.get('[class="single-products"]').should('be.visible')

        detalharProduto(produto)  
        
        cy.contains(produto).should('be.visible');
        cy.contains('h2', produto).closest('.product-information').should('contain.text', 'Category')
            .and('contain.text', 'Rs.')
            .and('contain.text', 'Availability')
            .and('contain.text', 'Condition')
            .and('contain.text', 'Brand');
    })

    it('Pesquisar Produto', () =>{
        const produto = "Sleeveless Dress"
        acessarProdutos()
        cy.contains('All Products')

        pesquisarProduto(produto)

        cy.contains('Searched Products')
        cy.contains(produto)
    })

    it('Verificar assinatura na página inicial', () =>{
        rolarPáginaAteEncontrarElemento('Subscription')
        verificarAssinatura('qa-tester-0412871@test.com')

        cy.get('.alert-success.alert').should('be.visible').and('contain.text', 'You have been successfully subscribed!')
    })

    it('Fazer Pedido: Cadastre-se antes de Finalizar a Compra', () =>{
        acessarLogin()
        
        formularioPreCadastro(data.nameUser, getRandomEmail())
        formularioCadastro()
        cy.contains('b', 'Account Created!')
        cy.get('[data-qa="continue-button"]').click()

        cy.contains(' Logged in as ')
        cy.contains(data.nameUser)

        adicionarProdutoCarrinho('Blue Top')
        cy.contains('Your product has been added to cart.')
        acessarCarrinho()
        cy.contains('Shopping Cart').should('be.visible')

        irParaPagamento()
        cy.contains('Address Details')
        cy.contains('Review Your Order')
        descricaoPedido('Comentário teste')

        dadosCartaoCredito()
        cy.contains('Order Placed!')
        cy.contains('Congratulations! Your order has been confirmed!')

        excluirConta()   
    
        cy.contains('Account Deleted!')
        cy.get('[data-qa="continue-button"]').click()
    })
})