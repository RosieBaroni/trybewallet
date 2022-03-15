// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_EXPENSE, DELETE_EXPENSE, ADD_CURRENCIES } from '../actions';

const INITIAL_STATE = {
  expenses: [],
  currencies: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.payload] };

  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.payload),
    };

  case ADD_CURRENCIES:
    return { ...state, currencies: action.payload };

  default:
    return state;
  }
};

export default wallet;

/** Source: https://stackoverflow.com/questions/57519905/how-delete-item-from-redux-state (atualizando state no 'DELETE_EXPENSE') */
