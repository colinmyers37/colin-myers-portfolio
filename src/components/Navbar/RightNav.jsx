import React from "react";
import { LinkStyled, RightNavStyled } from "../../styles/Nav";

const RightNav = ({ isOpen, toggle }) => {
  function resumeClick() {
    console.log("resume click is working");
    window.open(
      "https://drive.google.com/file/d/1FrP4DiOmaHS3ilr4thIvGdNwOOTh6Ea0/view?usp=sharing",
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
