import React from 'react'
import styled from 'styled-components'
import Slider from "./Slider"
import Slid1 from "../img/1.jpeg"
import Slid2 from "../img/2.jpeg"
import Slid3 from "../img/3.jpeg"
import Slid4 from "../img/4.jpeg"
import Slid5 from "../img/5.jpeg"
import Slid6 from "../img/6.jpeg"
import AllProductFill from "./AllProductFile"

const HomeScreen = () => {
    return (
          <Wrap>
        <Container>
            <Wrapper>
                <TopBAnner>
                  <LeftSide>
                    <LinkeBanner src={Slid4}/>
                    <LinkeBanner src={Slid6}/>
                    <LinkeBanner src={Slid1}/>
                    <LinkeBanner src={Slid2}/>
                  </LeftSide>
                  <RightSide>
                    <Slider/>
                  </RightSide>
                </TopBAnner>
            </Wrapper>
        </Container>
        <AllProductFill/>
          </Wrap>
    )
}

export default HomeScreen
const Wrap = styled.div`

`
const RightSide = styled.div`
  width: 65%;
  height: 65%;
  background-color: #fff;

  @media screen and (max-width: 500px) {
    height: 60%;
    width: 90%;
    margin-bottom: 10px;
  }
`
const LinkeBanner = styled.img`
    width: 70%;
    height: 100px;
    border-radius: 10px;
    border: 2px solid lightgray;
    color: black;
    transition: all 350ms;
    transform: scale(1);
    /* background-color: gray; */
    margin: 20px 0px;
    object-fit: cover;

  :hover{
    transform: scale(1.09);
  }

  @media screen and (max-width: 500px) {
  width: 20%;
  margin: 20px 5px 0px 5px;
  height: 70px;
  }
`
const LeftSide = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  margin: 0px 0px 0px 30px;
  flex-direction: column;
  /* color: white; */ 
  
  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 30%;
    margin: 0px 0px 0px 0px;
    /* background-color: black; */
  }
`
const TopBAnner = styled.div`
  width: 100%;
  height: 90vh;
  background-color: #F6F9FC;
  display: flex;
  align-items: center;
  /* color: white; */

  @media screen and (max-width: 500px) {
    display: flex;  
    flex-direction: column-reverse;
    width: 100%;
    height: 50%;
    align-items: center;
    justify-content: center;
    /* background-color: red; */
  }
`
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  padding-top: 100px;
  font-size: 50px;
  font-weight: bolder;
  color: black;

  @media screen and (max-width: 500px) {
    display: flex;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100vh;
    padding-top: 80px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 500px;
  /* background-color: #fef6ee; */

  @media screen and (max-width: 500px) {
    min-height: 500px;
    padding-top: 20px;
  }
`