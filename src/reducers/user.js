// Esse reducer será responsável por tratar as informações da pessoa usuária
import { GET_LOGIN } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
  },
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_LOGIN:
    return { email: action.email };
  default:
    return state;
  }
};

export default user;