import React from 'react'
import alunos from '../data/alunos';

function ListaAlunos (props) {
    
    const li1 = (
        <li>
            {alunos[0].id} {alunos[0].nome} - {alunos[0].nota}
        </li>
    );

    const todos = alunos.map((linha) => {
        return (
        <li key ={linha.id} >
            {linha.id} {linha.nome} - {linha.nota}
        </li> 
        )
    })
    console.log(todos)
    return(
        <div>
            <ul>
                {todos}
               
            </ul>
        </div>
    )
}



export default ListaAlunos;