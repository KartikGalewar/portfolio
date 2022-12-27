import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Nav>
      <Link href="#about">
        {/* <span></span>
        <span></span>
        <span></span>
        <span></span> */}
        About
      </Link>
      <Link href="#skills">
        {/* <span></span>
        <span></span>
        <span></span>
        <span></span> */}
        Skills
      </Link>
      <Link href="#contact">
        {/* <span></span>
        <span></span>
        <span></span>
        <span></span> */}
        Chat with me
      </Link>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background: #050801;
  /* background: rgba(29, 29, 31, 0.7); */
  border-bottom: 1px solid #e2e2e2;
`;
const Link = styled.a`
  position: relative;
  display: inline-block;
  padding: 10px 30px;
  color: #03e9f4;
  margin: 10px 0;
  font-size: 14px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.5s;
  overflow: hidden;
  cursor: pointer;
  //-webkit-box-reflect: below 1px linear-gradient(transparent,#0005);

  &:hover{
    /* border-bottom: 1px solid #fff; */
    padding-bottom: 6px;
    text-decoration: underline #fff;
    text-decoration-style: wavy;
    //background: #03e9f4;
    //color:#050801;
    /* box-shadow: 0 0 5px #03e9f4,
                    0 0 25px #03e9f4,
                    0 0 50px #03e9f4,
                    0 0 200px #03e9f4; */
    
  }

  /* span{
    position: absolute;
    display: block;
  }

  span:nth-child(1){
    top: 0;
    left: -10%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg,transparent,#03e9f4);
    animation: animate1 1s linear infinite;
    @keyframes animate1 {
    0%{
        left: -100%;
    }
    50%,100%{
        left: 100%;
    }
}
  } */


  /* span:nth-child(2){
    top: -100%;
    right:0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg,transparent,#03e9f4);
    animation: animate2 1s linear infinite;
    animation-delay: 0.25s;
    @keyframes animate2 {
    0%{
        top: -100%;
    }
    50%,100%{
        top: 100%;
    }
    }
  }

  span:nth-child(3){
    bottom: 0;
    right:-100;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg,transparent,#03e9f4);
    animation: animate3 1s linear infinite;
    animation-delay: 0.6s;
    @keyframes animate3 {
    0%{
        right: -100%;
    }
    50%,100%{
        right: 100%;
    }
    }
  }

  span:nth-child(4){
    bottom: -100%;
    left:0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg,transparent,#03e9f4);
    animation: animate4 1s linear infinite;
    animation-delay: 0.76s;
    @keyframes animate4 {
    0%{
        bottom: -100%;
    }
    50%,100%{
       bottom: 100%;
    }
    }
  } */

  @media (max-width: 768px) {
    letter-spacing: 1px;
    font-size: 11px;

  }

`;



export default Header;
