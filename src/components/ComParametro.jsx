import React from "react";

function ComParametro(props) {
  let status = props.nota <= 1 ? "aprovado" : "reprovado";
  const notaInt = Math.round(props.nota);
  return (
    <div>
      <h2>{props.titulo}</h2>
      <p>
        <strong>{props.aluno} </strong>
        tem nota
        <strong> {notaInt} </strong>e esta
        <strong> {status}</strong>
      </p>
    </div>
  );
}

export default ComParametro;
