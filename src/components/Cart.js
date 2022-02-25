import TableRow from './util/TableRow';
import uniqid from 'uniqid';

const Cart = (props) => {
  const { cart, total } = props;

  return (
    <div className='Cart mainSection'>
      {cart.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th className='headItem'>Item</th>
              <th className='headItem'>Qty</th>
              <th className='headItem'>Price</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => {
              return (
                <TableRow
                  key={uniqid()}
                  name={item.name}
                  price={item.price}
                  qty={item.qty}
                />
              );
            })}
            <tr>
              <td className='total'>TOTAL</td>
              <td></td>
              <td className='total'>${total}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        'No items in cart.'
      )}
    </div>
  );
};

export default Cart;
