/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";


function contadorComponent(){
const [numero,setNumero] = useState(0);

const aumentarNumero = ()=>{
    setNumero(numero + 1);
}

const restarNumero = ()=> {
    setNumero(numero - 1);
}
    return(
        <div>
            <button onClick={()=>{
                aumentarNumero()
            }}>Sumar</button>
            <button onClick={()=>{
                restarNumero()
            }}>Restar</button>
            <div>
                Resultado = {numero}
            </div>
        </div>
    );
}

export default contadorComponent;