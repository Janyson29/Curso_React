import './App.css';
import city from "./assets/city.jpg"

function App() {
  return (
    <div className="App">
      <h1>Seção 3</h1>
      {/* img em public */}
      <div>
        <img src="/img1.jpg" alt="paisagem" />
      </div>
      <img src={city} alt="dfgdf" />
    </div>
  );
}

export default App;
