import { Link } from "gatsby";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import SwitchInput from "../inputs/SwitchInput";
//import Icon from "../ui/Icon";
//import Menu from "./Menu";
import { useLocation } from "@reach/router";
import THEME, { DARK_THEME } from "../../../styles/theme";
import { themeState } from "../../../state";
import { MediaQuery } from "../../../styles/breakpoint";

const StyledSiteHeader = styled.div`
  height: 48px;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2000;

  background-color: ${({ theme }) => theme?.surface?.nav};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

  .width-cap {
    display: flex;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    //max-width: 1024px;
    margin: auto;
  }

  a,
  .menu {
    background-color: transparent;
    cursor: pointer;
    border: none;
    appearance: none;
    color: ${({ theme }) => theme?.text?.inverted};
    text-decoration: none;
    white-space: nowrap;
    height: 48px;
    line-height: 48px;

    padding: 0 8px;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      color: white;
    }

    &.active {
      border-bottom: 2px solid ${(props) => props.theme?.action?.active};
    }
  }

  .logo {
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 2px;
    ${MediaQuery.Tablet} {
      font-size: 20px;
      letter-spacing: 4px;
    }
    ${MediaQuery.Desktop} {
      font-size: 24px;
    }
  }

  .night-mode {
    display: flex;
    align-items: center;
  }

  .right,
  .left {
    display: flex;
    align-items: center;
  }

  .right {
    margin-right: 16px;
    gap: 8px;

    a {
      display: none;
    }
    ${MediaQuery.Tablet} {
      a {
        display: flex;
      }
    }
  }

  .icon,
  .menu {
    width: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon {
    width: 32px;
  }
`;

const SiteHeader: React.FC = () => {
  const setTheme = useSetRecoilState(themeState);
  const [isNightMode, setIsNightMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const onThemeToggle = (v) => {
    setTheme(isNightMode ? THEME : DARK_THEME);
    setIsNightMode(v);
  };

  return (
    <>
      <StyledSiteHeader>
        <div className="width-cap">
          <div className="left">
            {/*<button
              type="button"
              className="menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon iconId="menu"></Icon>
  			</button>*/}
            {pathname !== "/" && (
              <Link to="/" className="logo">
                Play What?
              </Link>
            )}
          </div>
          <div className="right">
            {/*<Link to="/help" className="icon" title="Help">
              <Icon iconId="help" />
            </Link>
            <Link to="/about" className="icon" title="About">
              <Icon iconId="info" />
			</Link>*/}
            <div className="night-mode">
              <SwitchInput value={isNightMode} setValue={onThemeToggle} />
            </div>
          </div>
        </div>
      </StyledSiteHeader>
      {/*<Menu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />*/}
    </>
  );
};

export default SiteHeader;
