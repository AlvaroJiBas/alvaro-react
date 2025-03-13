import React from "react";
import styles from "./Bienvenido.module.css"
const Bienvenido = ({nombre , edad}) => {
    const handleClick = () => {
        console.log("super")
    };
    const numeros = [1,7,3,2,4]
  

    return (    
        <>
        <h1 className={styles.titulo}> Bienvenido {nombre} de {edad} años</h1>
        <p className={styles.linea}> Vete a casa</p>
        {numeros.map((numero,index)=>
            <p key={index}>{numero}</p>
        )}
        <button onClick={handleClick}>Clickeame</button>
        </>
    )
}
export default Bienvenido;