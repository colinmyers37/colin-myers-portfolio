import React from "react";
import "../App.css";
import {
  ProjectH1,
  ProjectH3,
  ProjectParagraphContainer,
  ProjectP,
  ProjectsContainerStyled,
  ProjectWrapper,
  ProjectCards,
} from "../styles/Container";

const Projects = () => {
  return (
    <>
      <ProjectsContainerStyled id="projects">
        <ProjectH1>Projects</ProjectH1>
        <ProjectWrapper>
          <ProjectCards>
            <ProjectH3>Golfcourse Handicap Calculator</ProjectH3>
            <ProjectParagraphContainer>
              <ProjectP>
                This project is my foundations capstone from dev mountain. You are able to input your golf scores from a round and get the handicap of that round.
              </ProjectP>
              <br />
              <ul>
                <strong>Technology used</strong>
                <li>HTML5</li>
                <li>NodeJS</li>
                <li>Bootstrap 5</li>
                <li>PostgreSQL</li>
              </ul>
              <br />
              <a
                href="https://github.com/colinmyers37/handicap-project"
                rel="noreferrer"
                target="_blank"
              >
                GitHub
              </a>{" "}
              {"  "}|{" "}
              <a
                href="https://golfcourse-calc.herokuapp.com/"
                rel="noreferrer"
                target="_blank"
              >
                Live Demo
              </a>
            </ProjectParagraphContainer>
          </ProjectCards>


          <ProjectCards>
            <ProjectH3>Colin Myers Portfolio</ProjectH3>
            <ProjectParagraphContainer>
              <ProjectP>
                This Project is my personal portfolio. I used React and Css to make a clean and simple UI
              </ProjectP>
              <br />
              <ul>
                <strong>Technology used</strong>
                <li>React</li>
                <li>CSS3</li>
                <li>Styled Components</li>
                <li>React Icons</li>
                
              </ul>
              <br />
              <a
                href="https://github.com/colinmyers37/colin-myers-portfolio"
                rel="noreferrer"
                target="_blank"
              >
                GitHub
              </a>{" "}
              {"  "}|{" "}
              <a
                href="https://colin-myers.netlify.app/"
                rel="noreferrer"
                target="_blank"
              >
                Live Demo
              </a>
            </ProjectParagraphContainer>
          </ProjectCards>
          
          
        </ProjectWrapper>
      </ProjectsContainerStyled>
    </>
  );
};
export default Projects;
