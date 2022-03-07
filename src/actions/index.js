// Coloque aqui suas actions
export const GET_EMAIL = 'GET_EMAIL';
export const GET_EXPENSES = 'GET_EXPENSES';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';

export const getEmail = (email) => ({
  type: GET_EMAIL,
  payload: email,
});

export const getExpenses = (expenses) => ({
  type: GET_EXPENSES,
  payload: expenses,
});

export const addCurrencies = (currencies) => ({
  type: ADD_CURRENCIES,
  payload: currencies,
});

const requestCurrencies = (payload) => ({
  type: REQUEST_CURRENCIES,
  payload,
});

export const fetchCurrencies = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  dispatch(requestCurrencies(data));
};
