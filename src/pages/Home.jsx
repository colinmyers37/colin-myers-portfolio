import React from 'react';
import { HomeContainerStyled, HomeContent, HomeH1, HomeP,HomeH3 } from '../styles/Container';
import { FaEnvelope, FaGithub, FaLinkedinIn} from 'react-icons/fa'
import { SocialMedia } from '../styles/Media';



const Home = () => {
    return(
    <> 
    <HomeContainerStyled id="/">
        <HomeContent> 
            <HomeH3>Hi, I am</HomeH3>
            <HomeH1>Colin Myers</HomeH1>
            <HomeP >
            A Full-Stack Web Developer from Dallas, Texas. I love learning about new technology and building tools that are simple, user-friendly, and clean.
            </HomeP>
            </HomeContent>
        </HomeContainerStyled>
        <SocialMedia>
            <div className='icon'> 
                <a href="https://github.com/colinmyers37" rel="noreferrer" target="_blank"><FaGithub /></a>
            </div>
            <div className='icon'> 
                <a href="https://www.linkedin.com/in/colinemyers" rel="noreferrer" target="_blank"><FaLinkedinIn /></a>
            </div >
            <div className='icon'> 
                <a href="mailto:colinmyers37@gmail.com" rel="noreferrer" target="_blank"><FaEnvelope /></a>
            </div>
        </SocialMedia>
    </>
    );
};

export default Home;