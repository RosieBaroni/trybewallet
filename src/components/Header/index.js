import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './styles.css';

class Header extends React.Component {
   calculateTotalExpense = () => {
     const { expenses } = this.props;
     console.log(expenses);

     const totalExpenses = expenses?.reduce((acc, item) => {
       const { value, currency, exchangeRates } = item;

       acc += value * (exchangeRates[currency].ask);

       return acc;
     }, 0);

     return totalExpenses.toFixed(2);
   }

   render() {
     const { user } = this.props;

     return (
       <header>
         <h1>Trybe Wallet</h1>

         <div className="user-info">
           <p data-testid="email-field">
             Email:
             {user}
           </p>

           <p data-testid="total-field">
             Despesas Total:
             {this.calculateTotalExpense()}
           </p>

           <p data-testid="header-currency-field">
             BRL
           </p>
         </div>
       </header>
     );
   }
}

Header.defaultProps = {
  expenses: [],
};

Header.propTypes = {
  user: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = (state) => ({
  user: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
