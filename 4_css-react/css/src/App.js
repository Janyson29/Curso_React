import './App.css';
import MyComponent from './components/MyComponent';
import { useState } from 'react'
import Title from './components/Title';

function App() {
  const n = 15
  const [name] = useState('matheus')

  const redTitle = false
  return (
    <div className="App">
      {/* CSS Global */}
      <h1>Css do react</h1>
      {/* CSS Component */}
      <MyComponent />
      <p>Esse parágrafo é do app.js</p>
      {/* Inline css */}
      <p style={{color: 'blue', padding: '25px', borderTop: '2px solid red'}}>Esse elemento foi estilizado de forma inline</p>
      {/* CSS inline dinâmico */}
      <h2 style={n < 10 ? {color: 'purple'} : {color: 'pink'}}>CSS Dinâmico</h2>
      <h2 style={n > 10 ? {color: 'purple'} : {color: 'pink'}}>CSS Dinâmico</h2>
      <h2 style={name === 'matheus' ? {color: 'green', backgroundColor: 'red'} : null }>teste nome</h2>
      {/* classe dinâmica */}
      <h2 className={redTitle ? 'red-title' : 'title' }>Esse título vai ter classe dinâmica</h2>
      {/* CSS Modulos */}
      <Title />
    </div>
  );
}

export default App;
