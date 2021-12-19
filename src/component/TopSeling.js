import React from 'react'
import styled from "styled-components"
import data from "./data.json"
// import Footer from "./Footer"

const TopSeling = () => {
    return (
        <Container>
            <Wrapper>
            <TopList>Top selling items</TopList>
                <CardContainer>
                     {
                         data.map((props)=>(
                        <CardBody key={props.id}>
                            <Image src={props.Image}/>
                            <CardTitle>{props.Name}</CardTitle>
                            <CardPrice>#{props.Price}</CardPrice>
                            <AddCart>Add to Cart</AddCart>
                       </CardBody>
                         ))
                     }
                </CardContainer>
            </Wrapper>
        </Container>
    )
}

export default TopSeling
const AddCart = styled.div`
    width: 60%;
    height: 5vh;
    background-color: red;
    margin-top: -2px;
    /* border-radius: 0px 0px 7px 7px; */
    display:flex;
    align-items: center;
    justify-content: center;
     font-size: 14px;
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
const CardPrice = styled.div`
     font-size: 15px;
    font-weight: 500;
    line-height: 30px;
    color: rgb(40, 40, 40);
    font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif;
    /* margin-left: 15px; */
` 
const CardTitle = styled.div`
    height: 2vh;
    width: 100%;
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
    color: rgb(40, 40, 40);
    font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif;
    margin-top: 5px;
` 
const Image = styled.img`
    width: 100%;
    height: 27vh;
    background-color: #000;
    object-fit: cover;
` 
const CardBody = styled.div` 
    width: 15vw;
    height: 40vh;
    background-color: white;
    border-radius: 7px;
    box-shadow: 3px 3px 7px rgba(0,0,0,0.232);
    transform: scale(1);
    transition: all 350ms;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px 10px;
    cursor: pointer;

    :hover{
        box-shadow: 3px 3px 7px rgba(0,0,0,0.232);
        transform: scale(1.08)
    }

    @media screen and (max-width: 500px) {
        width: 70vw;
        box-shadow: 3px 3px 7px rgba(0,0,0,0.232);
  }
`
const CardContainer = styled.div`
    margin: 20px 10px;
    display: flex;
    flex-wrap: wrap;
    height: 50vh;
    /* background-color: blue; */

    @media screen and (max-width: 500px) {
        display: flex;
        justify-content: center;
        align-items: center;
  }
    
`
const TopList = styled.div`
    font-size: 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 600;
    line-height: 20px;
    margin-top: 20px;
    /* color: #fff; */

       @media screen and (max-width: 500px) {
        margin-top: 40px;
  }
`
const Wrapper = styled.div`
    width: 85%;
    height: 50vh;
    display: flex;
    flex-direction: column;
`
const Container = styled.div`
    width: 100%;
    height: 50vh;
    /* background-color: #000; */
    margin-top: -50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width: 500px) {
    margin-top: -360px;
  }
`