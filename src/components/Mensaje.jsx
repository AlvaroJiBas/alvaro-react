import React, {useState} from "react";

const Mensaje =() => {
    
    const [texto, setTexto] = useState("");
    const [edad, setEdad] = useState(0);


    const handleTexto=(evento) => {
        
        setEdad(evento.target.value)
     }
    const handleEdad =() => {
        if (parseInt(edad) >= 18){
            setTexto("Puedes pasar")
        }else{
            setTexto("No podras pasar")
        }
    
    }

    

    return (
        <>  
           
            <input type="number" onChange={handleTexto} />
            <button onClick={handleEdad}>Verificar edad</button>
            <div>{texto}</div>
        </>
    )
}

export default Mensaje;