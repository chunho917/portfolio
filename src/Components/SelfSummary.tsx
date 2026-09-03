import React from "react";
import { styled } from "styled-components";
import { PersonalInfo } from "../data";
import { Column, Row } from "../Styles/StyledComponents";

const SelfSummaryContainer = styled(Column)``;

const Title = styled.div`
  font-size: 3em;
  font-family: "PhoenixGaming", sans-serif;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const Description = styled.p`
  font-size: 2rem;
  max-width: 60vw;
  font-family: "PixelGame", sans-serif;
  margin-left: 10px;
  color: silver;

  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 1rem;
    line-height: 1rem;
  }
`;

const Logo = styled.img`
  height: 90px;
  margin-right: 2vw;

  @media (max-width: 768px) {
    height: 50px;
  }
`;

const SelfSummary: React.FC = () => {
  return (
    <SelfSummaryContainer>
      <Row>
        <Logo src={`${process.env.PUBLIC_URL}/favicon.ico`} />
        <Title>{PersonalInfo.name}</Title>
      </Row>
      <Description>{PersonalInfo.introduction}</Description>
    </SelfSummaryContainer>
  );
};

export default SelfSummary;
