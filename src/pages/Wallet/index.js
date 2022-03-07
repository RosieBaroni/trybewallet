import React from 'react';

import Header from '../../components/Header';
import Form from '../../components/Form';
import ExpensesTable from '../../components/ExpensesTable';
import './styles.css';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <h1>TrybeWallet</h1>

        <Header />
        <Form />
        <ExpensesTable />
      </>
    );
  }
}

export default Wallet;
