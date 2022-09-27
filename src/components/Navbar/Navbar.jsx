import React from 'react';
import HamburgerMenu from './HamburgerMenu';
import { LinkStyled, NavStyled } from '../../styles/Nav';



const Navbar = () => {
    return (
        <NavStyled> 
            <div className="logo">
                <h1><LinkStyled to='/'>COLIN</LinkStyled></h1>
            </div>
            <HamburgerMenu />
        </NavStyled>
    );
}
export default Navbar;