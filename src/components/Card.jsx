import "../assets/style/artista.css"
import React from "react";


const Card = (props) => {
    return (
        <div className="container">
            <div  >
                <p><strong>Nombre: </strong> {props.lastName} {props.name}</p>
                <p><strong>Fecha de nacimiento: </strong> {props.nacimiento}</p>
                <p><strong>Posicion en el grupo: </strong>  {props.position}</p>

            </div>
            <div >
                <img src={props.img1} className="imgArtist"></img>
                <img src={props.img2} className="imgArtist"></img>
                <img src={props.img3} className="imgArtist"></img>
            </div>
        </div>

    )
}

export default Card;