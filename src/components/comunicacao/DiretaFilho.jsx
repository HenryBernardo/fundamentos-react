import React from 'react'

function DiretaFilho (props){
    return(
        <div>
            <div>{props.texto}</div>
            <div>{props.idade}</div>
            <div>{props.bool ? 'Verdedadeiro' : 'false'}!</div>
        </div>
        )
}



export default DiretaFilho