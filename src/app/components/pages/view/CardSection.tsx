import styled from "styled-components";
import React from "react";

export const StyledCardSection = styled.div`
  h3 {
    text-transform: uppercase;
    font-size: 80%;
    margin-bottom: 8px;
    color: ${(props) => props.theme.text.secondary};
  }
  & > .content {
    background: ${(props) => props.theme.surface.bg};
    border-radius: 8px;
    padding: 8px;
  }
`;

const CardSection: React.FC<any> = ({ title, children }) => {
  return (
    <StyledCardSection>
      {title && <h3>{title}</h3>}
      <div className="content">{children}</div>
    </StyledCardSection>
  );
};

export default CardSection;
