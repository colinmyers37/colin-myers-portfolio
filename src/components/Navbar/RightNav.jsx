import React from "react";
import { LinkStyled, RightNavStyled } from "../../styles/Nav";

const RightNav = ({ isOpen, toggle }) => {
  function resumeClick() {
    console.log("resume click is working");
    window.open(
      "https://docs.google.com/document/d/1URt_Uka22NHaGJmHA9aXTXJSTNkiFajLU2DZ769UWnY/edit?usp=sharing",
      "_blank"
    );
  }

  return (
    <>
      <div>
        <RightNavStyled isOpen={isOpen} onClick={toggle}>
          <li>
            <LinkStyled
              to="/"
              onClick={toggle}
              smooth={true}
              duration={500}
              spy={true}
              exact={true}
              offset={-80}
            >
              Home
            </LinkStyled>
          </li>
          <li>
            <LinkStyled
              to="about"
              onClick={toggle}
              smooth={true}
              duration={500}
              spy={true}
              exact={true}
              offset={-80}
            >
              About
            </LinkStyled>
          </li>
          <li>
            <LinkStyled
              to="projects"
              onClick={toggle}
              smooth={true}
              duration={500}
              spy={true}
              exact={true}
              offset={-80}
            >
              Projects
            </LinkStyled>
          </li>
          <li>
            <LinkStyled
              to="contact"
              onClick={toggle}
              smooth={true}
              duration={500}
              spy={true}
              exact={true}
              offset={-80}
            >
              Contact
            </LinkStyled>
          </li>
          <li>
            <LinkStyled to="#" onClick={resumeClick}>
              Resume
            </LinkStyled>
          </li>
        </RightNavStyled>
      </div>
    </>
  );
};

export default RightNav;
