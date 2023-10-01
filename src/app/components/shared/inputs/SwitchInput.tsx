import React from "react";
import styled from "styled-components";

const StyledSwitch = styled.button`
  border: none;
  -ms-user-select: none;
  user-select: none;
  height: 22px;
  width: 64px;
  border-radius: 24px;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  ${({ $active }) => `justify-content: flex-${$active ? 'end' : 'start'}`};


  background-color: white;
  :hover {
    background-color: ${({ theme }) => theme?.action?.interactive};
  }

  & .ball {
    height: 18px;
    width: 18px;
    border-radius: 100%;
    margin: 0 4px;
    background-color: ${({ theme, $active }) => $active ? theme?.action?.active : theme?.surface?.bg};

    display: flex;
    align-items: center;
  }
`;

interface ISwitchInputProps {
  value: boolean;
  setValue: (boolean) => void;
}

const SwitchInput: React.FC<ISwitchInputProps> = ({ value, setValue }) => {
  return (
    <StyledSwitch $active={value} onClick={() => setValue(!value)}>
      <div className="ball" />
    </StyledSwitch>
  );
};

export default SwitchInput;
