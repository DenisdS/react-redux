import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import { addUser } from '../../actions/userAction';
import AddUser from './userAdd';

const Section = styled.section`
  display: grid;
  gap: 10px;
`
const H2 = styled.h2`
  width: 300px;
  background: #4D453E;
  text-align: center;
  color: #fff;
  font-size: 1em;
  font-weight: normal;
  padding: 10px 0 10px 0;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  margin: 0 auto;
`

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valName : '',
      valUsername: '',
      valEmail: '',
      valPhone: ''
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler = event => {
    event.preventDefault();

    if(!this.state.valueName){
      this.props.addUser([this.state.valName, this.state.valUsername, this.state.valEmail,
        this.state.valPhone]);
        event.target.reset();
        alert("teste");
    }
  }

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render(){
    return (
      <Section>
        <H2>Usuário</H2>
        <AddUser valueName={this.state.valName} valueUsername={this.state.valUsername}
          valueEmail={this.state.valEmail} valuePhone={this.state.valPhone}
          submitHandler={this.submitHandler} changeHandler={this.changeHandler} />
        <br />
      </Section>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({addUser},dispatch);

export default connect(null,mapDispatchToProps)(User);





























