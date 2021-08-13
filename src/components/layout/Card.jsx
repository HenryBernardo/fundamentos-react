import "./Card.css"
import React from "react";

function Card (props) {

    const estilo = {
        backgroundColor: props.color || "#fff",
        borderColor: props.color || '#f00',
    }

    return (
        <div className="Card" style={estilo}>
            <div className="Title">{props.titulo}</div>
            <div className="Content">
                {props.children}
            </div>   
        </div>
    )
}


export default Card;