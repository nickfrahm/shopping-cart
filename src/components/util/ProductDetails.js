import router1 from '../../img/router1.jpg';
import router2 from '../../img/router2.jpeg';
import router3 from '../../img/router3.jpg';
import uniqid from 'uniqid';

const Products = [
  { id: uniqid(), name: 'Big Boi Router', price: '$100', src: router1, qty: 0 },
  { id: uniqid(), name: 'Basic Boi', price: '$80', src: router2, qty: 0 },
  { id: uniqid(), name: 'Smol Ruter', price: '$50', src: router3, qty: 0 },
];

export default Products;
