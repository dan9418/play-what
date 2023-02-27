import React from "react";
import styled from "styled-components";
// @ts-ignore
import logoSrc from "../../../../static/play_what_logo_web.png";
import { MediaQuery } from "../../styles/breakpoint";
import PageLayout from "../shared/layout/PageLayout";
import HomeGrid from "./home/HomeGrid";
import HomeTiles from "./home/HomeTiles";

const StyledHomePage = styled(PageLayout)`
  display: flex;
  flex-direction: column;
  align-items: center;

  .logo {
    display: block;
    width: 256px;
    margin: 16px auto;
    ${MediaQuery.Tablet} {
      width: 512px;
      margin: 32px auto;
    }
    ${MediaQuery.Desktop} {
      width: 768px;
      margin: 48px auto;
    }
  }

  .intro {
    max-width: 768px;
    color: ${({ theme }) => theme?.text?.primary};
    text-align: center;
    line-height: 120%;
    font-size: 120%;
    margin: 32px auto;
    ${MediaQuery.Tablet} {
      font-size: 140%;
    }
    ${MediaQuery.Desktop} {
      font-size: 160%;
    }
  }
`;

const Page: React.FC = () => {
  return (
    <StyledHomePage isHome>
      <img src={logoSrc} className="logo" /*width={768} height={128}*/ />
      <p className="intro">Every chord. Every scale. Every key.</p>
      <HomeTiles />
      <HomeGrid />
    </StyledHomePage>
  );
};

export default Page;
