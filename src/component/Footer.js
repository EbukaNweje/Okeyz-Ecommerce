import React from 'react'
import styled from "styled-components"
import LogoImg from "../img/logo.png"
import { AiTwotoneMail, AiFillFacebook, AiFillInstagram, AiOutlineWhatsApp } from "react-icons/ai";

const Footer = () => {
    return (
        <Container>
         <TopFooter>
            <Logo src={LogoImg}/>
            <InputContainer>
                <Name>NEW TO JUMIA?</Name>
                <Dec>Subscribe to our newsletter to get updates on our latest offers!</Dec>
                <InputContainerBox>
                    <AiTwotoneMail/>
                        <input type="text" placeholder='Enter E-mail Address'/>
                        <button>Send</button>
                </InputContainerBox>
  
            </InputContainer>
            <Icon>
                <Icon1/>
                <Icon2/>
                <Icon3/>
            </Icon>
         </TopFooter>
         <BottomFooter>(c) 2021 Eflex Codeing</BottomFooter>
        </Container>
    )
}

export default Footer
const Icon3 = styled(AiOutlineWhatsApp)`
    font-size: 28px;
    color: gray;
    cursor: pointer;
    transform: scale(1);
    transition: all 350ms;

    :hover{
        color: #fff;
        transform: scale(1.07)
    }
`
const Icon2 = styled(AiFillInstagram)`
      font-size: 28px;
      color: gray;
      cursor: pointer;
    transform: scale(1);
    transition: all 350ms;

    :hover{
        color: #fff;
        transform: scale(1.07)
    }
`
const Icon1 = styled(AiFillFacebook)`
      font-size: 28px;
     color: gray;
     cursor: pointer;
    transform: scale(1);
    transition: all 350ms;

    :hover{
        color: #fff;
        transform: scale(1.07)
    }
`
const Icon = styled.div`
    width: 200px;
    /* background-color: #fff; */
    margin-right: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media screen and (max-width: 500px) {
        margin-top: -5px;
        width: 180px;
        height: 3px;
}
`
const Dec = styled.div`
        margin-bottom: 10px;
        color: lightgray;
`
const Name = styled.div`
    font-family:  Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif;
    font-size: 12px;
    font-weight: 700;
    color: rgb(255, 255, 255);
`
const InputContainerBox = styled.div`
    width: 400px;
    height: 40px;
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    color: gray;
    font-size: 18px;

    input{
        width: 80%;
        margin-left: 5px;
        height: 80%;
        border: none;
        font-family: 'Roboto', sans-serif;
        outline: none;
    }
    button{
        width: 90px;
        height: 40px;
        background-color: red;
        border: none;
        color: white;
        font-weight: 500;
        cursor: pointer;
        margin-left: 20px;
        border-radius: 0px 10px 10px 0px;
    }
    @media screen and (max-width: 500px) {
        width: 310px;
        height: 40px;
}
`
const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* background-color: #fff; */
    width: 550px;

    @media screen and (max-width: 500px) {
        width: 360px;
        font-size: 11px;
        margin-top: -15px;
        display: flex;
        align-items: center;
}
`
const Logo = styled.img`
    width: 150px;
    height: 130px;
@media screen and (max-width: 500px) {
    width: 60px;
    height: 60px;
    margin-top: -14px;
}
`
const TopFooter = styled.div`
    width: 100%;
    height: 80%;
    background-color: #282828;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    border-bottom: 1px solid lightgray;

    @media screen and (max-width: 500px) {
        align-items: center;
        justify-content: center;
  }
`
const MedFooter = styled.div`
    width: 100%;
    height: 70%;
    background-color: #323232;
    border-bottom: 1px solid lightgray;
`
const BottomFooter = styled.div`
    width: 100%;
    height: 20%;
    background-color: #323232;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
const Container = styled.div`
    width: 100%;
    height: 30vh;
    background-color: black;

    @media screen and (max-width: 500px) {
      height: 50vh;
  }
`