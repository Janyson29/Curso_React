import './App.css';
import City from "./assets/city.jpg"
import ManageData from './componets/ManageData';

function App() {
  return (
    <div className="App">
      <h1>Seção 3</h1>
      {/* img em public */}
      <div>
        <img src="/img1.jpg" alt="paisagem" />
      </div>
      {/* img em assets */}
      <div>
      <img src={City} alt="CIDADE" />
      </div>
      <ManageData></ManageData>
    </div>
  );
}

export default App;
