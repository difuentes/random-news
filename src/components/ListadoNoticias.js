import React from 'react';
import Noticias from '../components/Noticias';

import PropTypes from 'prop-types';

const ListadoNoticias = ({noticias}) => {
    return ( 
        <div className="row">
            {noticias.map(noticias=>(
                <Noticias
                    key={noticias.url}
                     noticias={noticias}
                />
            ))}
        </div>
     );
}

ListadoNoticias.prototype={
    noticias: PropTypes.array.isRequired
}
 
 
export default ListadoNoticias;