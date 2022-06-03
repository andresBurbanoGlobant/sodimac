import { useEffect, useState, useRef } from 'react';
import Input from'./molecules/Input'
import ProductList from './molecules/ProductList';
import ProductCard from './molecules/ProductCard';
import NotFoundProduct from './molecules/NotFoundProduct';
import './App.css';

import productsList from './products.json'

function App() {

  const MAX_DIGITS = 7
  const MIN_DIGITS = 4

  const [products, setProducts] = useState(productsList.products)
  const [inputState, setInputState] = useState('')

  const handleInput = (event) => {
    setInputState(event.target.value)
  }

  const clearSearch = () => {
    setInputState('')
  }

  useEffect(() => {
    if (  inputState 
          && inputState.length >= MIN_DIGITS 
          && inputState.length <= MAX_DIGITS
    ) {
      setProducts(products.filter(
        product => product.sku.includes(inputState))
      )
    } else {
      setProducts(productsList.products)
    }
  }, [inputState])

  return (
    <div className="App">
      <h1>Prueba Sodimac</h1>
      <Input onChange={handleInput} value={inputState} />
      <ProductList>
        {products.length
          ? products.map(product => 
              <ProductCard key={product.sku} {...product}/>
            )
          : <NotFoundProduct clearSearch={clearSearch}/>
        }
      </ProductList>
    </div>
  );
}

export default App;
