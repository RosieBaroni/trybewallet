import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { userEmail } from '../actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    isDisabled: true,
  }

  onInputChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    },
    () => this.isValidInputs());
  }

  isValidInputs = () => {
    const { password, email } = this.state;
    const minPassLength = 6;

    if (email.includes('@')
      && email.includes('.com')
      && password.length >= minPassLength) {
      this.setState({
        isDisabled: false,
      });

      return;
    }

    this.setState({
      isDisabled: true,
    });
  }

  onButtonClick = () => {
    const { history, saveUserEmail } = this.props;
    const { email } = this.state;

    saveUserEmail(email);
    history.push('/carteira');
  }

  render() {
    const {
      email,
      password,
      isDisabled,
    } = this.state;

    return (
      <div data-testid="page-login">

        <h1>TRYBE</h1>

        <input
          type="email"
          id="email"
          name="email"
          placeholder="Digite seu email"
          data-testid="email-input"
          value={ email }
          onChange={ this.onInputChange }
          required
        />

        <input
          type="password"
          id="password"
          name="password"
          data-testid="password-input"
          value={ password }
          onChange={ this.onInputChange }
          required
        />

        <button
          type="button"
          disabled={ isDisabled }
          onClick={ this.onButtonClick }
        >
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  saveUserEmail: PropTypes.func.isRequired,
  history: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  saveUserEmail: (email) => dispatch(userEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
