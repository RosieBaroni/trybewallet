// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_EXPENSES, ADD_CURRENCIES } from '../actions';

const INITIAL_STATE = {
  wallet: {
    expenses: [],
    currencies: [],
  },
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_EXPENSES:
    return { ...state, expenses: action.payload };

  case ADD_CURRENCIES:
    return { ...state, currencies: action.payload };

  default:
    return state;
  }
};

export default wallet;
