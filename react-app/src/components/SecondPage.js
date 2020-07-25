import React from 'react';
import styled from 'styled-components';
import { FullPageContainer } from '../styles';

class SecondPage extends React.Component {


  render() {
    return (
      <FullPageContainer>
        <TitleContainer>
          <h1>Hi!</h1>
        </TitleContainer>
        <ContentContainer>
          <p><strong>
            Hello, I'm Second Page! &#128513;
          </strong></p>
          <p>
            Happy Hacking!
          </p>
        </ContentContainer>
      </FullPageContainer>
    )
  }
};

const TitleContainer = styled.div`
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

const ContentContainer = styled.div`
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

export default SecondPage;