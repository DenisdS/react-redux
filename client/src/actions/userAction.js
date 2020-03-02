import { ADD_USER } from './actionsTypes';

export const addUser = (data) => ({
  type: ADD_USER,
  payload:
  fetch("http://localhost:9004/users", {
     method: "POST",
     headers: {
        'Content-type': 'application/json',
     },
     body: JSON.stringify({
       id: '',
       name: data[0],
       username: data[1],
       email: data[2],
       phone: data[3]
     }),
  })
    .then(response => response.json())
})









