const TableRow = (props) => {
  const { name, qty, price } = props;
  return (
    <tr>
      <td>{name}</td>
      <td>{qty}</td>
      <td>{price}</td>
    </tr>
  );
};

export default TableRow;
