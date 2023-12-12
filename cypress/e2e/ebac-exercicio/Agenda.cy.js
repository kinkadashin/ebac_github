/// <reference types="cypress" />

describe('Testes para agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve incluir um novo usuário', () => {
        cy.get('input[type="text"]').type('Fulano')
        cy.get('input[type="email"]').type('fulano@example.com')
        cy.get('input[type="tel"]').type('62999999999')
        cy.get('.adicionar').click()
        
        cy.screenshot('usuario-adicionado')
    })

    it('Deve alterar os estados de um usuário', () => {
        cy.get('.edit').first().click()
        cy.get('input[type="text"]').type('Cicrano')
        cy.get('input[type="email"]').type('cicrano@example.com')
        cy.get('input[type="tel"]').type('21999999999')
        cy.get('.alterar').click()

        cy.screenshot('usuario-alterado')
    })

    it('Deve excluir um usuário', () => {
        cy.get('.delete').first().click()

        cy.screenshot('usuario-apagado')
    })
})