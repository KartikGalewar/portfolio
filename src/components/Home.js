import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Container>
      <PimageWrap>
        <ImageWrap>
          <Photo src="/images/photo.png"></Photo>
        </ImageWrap>
      </PimageWrap>

      <Name>Kartik Galewar</Name>
      <Who>
        <Static> I am </Static>
        <Dynamic>
          <li>
            <span>Proud Indian</span>
          </li>
          <li>
            <span>Web Developer</span>
          </li>
          <li>
            <span>Proud Indian</span>
          </li>
          <li>
            <span>Web Developer</span>
          </li>
        </Dynamic>
      </Who>

      <Link href="#contact">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Chat with me
      </Link>

    </Container>
  );
};

const Container = styled.div`
  display: flex;
  /* height: 100vh;
 width: 100vw; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #050801;
`;

const Photo = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  max-width: none;
  border-radius: 50%;
  background: aliceblue;
  box-shadow: 0 0 100px #919090;
`;

const Name = styled.span`
  text-transform: none;
  font-weight: 400;
  color: #fff;
  font-size: 48px;
  margin-bottom: 48px;
  font-family: 'opensans-bold';
`;

const PimageWrap = styled.div`
  margin-bottom: 48px;
  min-width: 280px;
  min-height: 280px;
  width: 280px;
  height: 280px;
  max-width: 280px;
  max-height: 280px;
  margin-top: 48px;
`;

const ImageWrap = styled.div`
  /* height: 200px;
 width: 200px;
 border-radius: 50%;
 background: url("/images/photo.png");
 background-size: contain;
 background-position: center;
 background-repeat: no-repeat;
 background-clip: content-box; */

  position: relative;
  z-index: 3;
  width: 100%;
  height: 100%;
  padding: 12px;
  border: 1px solid hsla(0, 0%, 100%, 0.3);
  border-radius: 50%;
  background-color: hsla(0, 0%, 84%, 0.5);
  -o-object-fit: cover;
  object-fit: cover;
`;

const Who = styled.div`
  display: inline-flex;
  color: #fff;
  margin-bottom: 48px;
`;

const Static = styled.div`
  font-size: 26px;
  font-weight: 400;
`;

const Dynamic = styled.ul`
  margin-left: 15px;
  line-height: 40px;
  height: 40px;
  /* background: red; */
  overflow: hidden;
  li {
    list-style: none;
    color: #fc6d6d;
    font-size: 26px;
    font-weight: 500;
    position: relative;
    top:0;
    animation: slide 6s steps(4) infinite;
    
  }

  @keyframes slide {
    100%{
        top: -160px;
    }
  }
  li span {
    position: relative;
  }

  li span::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background: #050801;
    border-left: 2px solid #fc6d6d;
    left: 0;
    animation: typing 1.5s steps(14) infinite;
    
  }

  @keyframes typing {
    100%{
        left: 100%;
        margin: 0 -35px 0 35px;
    }
  }
`;


const Link = styled.a`
  position: relative;
  display: inline-block;
  padding: 10px 30px;
  color: #03e9f4;
  margin: 10px 0;
  font-size: 21px;
  font-weight: 500;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.5s;
  overflow: hidden;
  margin-bottom: 48px;
  cursor: pointer;
  //-webkit-box-reflect: below 1px linear-gradient(transparent,#0005);

  &:hover{
    /* border-bottom: 1px solid #fff; */
    padding-bottom: 6px;
    /* text-decoration: underline #fff;
    text-decoration-style: wavy; */
    background: #03e9f4;
    color:#050801;
    box-shadow: 0 0 5px #03e9f4,
                    0 0 25px #03e9f4,
                    0 0 50px #03e9f4,
                    0 0 200px #03e9f4;
    
  }

  span{
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
  }


  span:nth-child(2){
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
  }


`;

export default Home;
