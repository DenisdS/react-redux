import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: grid;
  width: 300px;
  margin: 0 auto;
`
const Input = styled.input`
  display: block;
  height: 28px;
  border-radius: 5px;
  margin-bottom: 15px;
  border: 2px #635E59 solid;
`
const Submit = styled.input`
  width: 100px;
  height: 40px;
  background: #70C0A3;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  margin: 0 auto;
  transition: width 52s height: 52s;
  :hover{
    box-shadow:0 5px 0 #003f00;
  }
`

const AddUser = (props) => {

  return (
    <Form onSubmit={props.submitHandler}>
      <label>Nome</label>
      <Input type="text" name="valName" required onChange={props.changeHandler} value={props.valName} />

      <label>Apelido</label>
      <Input type="text" name="valUsername" required onChange={props.changeHandler} value={props.valUsername} />

      <label>E-mail</label>
      <Input type="email" name="valEmail" required
        onChange={props.changeHandler} value={props.valEmail} />

      <label>Telefone</label>
      <Input type="tel" name="valPhone" required  onChange={props.changeHandler} value={props.valPhone} />

      <Submit type="submit" value="Cadastrar" />
    </Form>
  );
}

export default AddUser;
