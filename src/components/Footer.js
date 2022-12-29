import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFacebook, BsFillArrowUpCircleFill, BsLinkedin } from 'react-icons/bs';
import styled from 'styled-components';


const Footer = () => {
  return (
    <Container>
      <GoTo>
        <IconWrap href='#home'>
         <BsFillArrowUpCircleFill
           fontSize={40}
           color={"#525252"}
           onMouseOver={({target})=>target.style.color="white"}
           onMouseOut={({target})=>target.style.color="#525252"}
           />
        </IconWrap>
      </GoTo>  
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
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 50px 0;
    /* background-color: wheat; */
 `
const SocialIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`


const SocialRid = styled.a`
 margin-left: 10px;
 margin-right: 10px;
`

const GoTo = styled.div`
    position: relative;
    text-align: center;
    left: 4.5%;
    :hover{
        color: #F06000 !important;
    }  
    @media (max-width: 768px) {
        left: 19%;
    }
`

const IconWrap = styled.a`
    position: absolute;
    margin-top: -96px;
    cursor: pointer;
    :hover{
        color: #F06000 !important;
        /* outline: 5px solid red; */
    }  

    svg{
        :hover{
            color: #F06000;
            /* outline: 5px solid red; */
        }
    }
`


export default Footer
