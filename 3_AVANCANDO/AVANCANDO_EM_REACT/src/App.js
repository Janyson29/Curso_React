import { useState } from 'react';
import './App.css';
import City from "./assets/city.jpg"
import ConditionalRender from './componets/ConditionalRender';
import ListRender from './componets/ListRender';
import ManageData from './componets/ManageData';
import ShowUserName from './componets/ShowUserName';
import CarDetails from './componets/CarDetails';

function App() {
  const sobrenome = "Marques";
  const [userName] = useState("Maria")

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
      {/* props */}
      <ShowUserName name="Mateus" sobrenome={sobrenome} userName={userName} />
      {/* destructuring */}
      <CarDetails brand="w" km={10000} color="Azul"  newCar={false}/>
      {/* reaproveitando  */}
      <CarDetails brand='ford' km={0} color='rosa' newCar={true} />
      <CarDetails brand='fiat' km={200000} color='prata'  newCar={false}/>

    </div>
  );
}

export default App;
