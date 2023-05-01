import './App.css';
import City from "./assets/city.jpg"
import ConditionalRender from './componets/ConditionalRender';
import ListRender from './componets/ListRender';
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
      <ListRender></ListRender>
      <ConditionalRender></ConditionalRender>
    </div>
  );
}

export default App;
