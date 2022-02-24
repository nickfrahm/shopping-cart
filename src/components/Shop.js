import Card from './util/Card';

const Shop = (props) => {
  const { products, incrementQty, decrementQty } = props;
  return (
    <div className='Shop mainSection'>
      {products.map((item) => {
        return (
          <Card
            key={item.id}
            name={item.name}
            price={item.price}
            src={item.src}
            qty={item.qty}
            id={item.id}
            incrementQty={incrementQty}
            decrementQty={decrementQty}
          />
        );
      })}
    </div>
  );
};

export default Shop;
