import React, {useState} from "react";

const ContarClicks =() => {
    
    const [contar, setContar] = useState(0);
    const [mensaje, setMensaje] = useState("");
    const handleAumentar =() => {
        setContar(prevContar => prevContar +1);
        if(contar >= 9){
            setMensaje("Has llegado a 10")
        }

    }
    const handleRestar =() => {
        setContar(prevContar => prevContar -1);
     

    }
    const handleReset =() => {
        setContar(0);
     

    }

    return (
        <>  
            <div>Resultado : {contar}</div>
            <button onClick={handleAumentar}>aumentar</button>
            <button onClick={handleRestar}>restar</button>
            <button onClick={handleReset}>resestear</button>
            <p>{mensaje}</p>
        </>
    )
}

export default ContarClicks;