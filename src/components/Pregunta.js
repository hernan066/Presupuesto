import React, {useState}from 'react'
import { Error } from './Error';

export const Pregunta = ({setPresupuesto, setRestante, setPregunta}) => {
    //definir el state
    const [cantidad, setCantidad] = useState(0);

    const [error, setError] = useState(false);
    
    //Funcion que lee el presupuesto
    const definirPresupuesto= (e)=>{
        setCantidad (parseInt(e.target.value, 10))
    }
    
    //Submit para definir presupuesto
    const agregarPresupuesto = (e)=>{
        e.preventDefault();

        //validar
        if(cantidad < 1 || isNaN (cantidad)){
            setError(true);
            return;
        }
        //si pasa la validacion
        setError(false);
        setRestante(cantidad);
        setPresupuesto(cantidad);
        setPregunta(false);
        
        
        




    }
    
    return (
        <>
          <h2>Coloca tu presupuesto</h2>  
           {error ? <Error mensaje = "Debes ingresar un numero valido"/> : null}     
          
                <form
                    onSubmit={agregarPresupuesto}
                >
                    <input
                        type="number"
                        className="u-full-width"
                        placeholder="Coloca tu presupuesto"
                        onChange={definirPresupuesto}
                        
                    ></input>
                    
                    <input
                        type="submit"
                        className="button-primary u-full-width"
                        value="Definir presupuesto"
                    ></input>

                </form>


        </>
    )
}
