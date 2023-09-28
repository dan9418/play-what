import React from "react";
import styled from "styled-components";
import THEME from "../../../styles/theme";
import Icon from "../ui/Icon";

const StyledThemeSwitch = styled.button`
  border: none;
  -ms-user-select: none;
  user-select: none;
  height: 22px;
  width: 64px;
  border-radius: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  overflow: hidden;

  background-color: ${({ theme }) => theme?.surface?.bg};
  :hover {
    background-color: ${({ theme }) => theme?.action?.active};
  }

  & .ball {
    height: 100%;
    width: 50%;

    ${({ $active, theme }) =>
    `&.${$active ? "moon" : "sun"} { background-color: ${theme?.action?.interactive
    } }`};

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

interface IThemeSwitchInputProps {
  value: boolean;
  setValue: (boolean) => void;
}

const ThemeSwitchInput: React.FC<IThemeSwitchInputProps> = ({ value, setValue }) => {
  return (
    <StyledThemeSwitch $active={value} onClick={() => setValue(!value)}>
      <div className="ball sun">
        <Icon iconId="sun" color={"white"} size={16} />
      </div>
      <div className="ball moon">
        <Icon
          iconId="moon"
          color={value ? "white" : THEME.brand.accent}
          size={24}
        />
      </div>
    </StyledThemeSwitch>
  );
};

export default ThemeSwitchInput;
