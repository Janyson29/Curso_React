import './App.css';

import {useState, useEffect} from 'react';

import { useFetch } from './hooks/useFetch';

// const url = 'http://localhost:3001/products';

function App() {
  const [products, setProducts] = useState([]);

  const {data: items, httpConfig } = useFetch("http://localhost:3001/products");
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  // resgatando dados
  // useEffect(() => {
  //   async function fetchData() {
  //     // You can await here
  //     const res = await fetch("http://localhost:3001/products");

  //     const data = await res.json();

  //     setProducts(data);

  //     return (data)
  //   }
  //   fetchData();
  // }, []);

  // add products 
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price
    };

    // const res = await fetch("http://localhost:3001/products", {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(product),
    // });
    // // 3 - carregamento dinamico
    // const addedProduct = await res.json();

    // setProducts((prevProducts) => [...prevProducts, addedProduct]);

    // 5- Refatorando o post
    httpConfig(product, 'POST');

    setName('');
    setPrice('');

  }

  return (
    <div className="App">
      <h1>Lista de produtos</h1>

      <ul>
        {items && items.map((product) => (  
          <li key={product.id}>
            {product.name} 
             -  R$: 
            {product.price}
          </li>

        ))}
      </ul>
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input 
              type="text" 
              value={name} 
              name='name' 
              onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Preço:
            <input 
              type="number" 
              value={price} 
              name='price' 
              onChange={(e) => setPrice(e.target.value)} />
          </label>
          <input type='submit' value='Criar' />
        </form>
      </div>
    </div>
  );
}

export default App;
