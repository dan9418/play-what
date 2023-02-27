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
      & > div.txt {
        a {
          display: block;
          margin-top: 16px;
        }
      }
      & > div.action {
        display: flex;
        align-items: center;
        justify-content: center;
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

const HomeGrid: React.FC = () => {
  return (
    <StyledHomeGrid>
      <section>
        <h3>Explore Music Theory</h3>
        <div>
          <div className="txt">
            <p>
              Browse an extensive library of chords and scales. Explore their
              relationships and physical properties in detail.
            </p>
            <Link to={getModelRoute(PresetType.Scale)}>Chords</Link>
            <Link to={getModelRoute(PresetType.Chord)}>Scales</Link>
          </div>
        </div>
      </section>
      <section>
        <h3>Customize Instruments</h3>
        <div>
          <div className="txt">
            <p>
              Play What currently supports one instrument type, but more are
              planned for future versions.
            </p>
            <Link to="/view/fretboard">Fretboard</Link>
          </div>
        </div>
      </section>
      <section>
        <h3>Have Feedback? Get In Touch</h3>
        <div>
          <div className="txt">
            <p>
              Use the form below to provide feedback, report bugs, request
              features, or contact the author.
            </p>
            <Link target="_blank" to={FEEDBACK_LINK}>
              Take The Survey
            </Link>
          </div>
        </div>
      </section>
      <section>
        <h3>Confused? Learn More</h3>
        <div>
          <div className="txt">
            <p>
              Play What offers something for musicians of all skill levels. Use
              the resources below to find the features most useful for you.
            </p>
            <Link to="/help">Help</Link>
            <Link to="/about">About</Link>
            <Link to="/coming-soon">Coming Soon</Link>
          </div>
        </div>
      </section>
    </StyledHomeGrid>
  );
};

export default HomeGrid;
