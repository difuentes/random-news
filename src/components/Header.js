import React from 'react';
import PropTypes from 'prop-types';

const Header = ({tituto}) => {
    return ( 
        <nav className="nav-wrapper  teal accent-3 ">
            <a href="#!" className="brand-logo center"><i className="far fa-newspaper "></i> {tituto} </a>
           
        </nav>
     );
}

Header.prototype={
    titulo: PropTypes.string.isRequired
}
 
export default Header;