import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import {
  AUTHOR_WEBSITE_LINK,
  FEEDBACK_LINK,
  GITHUB_LINK,
  INSTAGRAM_LINK,
} from "../../../constants";
import { MediaQuery } from "../../../styles/breakpoint";

const StyledSiteFooter = styled.footer`
  min-height: 256px;
  width: 100%;
  white-space: nowrap;
  padding: 32px 16px;

  font-size: 70%;
  ${MediaQuery.Tablet} {
    font-size: 80%;
  }

  color: ${({ theme }) => theme?.text?.inverted};
  background-color: ${({ theme }) => theme?.surface?.nav};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

  h3 {
    text-transform: uppercase;
    margin-bottom: 8px;
  }

  a {
    display: block;
    padding: 4px;
    color: ${({ theme }) => theme?.text?.inverted};

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
    ${MediaQuery.Tablet} {
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

const FOOTER_LINKS = [
  {
    sectionTitle: "Site",
    links: [
      {
        to: "/",
        text: "Home",
      },
    ],
  },
  {
    sectionTitle: "Resources",
    links: [
      {
        to: "/help",
        text: "Help",
      },
      {
        to: "/about",
        text: "About",
      },
      {
        to: "/coming-soon",
        text: "Coming Soon",
      },
      {
        to: "/dev",
        text: "Developer Panel",
      },
    ],
  },
  {
    sectionTitle: "Contact",
    links: [
      {
        to: GITHUB_LINK,
        text: "GitHub",
      },
      {
        to: INSTAGRAM_LINK,
        text: "Instagram",
      },
      {
        to: AUTHOR_WEBSITE_LINK,
        text: "Author Website",
      },
      {
        to: FEEDBACK_LINK,
        text: "Provide Feedback",
      },
    ],
  },
];

const SiteFooter: React.FC = () => {
  return (
    <StyledSiteFooter className="footer">
      {false && (
        <div className="nav-links">
          {FOOTER_LINKS.map(({ sectionTitle, links }) => {
            return (
              <section key={sectionTitle}>
                <h3>{sectionTitle}</h3>
                <ul>
                  {links.map(({ to, text }) => {
                    return (
                      <li key={text}>
                        {to.startsWith("/") ? (
                          <Link to={to}>{text}</Link>
                        ) : (
                          <a target="_blank" href={to}>
                            {text}
                          </a>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </section>
            );
          })}
        </div>
      )}
      <a href={AUTHOR_WEBSITE_LINK} className="name">
        2023 Dan Bednarczyk
      </a>
      <div className="version">v0.1.2</div>
    </StyledSiteFooter>
  );
};

export default SiteFooter;
