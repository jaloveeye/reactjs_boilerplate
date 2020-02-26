import React from 'react'
import './App.css'
import { createGlobalStyle } from 'styled-components'
import Main from './Main'


const App = () => (
    <>
        <GlobalStyle/>
        <Main />
    </>)

export default App

const GlobalStyle = createGlobalStyle`
  body {
    background : #E9EAEB;
    margin: 0px;
    padding: 0px;
  }
`