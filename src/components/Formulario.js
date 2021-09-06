import React, { useState } from 'react'
import { Error } from './Error';

export const Formulario = () => {
    
    const [gasto, setGasto] = useState("");
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);
    
    //Cuando el usuario agrega el gasto
    const agregarGasto =(e)=>{
        e.preventDefault();

        //validar
        if (gasto.trim === "" || isNaN (cantidad) ||cantidad < 1){
            setError(true);
            return;  
        }
        
        //construir gasto
        setError(false);
        
        //pasar el gasto al componente principal

        
        //resetear el form


    }
    
    return (
        <form
            onSubmit={agregarGasto}
        >
            <h2>Coloca tus gastos aqui</h2>
            {error ? <Error mensaje= "Todos los campos son obligatorios o ingresaste algun dato incorrecto."/> : null}
            
            <div className="campo">
                <label>Nombre del gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Tipo de gasto"
                    value={gasto}
                    onChange={e => setGasto(e.target.value)}
                ></input>
            </div>

            <div className="campo">
                <label>Cantidad del gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Cantidad"
                    value={cantidad}
                    onChange={e => setCantidad(parseInt(e.target.value, 10))}
                ></input>
            </div>
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar gasto"
            ></input>
        
        
        </form>
    )
}
