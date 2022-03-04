// Coloque aqui suas actions
export const GET_LOGIN = 'GET_LOGIN';
export const GET_WALLET = 'GET_WALLET';

export const userEmail = (email) => ({
  type: GET_LOGIN,
  email,
});

export const trybeWallet = (currencies, expenses) => ({
  type: GET_WALLET,
  currencies,
  expenses,
});
