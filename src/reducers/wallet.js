// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_WALLET } from '../actions';

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const walletExpenses = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_WALLET:
    return { ...state, currencies: action.currencies, expenses: action.expenses };
  default:
    return state;
  }
};

export default walletExpenses;
