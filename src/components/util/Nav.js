import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  return (
    <div className='Nav'>
      <h1>RouterCart</h1>
      <FontAwesomeIcon className='CartIcon' icon={faShoppingCart} />
    </div>
  );
};

export default Nav;
