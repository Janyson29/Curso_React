// componentes
import FirstComponet from "./componets/FirstComponets"
import TemplateExpressions from "./componets/templateExpressions";
import MyComponets from "./componets/MyComponets";

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
    </div>
  );
}

export default App;
