import React from "react"
import Header from "../../src/components/Header"
import { GlobalProvider } from "../../src/GlobalContext"

describe('<Header />', () => {
  it('Header contains correct text', () => {
    cy.mount(
      <GlobalProvider>
        <Header />
      </GlobalProvider>
    )
    cy.get('[id=title]').should('have.text', 'Josh\'s To-Do App')
    cy.get('[class=addItemButton]').should('have.text', 'Add Item')
  })
})