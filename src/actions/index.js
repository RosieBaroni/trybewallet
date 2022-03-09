// Coloque aqui suas actions
export const GET_EMAIL = 'GET_EMAIL';
export const ADD_EXPENSE = 'GET_EXPENSES';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
// export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';

export const getEmail = (email) => ({
  type: GET_EMAIL,
  payload: email,
});

export const addExpense = (expense) => ({
  type: ADD_EXPENSE,
  payload: expense,
});

export const deleteExpense = (id) => ({
  type: DELETE_EXPENSE,
  payload: id,
});

// export const editExpense = (id, editedExpenses) => ({
//   type: EDIT_EXPENSE,
//   payload: id,
//   payload2: editedExpenses,
// });

export const addCurrencies = (currencies) => ({
  type: ADD_CURRENCIES,
  payload: currencies,
});
