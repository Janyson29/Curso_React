import { useState } from 'react';
import './App.css';
import City from "./assets/city.jpg"
import ConditionalRender from './componets/ConditionalRender';
import ListRender from './componets/ListRender';
import ManageData from './componets/ManageData';
import ShowUserName from './componets/ShowUserName';
import CarDetails from './componets/CarDetails';
import Fragment from './componets/Fragment';

function App() {
  const sobrenome = "Marques";
  const [userName] = useState("Maria")

  const cars = [
    { id: 1, brand: "ferrari", color: "amarelo", newCar: true, km: 0 },
    { id: 2, brand: "kia", color: "verde", newCar: false, km: 25454 },
    { id: 3, brand: "renault", color: "azul", newCar: false, km: 55454 }
  ];

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

      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails brand={car.brand} km={car.km} color={car.color}  newCar={car.newCar}/>
      ))}

      {/* fragment */}
      <Fragment propFrangment="test" />
    </div>
  );
}

export default App;
