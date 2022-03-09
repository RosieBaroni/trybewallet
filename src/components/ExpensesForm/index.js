import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addExpense } from '../../actions';
import apiRequest from '../../services/fetchApi';
import './styles.css';

const initialState = {
  value: '',
  description: '',
  currency: 'EUR',
  method: 'Dinheiro',
  tag: 'Alimentação',
  exchangeRates: {},
};

class ExpensesForm extends React.Component {
  state = {
    id: 0,
    ...initialState,
  }

  async componentDidMount() {
    const exchangeRates = await apiRequest();

    this.setState({ exchangeRates });
  }

  onInputChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  onButtonClick = async () => {
    const { addExpenseDispatch } = this.props;
    const exchangeRates = await apiRequest();

    this.setState({ exchangeRates });

    addExpenseDispatch(this.state);

    this.setState((prevState) => ({ id: prevState.id + 1, ...initialState }));
  }

  render() {
    const {
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    } = this.state;

    return (
      <form className="form-expenses">
        <label htmlFor="value">
          Valor:
          <input
            type="number"
            id="value"
            name="value"
            value={ value }
            onChange={ this.onInputChange }
            data-testid="value-input"
          />
        </label>

        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            id="description"
            name="description"
            data-testid="description-input"
            value={ description }
            onChange={ this.onInputChange }
          />
        </label>

        <label htmlFor="currency">
          Moeda:
          <select
            id="currency"
            name="currency"
            value={ currency }
            onChange={ this.onInputChange }
            data-testid="currency-input"
          >
            {Object.keys(exchangeRates)
              .filter((item) => item !== 'USDT')
              .map((option, index) => (
                <option
                  key={ index }
                  data-testid={ option }
                  value={ option }
                >
                  {option}
                </option>
              ))}
          </select>
        </label>

        <label htmlFor="method">
          Método de pagamento:
          <select
            id="method"
            name="method"
            value={ method }
            onChange={ this.onInputChange }
            data-testid="method-input"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          Categoria:
          <select
            id="tag"
            name="tag"
            value={ tag }
            onChange={ this.onInputChange }
            data-testid="tag-input"
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>

        <button
          type="button"
          onClick={ this.onButtonClick }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

ExpensesForm.propTypes = {
  addExpenseDispatch: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addExpenseDispatch: (expense) => dispatch(addExpense(expense)),
});

export default connect(null, mapDispatchToProps)(ExpensesForm);

/** Source: https://stackoverflow.com/questions/54807454/what-is-prevstate-in-reactjs (prevState - uso no id) */
