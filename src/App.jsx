import Aleatorio from "./components/Aleatorio";
import ComParametro from "./components/ComParametro";
import Card from "./components/layout/Card";

function App() {

  return (

    <>
    <Card></Card>
    <h1>Situação do aluno</h1>
     <ComParametro 
       aluno="Pedro"
        nota={9.4}
      />
      <ComParametro 
       aluno="João"
        nota={6.3}
      />
      <ComParametro 
       aluno="Maria"
        nota={8.97876}
      />
      <ComParametro 
       aluno="Ana"
        nota={0.51}
      />
      <Aleatorio
        min = {1}
        max={9}
      />

     </>
  );
}

export default App;