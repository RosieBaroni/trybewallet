// Coloque aqui suas actions
export const GET_EMAIL = 'GET_EMAIL';
export const ADD_EXPENSE = 'GET_EXPENSES';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
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

export const addCurrencies = (currencies) => ({
  type: ADD_CURRENCIES,
  payload: currencies,
});
