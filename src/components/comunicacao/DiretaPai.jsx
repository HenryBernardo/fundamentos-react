import React from 'react'
import DiretaFilho from './DiretaFilho'

function DiretaPai (props){
    return(
        <div>
            <DiretaFilho texto='Bernardo' idade={9} bool={true}/>
            <DiretaFilho texto='Martina' idade={1} bool={true}/>
        </div>
        )
}


export default DiretaPai;