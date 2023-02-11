import { Link } from "gatsby";
import React from "react";
import styled, { useTheme } from "styled-components";
import { FEEDBACK_LINK } from "../../config/constants";

const StyledSiteFooter = styled.footer`
  min-height: 256px;
  width: 100%;
  white-space: nowrap;
  padding: 32px 16px;

  font-size: 70%;
  @media (min-width: 512px) {
    font-size: 80%;
  }

  color: ${({ theme }) => theme.text.inverted};
  background-color: ${({ theme }) => theme.surface.nav};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

  h3 {
    text-transform: uppercase;
    margin-bottom: 8px;
    //border-bottom: 1px solid ${({ theme }) => theme.utils.border};
  }

  a {
    display: block;
    padding: 4px;
    color: ${({ theme }) => theme.text.inverted};

    &.name {
      margin: 32px 0;
      font-size: 120%;
      text-align: center;
    }
  }

  section {
    width: 100%;
    max-width: 160px;
  }

  .nav-links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    flex-direction: column;
    text-align: center;
    @media (min-width: 512px) {
      align-items: flex-start;
      flex-direction: row;
    }
  }

  .version {
    margin: 32px 0;
    font-size: 80%;
    text-align: center;
    letter-spacing: 2px;
  }
`;

const SiteFooter: React.FC = () => {
  const theme = useTheme();
  return (
    <StyledSiteFooter className="footer">
      <div className="nav-links">
        <section>
          <h3>Site</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/view/fretboard">Fretboard</Link>
            </li>
            <li>
              <Link to="/browse">Browse</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </section>
        <section>
          <h3>Resources</h3>
          <ul>
            <li>
              <Link to="/help">Help</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/coming-soon">Coming Soon</Link>
            </li>
            {/*<li>
							<Link to='/coming-soon'>Submit Feedback</Link>
						</li>*/}
            <li>
              <Link to="/dev">Developer Panel</Link>
            </li>
          </ul>
        </section>
        <section>
          <h3>Contact</h3>
          <ul>
            <li>
              <a target="_blank" href="https://github.com/dan9418/play-what">
                GitHub
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.instagram.com/dan.bednarczyk/"
              >
                Instagram
              </a>
            </li>
            <li>
              <a target="_blank" href="https://danbednarczyk.com">
                Author Website
              </a>
            </li>
            <li>
              <a target="_blank" href={FEEDBACK_LINK}>
                Provide Feedback
              </a>
            </li>
          </ul>
        </section>
      </div>
      <a href="https://danbednarczyk.com" className="name">
        2023 Dan Bednarczyk
      </a>

      <div className="version">v0.1.2</div>
    </StyledSiteFooter>
  );
};

export default SiteFooter;
