import React from 'react';

import Header from '../../components/Header';
import ExpensesForm from '../../components/ExpensesForm';
import ExpensesTable from '../../components/ExpensesTable';
import './styles.css';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <ExpensesForm />
        <ExpensesTable />
      </>
    );
  }
}

export default Wallet;
