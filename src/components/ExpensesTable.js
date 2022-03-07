import React from 'react';

const fields = [
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
    return (
      <table>
        <thead>
          <tr>
            {fields.map((item) => (
              <th key={ item }>{item}</th>
            ))}
          </tr>
        </thead>
      </table>
    );
  }
}

export default ExpensesTable;
