import React, {useState} from "react";

const Input =() => {
    
    const [texto, setTexto] = useState("");

    const handleTexto =(evento) => {
       setTexto(evento.target.value)
    }
    

    return (
        <>  
           
            <input type="text" onChange={handleTexto}/>
            <div>{texto}</div>
        </>
    )
}

export default Input;