import {mount} from '@cypress/react'
import Navbar from '../../front/src/components/Navbar'
import HomePage from '../../front/src/views/Home'

describe('My First Test', () => {
    it('Does not do much!', () => {
        cy.visit('https://localhost:8080')
        mount(<HomePage />)
        cy.get('')
    })
  })