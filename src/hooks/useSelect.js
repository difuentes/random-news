import React,{useState} from 'react';

const useSelect =(stateInicial,opciones)=>{

    //state del custom hook
    const[state,actualizarState] = useState(stateInicial);

    const SelectNoticias = ()=>(
        <select
            className="browser-default input-field"
            value={state}
            onChange={e => actualizarState(e.target.value)}
        >
            {opciones.map(opt =>(
                <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
        </select>
    );

    return[state,SelectNoticias];

}

export default useSelect;