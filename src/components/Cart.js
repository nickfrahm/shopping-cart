import TableRow from './util/TableRow';
import uniqid from 'uniqid';

const Cart = (props) => {
  const { cart } = props;

  return (
    <div className='Cart mainSection'>
      {cart.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Qty</th>
              <th>Price</th>
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
          </tbody>
        </table>
      ) : (
        'No items in cart.'
      )}
    </div>
  );
};

export default Cart;
