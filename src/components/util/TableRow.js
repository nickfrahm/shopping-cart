const TableRow = (props) => {
  const { name, qty, price } = props;
  return (
    <tr>
      <td className='cartItem'>{name}</td>
      <td className='cartItem'>{qty}</td>
      <td className='cartItem'>${price}</td>
    </tr>
  );
};

export default TableRow;
