import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import { useState } from 'react';

function App() {
const [product, setProduct] = useState([
  {
    url: 'https://www.cyberpuerta.mx/img/product/XL/CP-REDLEMON-79221-1.jpg',
    name: ' Titan Watch',
    category: 'Watch',
    price: 1999
  },
  {
    url: 'https://www.pngmart.com/files/1/Laptop-PNG-Transparent-Image.png',
    name: 'AMZ Laptop 8GB RAM',
    category: 'Laptops',
    seller: 'Delhi Laptops',
    price: 50000
  },

  
  {
    url: 'https://webstockreview.net/images/sweatshirt-clipart.png',
    name: 'Sweatshirt',
    category: 'Dress',
    price: 1999
  },
  {
    url: 'http://4.bp.blogspot.com/-6UkFz5_YvTU/VOQtzRVlHXI/AAAAAAAAATI/CspFS7WclL4/s1600/latest%2Bhandbags%2Bdesigns%2Bfor%2Bwomen-girls%2B2015.jpg',
    name: 'pink bag',
    category: 'Bag',
    seller: 'Gucci Ltd',
    price: 25000
  },
  {
    url: 'https://i.pinimg.com/originals/ab/a4/bd/aba4bdfb39ad9f996c521552c78b96fc.jpg',
    name: 'Bata sneakers',
    category: 'shoes',
    seller: 'Bata',
    price: 549
  },
])

const [cart, setCart] = useState([])
const [showCart, setShowCart] = useState(false)

const addToCart = (data) => {
  setCart([...cart, { ...data, quantity: 1 }])
}

const handleShow = (value) => {
  setShowCart(value)
}

return (
  <div>
    <Header count={cart.length}
      handleShow={handleShow} ></Header>

    {
      showCart ?
        <CartList cart={cart} ></CartList> :
        <ProductList product={product} addToCart={addToCart} ></ProductList>
    }


  </div>
);
}

export default App;
