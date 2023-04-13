// componentes
import FirstComponet from "./componets/FirstComponets"
import TemplateExpressions from "./componets/templateExpressions";
import MyComponets from "./componets/MyComponets";
import Events from "./componets/Events";

// styles / css
import './App.css';

// comentário
function App() {

  // comentário 1

  /* 
  comentário 2
  */
  return (
    <div className="App">
      {/*comentário*/}
      <h1>Fundamentos</h1>
      <FirstComponet></FirstComponet>
      <TemplateExpressions></TemplateExpressions>
      <MyComponets></MyComponets>
      <Events></Events>
    </div>
  );
}

export default App;
