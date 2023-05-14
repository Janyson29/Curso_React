import './App.css';
import UserDetails from './componentes/UserDetails';

function App() {

  const people = [
    { id: 1, name: "Pedro", profession: "Professor", minor: false, age: 22 },
    { id: 2, name: "Mateus", profession: "Estudante", minor: true, age: 5 },
    { id: 3, name: "Maria", profession: "Enfermeira", minor: false, age: 33 }
  ];
  return (
    <div className="App">
      {people.map((person) => (
      <UserDetails key={person.id} name={person.name} age={person.age} profession={person.profession}  minor={person.minor} id={person.id}/>
      ))}
    </div>
  );
}

export default App;
