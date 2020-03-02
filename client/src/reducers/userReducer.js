import { ADD_USER } from '../actions/actionsTypes';

const initialState = {
  users: []
}

export const UserReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_USER :
      return {
        ...state,
        users: state.users.concat(action.payload)
      }
    default :
      return state;
  }
}
