import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import bgMenu from '../../assets/sprite-menu.png';

const Table = styled.table`
  width: 95%;
  text-align: center;
  border: 2px #8E7D6E solid;
  margin: 0 auto;
`
const Caption = styled.caption`
  padding: 8px 0 8px 0;
  background: #4D453E;
  color: #fff;
`
const Thead = styled.thead`
  background: #D3B293;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: #000;
`
const Th = styled.th`
  padding: 12px 0 12px 0;
`
const Button = styled.button`
  background: url(${bgMenu}) no-repeat -97px 10px;
  background-size: 150px;
  color: transparent;
  padding-top: 60px;
  border: none;
  font-weight: bold;
  cursor: pointer;
`
const UserList = () => {

  const [listUsers, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:9004/users/');
      const data = await response.json();

      setUsers(data);
    };
    fetchData();
  }, []);

  const updateUsers = () => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:9004/users/');
      const data = await response.json();
      setUsers(data);
    };
    fetchData();
  }

  function deleteUser (id) {
    fetch('http://localhost:9004/users/' + id, {
      method: 'DELETE'
    }).then(() => {
      updateUsers();
    }).catch(err => {
      console.error(err)
    });
  }

  return (
    <>
    <Table summary="Ficha de todos os usuários cadastrados">
      <Caption>Lista de Usuários</Caption>
      <Thead>
        <tr>
          <Th></Th>
          <Th>Id</Th>
          <Th>Nome</Th>
          <Th>Apelido</Th>
          <Th>E-mail</Th>
          <Th>Telefone</Th>
          <Th></Th>
        </tr>
      </Thead>

      <tbody>
      { listUsers.map( user => (
        <tr key={user.id}>
          <td><img src={user.avatar} alt={user.name} /></td>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td><Button onClick={ () => deleteUser(user.id) }>Excluir</Button></td>
        </tr>
      ))}
      </tbody>
    </Table>
    </>
  );
}

export default UserList;

