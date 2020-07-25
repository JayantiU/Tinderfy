import styled from 'styled-components';
import './index.css';

const BGPurple = styled.div`
  background: #E6E6FA;
  color: #696969;
`;

const BGBlue = styled.div`
  background: #B0C4DE;
  color: #708090;
  
`;

const FullPageContainer = styled.div`
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  padding: 80px 30px;
`;

const SubPageContainer = styled(FullPageContainer)`
  padding: 30px;
`;

export {
  BGPurple,
  BGBlue,
  FullPageContainer,
  SubPageContainer
};