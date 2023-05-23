import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className="App">
      {/* CSS Global */}
      <h1>Css do react</h1>
      {/* CSS Component */}
      <MyComponent />
      <p>Esse parágrafo é do app.js</p>
      {/* Inline css */}
      <p style={{color: 'blue', padding: '25px', borderTop: '2px solid red'}}>Esse elemento foi estilizado de forma inline</p>
    </div>
  );
}

export default App;
