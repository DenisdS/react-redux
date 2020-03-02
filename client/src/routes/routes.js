import React from 'react'
import {Route, Switch} from 'react-router-dom'

import UserList from '../components/users/userList'
import User from '../components/users/user'

const routes = () =>{

  return(
    <Switch>
        <Route exact path='/' component={UserList}/>
        <Route path='/listar' component={UserList}/>
        <Route path='/cadastrar' component={User}/>
        <Route path='/excluir' component={UserList}/>
    </Switch>
  );
}
export default routes;
