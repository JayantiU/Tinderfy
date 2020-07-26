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
        <LandingButton> BEGIN </LandingButton>
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
  padding: 38px 100px;
`;

// const BigContainer = styled.div`
//   max-width: 500px;
//   background-image: url(${back});
// `;

export default LandingPage;
