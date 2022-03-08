import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
  render() {
    const { expensesInfo } = this.props;

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

          {expensesInfo.map((expense) => (
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
            </tr>
          ))}

        </tbody>
      </table>
    );
  }
}

ExpensesTable.propTypes = {
  expensesInfo: PropTypes.arrayOf.isRequired,
};

const mapStateToProps = ({ wallet }) => ({
  expensesInfo: wallet.expenses,
});

export default connect(mapStateToProps, null)(ExpensesTable);
