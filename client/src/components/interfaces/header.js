import React from 'react';
import styled from 'styled-components';

const HeaderMain = styled.header`
  display: grid;
  grid-template-rows: 50px;
  background: #1E1C1B;
  align-items: center;
  justify-items: center;
`
const HeaderTitle = styled.h1`
  font-size: 1em;
  color: #fff;
`
const Header = () => {
  return (
    <HeaderMain>
      <HeaderTitle>Projeto Utilizando React e Redux - Lista, Insere e Deleta Usuários em API Json.</HeaderTitle>
    </HeaderMain>
  )
}

export default Header;
