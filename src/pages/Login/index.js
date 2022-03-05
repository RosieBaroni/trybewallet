import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getEmail } from '../../actions';
import './styles.css';

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
      && password.length >= minPassLength
    ) {
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
    const { history, getEmailDispatch } = this.props;
    const { email } = this.state;

    getEmailDispatch(email);

    history.push('/carteira');
  }

  render() {
    const {
      email,
      password,
      isDisabled,
    } = this.state;

    return (
      <main className="container">
        <div className="content" data-testid="page-login">

          <h1>TRYBE-WALLET</h1>

          <form className="form-login">
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
              placeholder="Digite sua senha"
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
          </form>
        </div>
      </main>
    );
  }
}

Login.propTypes = {
  getEmailDispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getEmailDispatch: (email) => dispatch(getEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
