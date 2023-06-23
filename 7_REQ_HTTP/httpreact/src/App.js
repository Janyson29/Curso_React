import './App.css';

import {useState, useEffect} from 'react';

// const url = 'http://localhost:3001/products';

function App() {
  const [products, setProducts] = useState([]);

  // resgatando dados
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const res = await fetch("http://localhost:3001/products");

      const data = await res.json();

      setProducts(data);

      return (data)
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Lista de produtos</h1>

      <ul>
        {products.map((product) => (  
          <li key={product.id}>
            {product.name}
            -
            {product.price}
          </li>

        ))}
      </ul>
    </div>
  );
}

export default App;
