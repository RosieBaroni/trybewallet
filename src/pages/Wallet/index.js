import React from 'react';

import Header from '../../components/Header';
import ExpensesForm from '../../components/ExpensesForm';
import ExpensesTable from '../../components/ExpensesTable';
import './styles.css';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <h1>TrybeWallet</h1>

        <Header />
        <ExpensesForm />
        <ExpensesTable />
      </>
    );
  }
}

export default Wallet;
