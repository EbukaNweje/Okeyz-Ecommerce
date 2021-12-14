import React from 'react'
import styled from "styled-components"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slid1 from "../img/1.jpeg"
import Slid2 from "../img/2.jpeg"
import Slid3 from "../img/3.jpeg"
import Slid4 from "../img/4.jpeg"
import Slid5 from "../img/5.jpeg"
import Slid6 from "../img/6.jpeg"


const SliderScreen = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };
    return (
        <Container>
           <Wrapper>
        <MySlider {...settings}>
          <MyStyled>
            <SliderImg src={Slid1} />
          </MyStyled>
          <MyStyled>
            <SliderImg src={Slid2} />
          </MyStyled>
          <MyStyled>
            <SliderImg src={Slid3} />
          </MyStyled>
          <MyStyled>
            <SliderImg src={Slid4} />
          </MyStyled>
          <MyStyled>
            <SliderImg src={Slid5} />
          </MyStyled>
          <MyStyled>
            <SliderImg src={Slid6} />
          </MyStyled>
        </MySlider>
            </Wrapper>
        </Container>
    )
}

export default SliderScreen
const MySlider = styled(Slider)`
    .slick-list{
        overflow: hidden;
    }

    button{
        z-index: 1;
    }

    li button{
      :before{
        font-size: 10px;
        margin: 10px 0;
        color: black;
      }
    }

    li.slick-active button:before{
      color: black;
    }
`
const SliderImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
`
const MyStyled = styled.div`
    width: 65%;
    height: 320px;
    background-color: #fff;
    border-radius: 10px;
    color: #000;
    /* border: 2px solid rgba(145, 145, 145, 0.6);
    transition: all 350ms; */

    /* :hover{
        border: 2px solid #fff;
    } */

    @media screen and (max-width: 500px) {
    height: 150px;
    width: 50%;

  }
`
const Container = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 10px;
`
const Wrapper = styled.div`
    width: 100%;
    margin: 0 auto;
`
