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
          <LandingButton> BEGIN </LandingButton>
          <h1> Hello </h1>
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
`;

var ButtonContainer = styled.div`
  position: absolute;
  top: 200px;
  left: 200px;
  width: auto;
  z-index: 5;
`;

// const BigContainer = styled.div`
//   max-width: 500px;
//   background-image: url(${back});
// `;

export default LandingPage;
