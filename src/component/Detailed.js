import React from 'react'
import styled from "styled-components"
import data from "./data2.json"
import { AiOutlineClose, AiOutlineShoppingCart } from "react-icons/ai";
import { useParams } from "react-router-dom";

const Detailed = () => {
    const { id } = useParams();

    const myValue = data[id - 1];
    return (
        <Container>
            <Wrapper>
                <DelImage  src={myValue.Image}/>
                <DellItemes>
                    <Name>{myValue.Name}</Name>
                    <Dec>Brand story: SKYRUN was established in 2005. It is a local manufacturing company in Nigeria.
                         There are 6 high-efficiency production plants in the country. Products include TVs,
                          Washing Machines, Refrigerators, Air Conditioners, Smart Electric Meters, Small Appliances, 
                          etc. And the Smart Electric Meters</Dec>
                    <Price>$ {myValue.Price}</Price>
                    <AddCart>
                        Add to Cart
                        <AiOutlineShoppingCart/>
                        </AddCart>
                </DellItemes>
            </Wrapper>
        </Container>
    )
}

export default Detailed
const AddCart = styled.div`
    width: 100%;
    height: 7vh;
    background-color: red;
    margin-top: 2px;
    /* border-radius: 0px 0px 7px 7px; */
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 500;
    line-height: 14px;
    color: white;
    font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif;
    cursor: pointer;
     transform: scale(1);
    transition: all 350ms;

     :hover{
        box-shadow: 3px 3px 7px rgba(0,0,0,0.232);
        transform: scale(1.03)
    }
`
const Price = styled.div`
      width: 100%;
    height: 50px;
    font-size: 30px;
    font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif;
    /* background-color: blue; */
`
const Dec = styled.div`
    width: 100%;
    height: 300px ;
    font-size: 18px;
    font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif;
    font-weight: 400;
    /* background-color: red; */
    @media screen and (max-width: 500px) {
           font-size: 18px;
           margin-top: 20px;
           height: 300px auto;
           /* background-color: red;    */
  }
`
const Name = styled.div`
    width: 100%;
    height: 50px;
    font-size: 30px;
    font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif;
    /* background-color: blue; */

    @media screen and (max-width: 500px) {
           margin-top: -30px;
           font-size: 23px;
           height: 35px;
  }
`
const DellItemes = styled.div`
    width: 800px;
    height: 450px;
    margin: 50px 20px 0px 20px;
    /* background-color: #000; */
`
const DelImage = styled.img`
    width: 450px;
    height: 450px;
    margin: 50px 20px 0px 20px;
    border-radius: 10px;
    object-fit: cover;

    @media screen and (max-width: 500px) {
            height: 300px;
            margin: 40px 20px 0px 20px;
  }
`
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  padding-top: 100px;
  /* font-size: 50px;
  font-weight: bolder;
  color: black; */
  flex-wrap: wrap;

  @media screen and (max-width: 500px) {
    display: flex;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
    padding-top: 80px;
  }
`;
const Container = styled.div`
    width: 100%;
    height: 100%;
`