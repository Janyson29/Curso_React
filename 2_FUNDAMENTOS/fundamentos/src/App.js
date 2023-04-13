// componentes
import FirstComponet from "./componets/FirstComponets"
import TemplateExpressions from "./componets/templateExpressions";

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
    </div>
  );
}

export default App;
