import Aleatorio from "./components/Aleatorio";
import './App.css'
import ComParametro from "./components/ComParametro";
import Card from "./components/layout/Card";
import Primeiro from "./components/Primeiro";

function App() {

  return (

    <>
    <div className="Cards">
      <Card titulo="Desafio aleatorio">
          <Aleatorio min = {1} max={9} />
      </Card>

      <Card titulo="Com parametro">
        <ComParametro 
          aluno="Ana"
            nota={0.51}
          />
      </Card>

      <Card titulo="Primeiro">
          <Primeiro />
      </Card>

    </div>
     </>
     
  );
}

export default App;