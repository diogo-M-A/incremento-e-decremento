import { useState } from 'react';

const Card = () =>{

    const [valor, setValor] = useState(0);
    function Adicionar (){
        setValor(valor + 1);
    }

    function Remover (){
        setValor(valor - 1);
    }

    return(
        <div className="card">
            <div className="card-header">
                Meu card
            </div>
            <div className="card-body">
            <button 
            type="button" 
            className="btn btn-success"
            onClick={Adicionar}>
                Adicionar
            </button>
            <button 
            type="button" 
            class="btn btn-danger"
            onClick={Remover}>
                Remover
            </button>
                <p>{valor}</p>
            </div>
        </div>
    )
}

export default Card;