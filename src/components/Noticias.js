import React from 'react';
import PropTypes from 'prop-types';

const Noticias = ({noticias}) => {

    //sacar valores de noticias 
    const {urlToImage,url,title,description} = noticias

    const imagen =( urlToImage) ?
    <div className="card-image">
        <img src={urlToImage} alt={title}/>
    </div>:null;

    return ( 
            <div className="col s12 m6 ">
                <div className="card">

                 {imagen}

                    <div className="card-content">
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>

                    <div className="card-action">
                            <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="waves-effect waves-light btn"
                            >
                                Ver Noticia 
                            </a>

                    </div>
                </div>

            </div>

     );
}

Noticias.prototype={
    noticias: PropTypes.object.isRequired
}
 
export default Noticias;