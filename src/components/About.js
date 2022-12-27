import React from "react";
import styled from "styled-components";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const About = () => {
  return (
    <Container id="about">
      <PhotoContainer>
        <Photo src="/images/aboutphoto.jpg" />

        <SocialIcons>
          <SocialRid href="/">
            <BsFacebook fontSize={40} color={"#3b5998"} />{" "}
          </SocialRid>
          <SocialRid href="https://www.linkedin.com/in/kartik-galewar-aa377a127/" target="_blank">
            <BsLinkedin fontSize={40} color={"#287bbc"} />
          </SocialRid>
          <SocialRid href="mailto:kgalewar@gmail.com" target="_blank">
            <AiOutlineMail fontSize={50} color={"#d14836"} />{" "}
          </SocialRid>
        </SocialIcons>
      </PhotoContainer>

      <TextContainer>
        <AboutMe> About Me. </AboutMe>
        <AboutDesc>
            Hi I am Kartik Galewar,Web developer living in Hyderabad, India. 
            I am a Computer Science Engineer, currently working with awesome folks at LTI.
        </AboutDesc>

        <AboutDescSec>
        Have a look at my skills or just connect with me on LinkedIn. I am always excited to work
         with like minded people, lets discuss.
        </AboutDescSec>
      </TextContainer>
    </Container>
  );
};

const Container = styled.div`
  padding: 50px 10%;
  display: flex;
  border-bottom: 1px solid #E8E8E8;
  @media (max-width: 768px) {
    display: block;
  }
`;

const PhotoContainer = styled.div`
  width: 34%;
  text-align: end;
  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
  }
`;

const Photo = styled.img`
  width: 200px;
  height: 200px;
  border: 5px solid #f06000;
  border-radius: 100%;
`;
const SocialIcons = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: 20px;
  @media (max-width: 768px) {
    justify-content: center;
   }

`;

const SocialRid = styled.a`
  text-decoration: none;
  margin: 0 17px;

  &:nth-child(3) {
    margin-right: 0;
  }
`;

const TextContainer = styled.div`
  width: 66%;
  padding-left: 40px;
  padding-right: 40px;
  
  @media (max-width: 768px) {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
   }

 
`;

const AboutMe = styled.div`
    
    
    color: #3a3a3a;
    font-family: 'ProximaNovaT';
    font-size: 65px;
    margin-bottom: 20px;

    @media (max-width: 768px) { 
      margin-top: 30px;
      font-size: 40px;
    }
   
`;

const AboutDesc = styled.p`
    color: #838383;
    margin: 0 auto;
    margin-bottom: 30px;
    font-size: 21px;
`;

const AboutDescSec = styled.p`
    color: #838383;
    margin: 0 auto;

    font-size: 21px;
`

export default About;
