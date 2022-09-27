import React from "react";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";
import {
  ContactContainer,
  ContactH1,
  ContactWrapper,
  ContactContent,
  ConctactH2,
  ContactP,
  ContactGitHubIcon,
  ContactLinkedInIcon,
  ContactEmailIcon,
  ContactLinkContainer,
} from "../styles/Container";

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <ContactH1>Contact</ContactH1>
      <ContactWrapper>
        <ContactContent>
          <ConctactH2>Connect With Me!</ConctactH2>
          <ContactP>
            I'm actively searching for work as a Front-end Developer, Back-end
            Developer, or Full-Stack Developer.
          </ContactP>
          <ContactLinkContainer>
            <ContactGitHubIcon>
              <a
                href="https://github.com/colinmyers37"
                rel="noreferrer"
                target="_blank"
              >
                <FaGithub />
              </a>
            </ContactGitHubIcon>
            <ContactLinkedInIcon>
              <a
                href="https://www.linkedin.com/in/colinemyers/"
                rel="noreferrer"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
            </ContactLinkedInIcon>
            <ContactEmailIcon>
              <a
                href="mailto:colinmyers37@gmail.com"
                rel="noreferrer"
                target="_blank"
              >
                <FaEnvelope />
              </a>
            </ContactEmailIcon>
          </ContactLinkContainer>
        </ContactContent>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;
