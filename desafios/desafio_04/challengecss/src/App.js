import './App.css';
import Car from './components/Car';

function App() {
  const myCars = [
    {name: 'fusca', km: 10000, color: 'azul' },
    {name: 'polo', km: 32000, color: 'cinza'},
    {name: 'onix', km: 0, color: 'preto'}
  ];

  return (
    <div className="App">
     <h1>showroom de carros</h1>
     <div className="car-container">
      {myCars.map((car) => (
        <Car car={car} />
      ))}
     </div>
    </div>
  );
}

export default App;
