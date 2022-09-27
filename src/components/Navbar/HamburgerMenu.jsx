import React, { useState } from 'react';
import { StyledHamburgerMenu } from '../../styles/Nav'
import RightNav from './RightNav';



const HamburgerMenu = () => {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () =>{
      setIsOpen(!isOpen)
    }

    return(
        <>
            <StyledHamburgerMenu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
                <div />
                <div />
                <div />
            </StyledHamburgerMenu>
            <RightNav isOpen={isOpen} toggle={toggle} />
        </>
    );
};

export default HamburgerMenu;