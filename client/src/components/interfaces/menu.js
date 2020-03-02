import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import bgMenu from '../../assets/sprite-menu.png';

const Nav = styled.nav`
  width: 240px;
  height: 85px;
  margin: 0 auto;
`
const Ul = styled.ul`
  height: 85px;
  display: flex;
  justify-content: flex-end;
  margin: 0 auto;
`

const Li = styled.li`
  display: grid;
  grid-template-columns: 80px auto;
  justify-items: center;
  align-items: end;
  background: url(${bgMenu}) no-repeat;
  margin: 0 auto;
  :nth-child(1){
    background-position: 4px -2px;
  }
  :nth-child(2){
    background-position: -71px -2px;
  }
  :nth-child(3){
    background-position: -150px -1px;
  }
`
const LinkMenu = styled(Link)`
  padding-top: 66px;
`
const links = [
  { route: "/listar", label: "Listar"},
  { route: "/cadastrar", label: "Cadastrar"},
  { route: "/excluir", label: "Excluir"}
];

const Menu = () => {
  return(
    <Nav>
      <Ul>
        { links.map(link => (
          <Li key={link.route}>
            <LinkMenu to={link.route}>
              {link.label}
            </LinkMenu>
          </Li>
        ))}
      </Ul>
    </Nav>
  )
}

export default Menu;
