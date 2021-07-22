import React from "react";

function Aleatorio(props) {
    const min = props.min;
    const max = props.max;
   const aleatorio =  parseInt(Math.random() * (max - min) + (min))
    return (

      <div>
        <h2>Valor Aleatorio</h2>
        <p>
            <strong>Valor Mínimo: </strong> {min}
        </p>
        <p>
            <strong>Valor Máximo: </strong> {max}
        </p>
        <p>
            <strong>Valor Aleatorio: </strong> {aleatorio}
        </p>
      </div>
    );
  }
  
  export default Aleatorio;
  