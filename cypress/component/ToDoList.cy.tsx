import React from 'react'
import ToDoList from '../../src/components/ToDoList'
import { GlobalProvider } from '../../src/GlobalContext'


describe('ToDoList', () => {
  it('ToDoList display', () => {
    cy.mount(
      <GlobalProvider>
        <ToDoList />
      </GlobalProvider>
    );
    cy.get('h2').should('have.text', 'Todo List')
  })
})