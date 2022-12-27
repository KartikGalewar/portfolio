import React from "react";
import styled from "styled-components";

const Skills = () => {
    const changeImage = (e) =>{
            e.target.src = "/images/dwnld.gif"
    }
  return (
    <Container id="skills">
      <Title> Skills </Title>
      <Skill>
        <em>ReactJs</em>

        <Bg>
          <span style={{ width: "80%" }}></span>
        </Bg>

        <em>Redux</em>
        <Bg>
          <span style={{ width: "75%" }}></span>
        </Bg>
        <em>Javascript</em>
        <Bg>
          <span style={{ width: "75%" }}></span>
        </Bg>
        <em>Html5</em>
        <Bg>
          <span style={{ width: "80%" }}></span>
        </Bg>
        <em>Css3</em>
        <Bg>
          <span style={{ width: "80%" }}></span>
        </Bg>
        <em>Typescript</em>
        <Bg>
          <span style={{ width: "65%" }}></span>
        </Bg>
        <em>Git</em>
        <Bg>
          <span style={{ width: "70%" }}></span>
        </Bg>
        <em>Firebase</em>
        <Bg>
          <span style={{ width: "70%" }}></span>
        </Bg>
      </Skill>
      <Download>  
        <p>Download My Resume</p>
        <Link href="/images/Kartik Galewar_ Resume.pdf" target="_blank" download>
            <img onClick={ (e)=>{changeImage(e)} } src="/images/dwnldimage.png" alt="download" />
        </Link>
      </Download>
    </Container>
  );
};

const Container = styled.div`
  /* display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column; */
  background: antiquewhite;
  padding-top: 50px;
`;

const Title = styled.div`
  font-size: 65px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: flex-start;
  margin: 20px 20%;
  position: relative;

  span {
    /* position: absolute; */
    left: 0;
    top: 0;
    margin: 0;
    padding-right: 24px;
    background: #f06000;
    display: inline-block;
    height: 42px;
    line-height: 42px;
    border-radius: 3px 0 0 3px;
    width: 85%;
  }

  em {
    font: 15px "opensans-bold", sans-serif;
    color: #313131;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: normal;
    position: relative;
    margin-bottom: 10px;
    margin-top: 15px;

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
`;

const Bg = styled.div`
  height: 42px;
  background: #ccc;
  border-radius: 3px 0 0 3px;
`;


const Download = styled.div`
    min-height: 172px;
    padding-bottom: 90px;
    padding-top: 20px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    p {
    text-align: center;
    color: #838383;
    margin: 0 auto;
    margin-top: 40px;
    margin-bottom: -30px;
    font-size: 25px;
    position: absolute;
    z-index: 1000;
    width: 100%;
    left: 0;

     @media (max-width: 768px) {
      font-size: 20px;
     }
    }
`

const Link = styled.a`

img{
    display: inline-block;
    vertical-align: middle;
}
`;

export default Skills;
