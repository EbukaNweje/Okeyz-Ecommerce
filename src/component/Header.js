import React, { useState } from 'react'
import styled from "styled-components"
import LogoImg from "../img/logo.png"
import { FaRegUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose, AiOutlineShoppingCart } from "react-icons/ai";
import SideBar from "./SideBar";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const onToggle = () => {
        setToggle(!toggle);
      };
    return (
        <MainContainer>
        <Container>
            <LogoDiv>
               <Logo src={LogoImg}/>
               {/* <LogoName></LogoName> */}
            </LogoDiv>
            <NavBar>
                <Nav to="/">Home</Nav>
                <Nav to="/">About</Nav>
                <Nav to="/">Shop</Nav>
                <Nav to="/">Contact</Nav>
                <Nav to="/">Help Center</Nav>
            </NavBar>

            <RightSide>
                <SignUp>Sign Up</SignUp>
                <LogIn>LogIn</LogIn>
            </RightSide>

            <Icon>
            {toggle ? (
            <Menu
              onClick={() => {
                console.log(toggle);
                onToggle();
              }}
            />
          ) : (
            <Menu
              onClick={() => {
                console.log(toggle);
                onToggle();
              }}
            />
          )}
            </Icon>

            <Icon2>
                <FaRegUser/>
                <Cart>
                    <MainBox>
                        <Box>1</Box>
                    <AiOutlineShoppingCart/>
                    </MainBox>
                </Cart>
            </Icon2>
            
        </Container>
        {toggle ? (
      <Show toggle= {toggle} setToggle={setToggle}>
        <SideBar />
      </Show>
      ) : null}
        </MainContainer> 
    )
}

export default Header
const MainBox = styled.div`
    width: 75px;
    height: 75px;
    border-radius: 50%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`
const Box = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    color: white;
    font-weight: 500;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    right: 0;
`
const Cart = styled.div`
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background-color: #F3F5F9;
    margin: 0px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
`
const Icon2 = styled.div`
    display: none;
    cursor: pointer;
    @media screen and (max-width: 1154px) {
        display: flex;
        font-size: 25px;
        align-items: center;
        justify-content: center;
    }
`
const Show = styled.div``
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const Menu = styled(GiHamburgerMenu)`
  margin-right: 22px;
  cursor: pointer;
`;

// const Close = styled(AiOutlineClose)`
//   margin-right: 30px;
//   cursor: pointer;
// `;
const Icon = styled.div`
    display: none;
    cursor: pointer;
    @media screen and (max-width: 1154px) {
        display: flex;
        font-size: 25px;
        font-family: sans-serif;
        margin: 0px 5px;
    }
`
const LogIn = styled.div`
    width: 90px;
    height: 40px;
    font-size: 15px;
    border: 1px solid #D41E49; 
    font-weight: 500;
    color: #D41E49;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 7px;
    cursor: pointer;
    transition: all 350ms;
    margin: 0px 20px; 
    
    :hover{
        background-color: #D41E49;
        color: white;
    }
`
const SignUp = styled.div`
    width: 90px;
    height: 40px;
    background-color: #D41E49;
    font-size: 15px;
    font-weight: 500;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border-radius: 7px;
    cursor: pointer;
    transition: all 350ms;
    
    :hover{
        background-color: transparent;
        color: #D41E49;
        border: 1px solid #D41E49; 
    }
`
const RightSide = styled.div`
    display: flex;
    margin-right: 100px;

    @media screen and (max-width: 1154px) {
        display: none;
    }
`
const Nav = styled(NavLink)`
    transition: all 350ms;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
    transform: scale(1);
    position: relative;
    margin: 0px 10px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-decoration: none;
    color: black;
    
    :after{
        content: "";
        position: absolute;
        height: 1px;
        background-color: black;
        width: 100%;
        bottom: -2px;
        left: 0;
        opacity: 0;
        transform: scale(0);
        transform-origin: left;
        transform: all 350ms;

    }

    :hover{
        cursor: pointer;
        color: red;
        transform: scale(1.03);

        :after{
            opacity: 1;
            transform: scale(1.05)
        }
    }
`
const NavBar = styled.div`
    width: 70%;
    margin-left: 50px;
    cursor: pointer;
    display: flex;
    flex: 1;

    @media screen and (max-width: 1154px) {
        display: none;
    }
`
// const LogoName = styled.div`
//     font-size: 18px;
//     font-weight: bold;
//     margin-left: -25px;
//     font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
// `
const LogoDiv = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 1154px) {
        /* margin-right: 20px; */
        flex: 1;
        /* background-color: #000; */
    }
`
const Logo = styled.img`
    width: 100px;
    height: 90px;
    margin-left: 60px;

    @media screen and (max-width: 1154px) {
       width: 70px;
       height: 60px;
       margin-left: 10px;
    }
    
`
const Container = styled.div`
    width: 100%;
    height: 100px;
    background-color: white;
    display: flex;
    box-shadow: 5px 2px 10px rgba(0, 0, 0, 0.252);
    align-items: center;
    position: fixed;
    z-index: 1000;

    @media screen and (max-width: 1154px) {
    width: 100%;
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    /* flex-direction: row-reverse; */
    }
`
