import React from 'react'
import styled from 'styled-components'



const Contact = () => {
  return (
    <Wrapper id="contact">
      <p>Contact With Me</p>

    <FromOutline>
      <form action="https://formspree.io/f/myyaglvb" method='post'>
        <label>Name</label>
        <input name='username' type="text" placeholder='User Name' required autoComplete='off' />
        <label>Email</label>
        <input name='email' type="email" placeholder='E-mail' required autoComplete='off' />
        <label>Message</label>
        <textarea name="message" cols="30" rows="6" required></textarea>
        <input type="submit" value="Send" />
      </form>
    </FromOutline>


    </Wrapper>
  )
}

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    padding-bottom: 100px;
    background-color: #b5cfb2;
    p {
        font-size: 65px;
    text-align: center;
    margin-bottom: 50px;

    @media (max-width: 768px) {
      font-size: 40px;
    }
    }
`

const FromOutline = styled.div`

box-shadow: 0 0 200px #f8eded;
    width: 35%;
    padding: 20px;
    background-color: #f3f3f3;
    border-radius: 10px;
  form{
    margin:  0 auto;
    display: flex;
    flex-direction: column;
    width: 90%;

    label {
      font-size: 17px;
    font-family: monospace;
    margin-bottom: 6px;
    margin-top: 10px;
    }

    input[type=submit] {
      width: 20%;
    vertical-align: middle;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    padding: 2px;
    font-size: 20px;
    background: #00d689;
    outline: none;
    border: none;
    border-radius: 6px;
    padding-bottom: 5px;
    color: #fff;
    :hover {
      box-shadow: 0 0 30px #1bde77;
      cursor: pointer;
    }

    @media (max-width: 768px) {
      width: 30%;
      font-size: 14px;
    }
    }

    input[type=text] { 
      max-width: none !important;
    border: 1px solid #b7bbbd;
    
    border-radius: 2px;
    padding: 4px;
    background: transparent !important;
    width: 100% !important;
    
    box-shadow: inset 0 0 4px rgb(0 0 0 / 20%), 0 1px 0 rgb(255 255 255);
    border: 1px solid #AEAEAE;
    color: #333;
    
    box-sizing: border-box;
    outline: none;
    }

    input[type=email] { 
      max-width: none !important;
    border: 1px solid #b7bbbd;
    
    border-radius: 2px;
    padding: 4px;
    background: transparent !important;
    width: 100% !important;
    
    box-shadow: inset 0 0 4px rgb(0 0 0 / 20%), 0 1px 0 rgb(255 255 255);
    border: 1px solid #AEAEAE;
    color: #333;
    
    box-sizing: border-box;
    outline: none;
    }

    textarea{
      max-width: none !important;
    border: 1px solid #b7bbbd;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    padding: 4px;
    background: transparent !important;
    width: 100% !important;
    -webkit-box-shadow: inset 0 0 4px rgb(0 0 0 / 20%), 0 1px 0 rgb(255 255 255);
    -moz-box-shadow: inset 0 0 4px rgba(0,0,0,0.2), 0 1px 0 rgb(255,255,255);
    box-shadow: inset 0 0 4px rgb(0 0 0 / 20%), 0 1px 0 rgb(255 255 255);
    border: 1px solid #AEAEAE;
    color: #333;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    outline: none;
    }
  }

  @media (max-width: 768px) {
    width: 85%;
  }
`

export default Contact
