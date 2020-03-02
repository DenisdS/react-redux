import React from 'react';

import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

import Menu from '../components/interfaces/menu';
import Routes from '../routes/routes';
import Header from '../components/interfaces/header'

const GlobalStyle = createGlobalStyle`
  ${normalize}
  *{
    font-family: Arial Helvetica, sans-serif;
  }
  a{
    text-decoration: none; color: #000; font-weight: bold;
  }
  li{
    list-style: none;
  }
  main{
    display: grid; gap: 30px;
  }
`

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Menu />
      <Routes />
    </>
  )
}

export default App;

