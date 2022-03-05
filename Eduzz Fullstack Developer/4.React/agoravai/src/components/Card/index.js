import { useState } from "react";
import Button from "../Button"

const Card = () =>{
    const [valor, setValor] = useState(0)

    function Aumentar(){
        setValor(valor + 1);
    }
    function Diminuir(){
        setValor(valor - 1);
    }

    return(
        <div className="card">
            <div className="card-header">
                Titulo do card
            </div>
            <div className="card-body">
                <Button
                    className="btn btn-light"
                    onClick={Aumentar}
                >
                    Aumentar
                </Button>
                <Button
                    className="btn btn-dark"
                    onClick={Diminuir}
                >
                    Diminuir
                </Button>
                <p>{valor}</p>    
            </div>
        </div>
    )
}

export default Card;