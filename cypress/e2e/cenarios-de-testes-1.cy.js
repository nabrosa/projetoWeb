///<reference types = "cypress" />

import { faker } from '@faker-js/faker'
import data from "../fixtures/dataTest.json"
import { getRandomEmail } from "../support/helpers"
import { acessarLogin } from "../modules/menu"
import { formularioPreCadastro, realizarLogin } from '../modules/login'
import { formularioCadastro } from '../modules/cadastro'

describe('Cenários de testes Cadastro e Login', () => {

    beforeEach(() => {
        cy.visit('https://automationexercise.com')
        acessarLogin()
    })

    it('Registrar usuário', () => {
        formularioPreCadastro(data.nameUser, getRandomEmail())

        formularioCadastro()

        cy.url().should('include', 'account_created')
        cy.contains('b', 'Account Created!')
    })

    it('Login de usuário com email e senha válidos', () => {
        realizarLogin(data.emailExistente, data.password)

        cy.contains('b', 'qa testes 0412871')
    })

    it('Login de usuário com email e senha inválidos', () => {
        realizarLogin(data.emailInexistente, data.password)

        cy.contains('p', 'Your email or password is incorrect!')
    })

    it('Validar logout', () => {
        realizarLogin(data.emailExistente, data.password)
        
        cy.contains('b', 'qa testes 0412871')
        cy.realizarLogout()
        cy.contains('Login to your account')
    })

    it('Registrar usuário com email existente', () => {
        formularioPreCadastro(data.nameUser, data.emailExistente)

        cy.contains('Email Address already exist!')
    })
})