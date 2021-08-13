import Aleatorio from "./components/Aleatorio";
import './App.css'
import ComParametro from "./components/ComParametro";
import Card from "./components/layout/Card";
import Primeiro from "./components/Primeiro";
import Familia from "./components/layout/Familia";
import FamiliaMembro from "./components/layout/FamiliaMembro";
import listaAlunos from "./components/repeticao/ListaAlunos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";

function App() {

  return (

    <>
    <div className="Cards">
      <Card titulo="#08 - Renderização Condicional" color="#f90673">
          <ParOuImpar numero={2}></ParOuImpar>
      </Card>

      <Card titulo="#07 - Desafio Repetição" color="#d926be">
          <TabelaProdutos></TabelaProdutos>
      </Card>

      <Card titulo="#06 - Repetição" color="#edc951">
          <ListaAlunos></ListaAlunos>
      </Card>

      <Card titulo="#05 -  Componente com filho" color="#251e3e">
          <Familia sobrenome="kruger">
            <FamiliaMembro nome="predo1" sobrenome="kruger" />
            <FamiliaMembro nome="predo2" sobrenome="kruger" />
            <FamiliaMembro nome="predo3" sobrenome="kruger" />
          </Familia> 
      </Card>

      <Card titulo="#04 - Desafio aleatorio" color="#49E9CA">
          <Aleatorio min = {1} max={9} />
      </Card>

      <Card titulo="Com parametro" color="#7A49E9">
        <ComParametro 
          aluno="Ana"
            nota={0.51}
          />
      </Card>

      <Card titulo="Primeiro" color="#7A49E9">
          <Primeiro />
      </Card>

    </div>
     </>
     
  );
}

export default App;