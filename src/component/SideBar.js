import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const SideBar = ({ text, toggle, setToggle }) => {
  console.log(toggle);
  return (
    <Container>
         <Search>
              <SearchIcon/>
                <input type="text" placeholder="Search for products"/>
            </Search>
       <NavBar>
                <Nav to="/">Home</Nav>
                <Nav to="/">About</Nav>
                <Nav to="/">Shop</Nav>
                <Nav to="/">Contact</Nav>
                <Nav to="/">Help Center</Nav>
            </NavBar>
    </Container>
  );
};

export default SideBar;
const SearchIcon = styled(FiSearch)`
  margin: 0px 10px;
`
const Search = styled.div`
 color: black;
 align-items: center;
 display: flex;
 width: 80%;
 height: 35px;
 margin: 30px 0px 20px 20px;
 /* background-color: gray; */
 border: 1px solid gray;

 input{
   width: 80%;
   height: 70%;
   outline: none;
   border: none;
   font-size: 18px;
   font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
 }
`
const Nav = styled(NavLink)`
    color: black;
    transition: all 350ms;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
    transform: scale(1);
    position: relative;
    margin: 0px 10px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    width: 100%;
    height: 40px;
    margin: 10px 0px;
    /* border-top: 2px solid rgba(226, 11, 93, 0.767); */
    border-bottom: 2px solid rgba(226, 11, 93, 0.767);
    text-decoration: none;
    color: black;
    
    /* :after{
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

    } */

    :hover{
        cursor: pointer;
        color: #D41E49;
        transform: scale(1.03);

        /* :after{
            opacity: 1;
            transform: scale(1.05)
        } */
    }
`
const NavBar = styled.div`
    width: 70%;
    margin-left: 35px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
`

const Container = styled.div`
  display: none;
  /* z-index: 1000px; */

  @media screen and (max-width: 1154px) {
    background-color: white;
    width: 100%;
    height: 100vh;
    color: white;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    position: absolute;
    z-index: 12;
    margin-top: 100px;
    /* top: 100px; */
  }
`;
// const Wrapper = styled.div`
//   width: 100%;
//   height: 70px;
//   /* margin: 20px; */
//   border-top: 2px solid rgba(255, 255, 255, 0.4);
//   border-bottom: 2px solid rgba(255, 255, 255, 0.4);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   cursor: pointer;
// `;
