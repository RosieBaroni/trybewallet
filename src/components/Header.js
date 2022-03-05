import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// import './styles.css';

class Header extends React.Component {
  state = {
    expenses: 0,
  }

  render() {
    const { user } = this.props;
    const { expenses } = this.state;

    // const sum = expenses?.reduce((acc, current) => acc + current, 0);

    return (
      <header>
        <p data-testid="email-field">
          Email:
          {user}
        </p>

        <p data-testid="total-field">
          Despesas Total:
          {expenses}
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
  // expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
