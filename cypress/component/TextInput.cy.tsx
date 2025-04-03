import React from 'react'
import TextInput from '../../src/components/TextInput'
import { GlobalProvider } from '../../src/GlobalContext'

describe('TextInput', () => {
  it('TextInput contains the correct text', () => {
    cy.mount(
      <GlobalProvider>
        <TextInput />
      </GlobalProvider>
    )
  })
})