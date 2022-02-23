import Button from './util/Button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='Home mainSection'>
      <h2>Welcome to RouterCart. Check out our routers.</h2>
      <Link to='/shop' className='link'>
        <Button text='Shop Routers' className='Button'></Button>
      </Link>
    </div>
  );
};

export default Home;
