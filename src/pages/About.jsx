import React from "react";
import {
  AboutContainerStyled,
  AboutWrapper,
  AboutContentContainer,
  AboutH1,
  AboutP,
  LanguageIcon,
  LanguageImage,
  LanguageImageWrapper,
  LanguagueNameH2,
  LanguageP,
} from "../styles/Container";
import LanguagesImage from "../img/index";

const About = () => {
  return (
    <>
      <AboutContainerStyled id="about">
        <AboutH1>About Me</AboutH1>
        <AboutWrapper>
          <AboutContentContainer>
            <AboutP>
              I was a student at DevMountain where I spent 5 months learning the
              fundamentals of front-end and back-end web development. I have now
              become a Full-Stack Developer with strong understanding in
              software programming and engineering. My skills extend to both
              client-side and server-side code. A highly collaborative team
              player, adept at learning new technology, writing high-quality
              code, and observing best practices.
            </AboutP>
          </AboutContentContainer>
          <LanguagueNameH2>My Stack</LanguagueNameH2>
          <LanguageP>
            CSS3 | HTM5 | Git | JavaScript | PostgreSQL | Node | ReactJS | Redux
            | Express | MongoDb | Java | Bootstrap 
          </LanguageP>
          <LanguageImageWrapper>
            <LanguageIcon>
              <LanguageImage src={LanguagesImage.css3Logo} alt={"css3"} />
            </LanguageIcon>
            <LanguageIcon>
              <LanguageImage src={LanguagesImage.html5Logo} alt={"css3"} />
            </LanguageIcon>
            <LanguageIcon>
              <LanguageImage src={LanguagesImage.gitLogo} alt={"css3"} />
            </LanguageIcon>
            <LanguageIcon>
              <LanguageImage src={LanguagesImage.javascriptLogo} alt={"css3"} />
            </LanguageIcon>
            <LanguageIcon>
              <LanguageImage src={LanguagesImage.postgresqlLogo} alt={"css3"} />
            </LanguageIcon>

            <LanguageIcon>
              <LanguageImage src={LanguagesImage.reactjsLogo} alt={"React"} />
            </LanguageIcon>
            <LanguageIcon>
              <LanguageImage src={LanguagesImage.reduxLogo} alt={"css3"} />
            </LanguageIcon>

          </LanguageImageWrapper>
        </AboutWrapper>
      </AboutContainerStyled>
    </>
  );
};
export default About;
