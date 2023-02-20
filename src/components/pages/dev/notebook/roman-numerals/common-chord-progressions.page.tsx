import React from "react";
import styled from "styled-components";
import PageLayout from "../../../../layout/PageLayout";

const StyledPage = styled(PageLayout)``;

const Page: React.FC<any> = () => {
  return <StyledPage title="Chord Progressions"></StyledPage>;
};

export default Page;
