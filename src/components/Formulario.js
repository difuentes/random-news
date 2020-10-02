import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';
import PropTypes from 'prop-types';


const Formulario = ({guardarCategoria}) => {

    const OPCIONES =[
        {value:'general', label:'General'},
        {value:'business', label:'Negocios'},
        {value:'entertainment', label:'Entretenimiento'},
        {value:'health', label:'Salud'},
        {value:'science', label:'Ciencia'},
        {value:'sports', label:'Deportes'},
        {value:'technology', label:'Tecnologia'},
    ]

    //utilizar custom hook
    const [categoria,SelectNoticias] = useSelect('general',OPCIONES);

    //submit al fomr pasar categorias a app
    const buscarNoticias = e =>{
        e.preventDefault();

        guardarCategoria(categoria);
    }



    return ( 
        <div className={`row ${styles.buscador}`}>
            <div className="col s12 m8  offset-m2">
                <form
                    onSubmit={buscarNoticias}
                >
                    <h2 className={styles.heading}>Encuentra Noticias por Categorias </h2>

                    <SelectNoticias/>

                    <div className="input-field col s12">
                         <button 
                          className={`btn waves-effect waves-light teal accent-3 ${styles.block}`}  
                          type="submit" name="action">
                              ENVIAR <i className="fas fa-arrow-right "></i>
                        </button>
        
                    </div>

                </form>

            </div>
        </div>
     );
}
 
Formulario.prototype={
    guardarCategoria: PropTypes.func.isRequired
}

export default Formulario;