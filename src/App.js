import { useState } from 'react';
import Input from'./molecules/Input'
import ProductList from './molecules/ProductList';
import ProductCard from './molecules/ProductCard';
import NotFoundProduct from './molecules/NotFoundProduct';
import './App.css';

import productsList from './products.json'

function App() {

  const [products, setProducts] = useState(productsList)

  return (
    <div className="App">
      <h1>Prueba Sodimac</h1>
      <Input />
      <ProductList>
        {products.products.map(product => 
            <ProductCard key={product.sku} {...product}/>
          )
        }
      </ProductList>
      <NotFoundProduct />
    </div>
  );
}

export default App;
