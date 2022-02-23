import Products from './util/ProductDetails';
import Card from './util/Card';

const Shop = () => {
  return (
    <div className='Shop mainSection'>
      {Products.map((item) => {
        return <Card name={item.name} price={item.price} src={item.src} />;
      })}
    </div>
  );
};

export default Shop;
