import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='Nav'>
      <Link to='/' className='link' style={{ color: 'black' }}>
        <h1>RouterCart</h1>
      </Link>
      <Link to='/cart' className='link'>
        <FontAwesomeIcon className='CartIcon' icon={faShoppingCart} />
      </Link>
    </div>
  );
};

export default Nav;
