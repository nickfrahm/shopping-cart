import Button from './Button';

const Card = (props) => {
  const { name, price, qty, src } = props;
  return (
    <div className='Card'>
      <img className='CardImg' src={src} alt={`${name}`} />
      <div className='itemDetails'>
        <h2>{name}</h2>
        <p>{price}</p>
        <p>Quantity: {' ' + qty}</p>{' '}
        <div className='cartButtons'>
          <Button text='-' className='Button DeleteButton' />
          <Button text='+' className='AddButton Button' />
        </div>
      </div>
    </div>
  );
};

export default Card;
