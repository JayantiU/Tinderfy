import styled from "styled-components";
import "./index.css";
import back from "./components/background2.png";

const BGPurple = styled.div`
  background: #e6e6fa;
  color: #696969;
`;

const BGBlue = styled.div`
  background: #b0c4de;
  color: #708090;
`;

const FullPageContainer = styled.div`
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  padding: 80px 30px;
`;

const SubPageContainer = styled(FullPageContainer)`
  padding: 10px;
`;

const BigContainer = styled.div`
  position: relative;
  background-image: url(${back});
  height: 820px;
  width: 1450px;
`;

export { BGPurple, BGBlue, FullPageContainer, SubPageContainer, BigContainer };
