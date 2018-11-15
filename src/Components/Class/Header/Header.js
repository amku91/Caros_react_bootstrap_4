import React, { Component } from 'react';
import Brand from '../../Simple/Brand/Brand';

import './Header.css';

class Header extends Component {

    render() {
        return (
            <nav className="navbar navbar-accent sticky-top">
                <Brand></Brand>
            </nav>
        );
    }
}

export default Header;