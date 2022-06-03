import { useEffect, useState } from 'react';
import Input from'./components/Input'
import ProductList from './components/ProductList';
import ProductCard from './components/ProductCard';
import NotFoundProduct from './components/NotFoundProduct';
import './App.css';

import productsList from './products.json'

function App() {

  const MAX_DIGITS = 7
  const MIN_DIGITS = 4

  const [products, setProducts] = useState(productsList.products)
  const [inputState, setInputState] = useState('')
  const [InputAlert, setInputAlert] = useState(false)

  const handleInput = (event) => {
    if (event.target.value.length <= MAX_DIGITS) {
      setInputState(event.target.value)
    }
    if (event.target.value.length && event.target.value.length < MIN_DIGITS) {
      setInputAlert(true)
    } else {
      setInputAlert(false)
    }
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
      <Input 
        onChange={handleInput}
        value={inputState}
        inputAlert={InputAlert}
      />
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
