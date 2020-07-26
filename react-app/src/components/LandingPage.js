import React from "react";
import styled from "styled-components";
import { FullPageContainer, BigContainer } from "../styles";
import back from "./background2.png";
import "./buttonStyle.css";

class LandingPage extends React.Component {
  render() {
    return (
      <BigContainer>
        {/* <TitleContainer>
          <h1>Hi!</h1>
        </TitleContainer> */}

        {/* <ContentContainer></ContentContainer> */}
        <img src={back} width="1450" height="820" />
        <ButtonContainer>
          <LandingButton href=""> B E G I N </LandingButton>
        </ButtonContainer>
      </BigContainer>
    );
  }
}

const TitleContainer = styled.div`
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

const ContentContainer = styled.div`
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
`;

var LandingButton = styled.button`
  position: relative;
  padding: 38px 100px;
  z-index: 5;
  background-color: #000000;
  color: white;
  font-size: 20px;
  font-family: Verdana;
  padding: 38px 100px;
  border: none;
  cursor: pointer;
  border-radius: 70px;
  text-align: center;
`;

var ButtonContainer = styled.div`
  position: absolute;
  top: 533px;
  left: 610px;
  width: auto;
  z-index: 5;
`;

// const BigContainer = styled.div`
//   max-width: 500px;
//   background-image: url(${back});
// `;

export default LandingPage;
