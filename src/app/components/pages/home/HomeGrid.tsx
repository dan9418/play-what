import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { PresetType } from "../../../../core/Core.constants";
import { getModelRoute } from "../../../../core/Routing.utils";
import { FEEDBACK_LINK } from "../../../constants";

const StyledHomeGrid = styled.div`
  display: grid;
  @media (min-width: 512px) {
    grid-template-columns: 1fr 1fr;
  }
  gap: 32px;
  margin: 0 16px;

  section {
    width: 100%;
    margin-top: 32px;

    & > div {
      a {
        display: block;
        margin-top: 16px;
      }
    }

    &:last-child {
      margin-bottom: 256px;
    }

    h3 {
      margin: 32px 0 16px;
      color: ${({ theme }) => theme?.text?.primary};
    }
  }
`;

const TILES = [
  {
    title: "Explore Music Theory",
    text: "Browse an extensive library of chords and scales. Explore their relationships and physical properties in detail.",
    links: [
      {
        to: getModelRoute(PresetType.Scale),
        text: "Chords",
      },
      {
        to: getModelRoute(PresetType.Chord),
        text: "Scales",
      },
    ],
  },
  {
    title: "Customize Instruments",
    text: "Play What currently supports one instrument type, but more are planned for future versions.",
    links: [
      {
        to: "/view/fretboard",
        text: "Fretboard",
      },
    ],
  },
  {
    title: "Have Feedback? Get In Touch",
    text: "Use the form below to provide feedback, report bugs, request features, or contact the author.",
    links: [
      {
        to: FEEDBACK_LINK,
        text: "Take The Survey",
      },
    ],
  },
  {
    title: "Confused? Learn More",
    text: "Play What offers something for musicians of all skill levels. Use the resources below to find the features most useful for you.",
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
    ],
  },
];

const HomeGrid: React.FC = () => {
  return (
    <StyledHomeGrid>
      {TILES.map((tile) => {
        const { title, text, links } = tile;
        return (
          <section key={title}>
            <h3>{title}</h3>
            <div>
              <p>{text}</p>
              {links.map((link) => {
                const { to, text } = link;
                return (
                  <Link key={to} to={to}>
                    {text}
                  </Link>
                );
              })}
            </div>
          </section>
        );
      })}
    </StyledHomeGrid>
  );
};

export default HomeGrid;
