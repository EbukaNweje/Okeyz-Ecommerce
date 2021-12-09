import React from 'react'
import styled from 'styled-components'

const HomeScreen = () => {
    return (
        <Container>
            <Wrapper>
                SITE ON PROGRESS
            </Wrapper>
        </Container>
    )
}

export default HomeScreen
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-top: 100px; */
  font-size: 50px;
  font-weight: bolder;

  @media screen and (max-width: 500px) {
    display: flex;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100vh;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 500px;
  /* background-color: #fef6ee; */
  color: #004080;

  @media screen and (max-width: 500px) {
    min-height: 500px;
    padding-top: 20px;
  }
`