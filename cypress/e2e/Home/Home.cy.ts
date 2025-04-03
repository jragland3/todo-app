import React from "react"

describe('Home page', () => {
  before(() => {
    cy.visit('/')
  })

  it('Add Item button displays text input', () => {
    cy.get('.addItemButton button').click();
    cy.get('.addItemForm').should('be.visible');
    cy.get('.submitButton').should('be.visible');
    cy.get('.cancelButton').should('be.visible');
  })
})
