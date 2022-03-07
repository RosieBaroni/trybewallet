import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  state = {
    totalExpenses: 0,
  }

  componentDidMount() {
    this.sumTotalExpense();
  }

  sumTotalExpense = () => {
    const { expenses } = this.props;

    const totalExpenses = expenses?.reduce((acc, item) => {
      const { value, currency, exchangeRates } = item;

      acc += value * (exchangeRates[currency].ask);

      return acc;
    }, 0);

    this.setState({ totalExpenses: totalExpenses || 0 });
  };

  render() {
    const { user } = this.props;
    const { totalExpenses } = this.state;

    return (
      <header>
        <p data-testid="email-field">
          Email:
          {user}
        </p>

        <p data-testid="total-field">
          Despesas Total:
          {totalExpenses}
        </p>

        <p data-testid="header-currency-field">
          BRL
        </p>
      </header>
    );
  }
}

Header.propTypes = {
  user: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
