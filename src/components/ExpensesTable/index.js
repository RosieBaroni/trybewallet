import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { deleteExpense } from '../../actions';
import './styles.css';

const columns = [
  'Descrição',
  'Tag',
  'Método de pagamento',
  'Valor',
  'Moeda',
  'Câmbio utilizado',
  'Valor convertido',
  'Moeda de conversão',
  'Editar/Excluir',
];

class ExpensesTable extends React.Component {
  onButtonClickDelete(id) {
    const { deleteExpenseDispatch } = this.props;

    deleteExpenseDispatch(id);
  }

  // onButtonClickEdit(id) {
  //   const { editExpenseDispatch } = this.props;
  //   const { value, description, currency, method, tag, exchangeRates } = this.state;
  //   const editedExpenses = { value, description, currency, method, tag, exchangeRates };

  //   editExpenseDispatch(id, editedExpenses);
  // }

  render() {
    const { expenses } = this.props;

    return (
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={ column }>{column}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {expenses?.map((expense) => (
            <tr key={ expense.id }>
              <td>
                {expense.description}
              </td>
              <td>
                {expense.tag}
              </td>
              <td>
                {expense.method}
              </td>
              <td>
                {Number(expense.value).toFixed(2)}
              </td>
              <td>
                {expense.exchangeRates[expense.currency].name}
              </td>
              <td>
                {Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}
              </td>
              <td>
                {(expense.value * expense.exchangeRates[expense.currency].ask).toFixed(2)}
              </td>
              <td>
                Real
              </td>

              <td>
                <button
                  className="button-delete"
                  type="button"
                  data-testid="delete-btn"
                  onClick={ () => this.onButtonClickDelete(expense.id) }
                >
                  Excluir
                </button>

                {/* <button
                  className="button-edit"
                  type="button"
                  data-testid="edit-btn"
                  onClick={ () => this.onButtonClickEdit(expense.id) }
                >
                  Editar despesa
                </button> */}
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    );
  }
}

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape).isRequired,
  deleteExpenseDispatch: PropTypes.func.isRequired,
  // editExpenseDispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpenseDispatch: (id) => dispatch(deleteExpense(id)),
  // editExpenseDispatch: (id, editedExpenses) => dispatch(editExpense(id, editedExpenses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
