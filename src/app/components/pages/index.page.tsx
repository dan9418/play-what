import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PresetType } from "../../../core/Core.constants";
import { POD_LIST_PRESETS } from "../../../core/Core.derived";
import { NOTE_PRESETS } from "../../../core/Note.constants";
import { getModelRoute } from "../../../core/Routing.utils";
import { FEEDBACK_LINK } from "../../constants";
import PageLayout from "../shared/layout/PageLayout";
import Icon, { IconId } from "../shared/ui/Icon";
import logoSrc from "../../../../static/play_what_logo_web.png";

const StyledHomePage = styled(PageLayout)`
  display: flex;
  flex-direction: column;
  align-items: center;

  .logo {
    display: block;
    width: 256px;
    margin: 16px auto;
    @media (min-width: 512px) {
      width: 512px;
      margin: 32px auto;
    }
    @media (min-width: 1024px) {
      width: 768px;
      margin: 48px auto;
    }
  }

  .placeholder {
    width: 128px;
  }

  .intro {
    max-width: 768px;
    color: ${({ theme }) => theme?.text?.primary};
    text-align: center;
    line-height: 120%;
    font-size: 120%;
    margin: 32px auto;
    @media (min-width: 512px) {
      font-size: 140%;
    }
    @media (min-width: 1024px) {
      font-size: 160%;
    }
  }

  .disclaimer {
    font-style: italic;
    color: ${({ theme }) => theme?.text?.secondary};
    text-align: center;
    margin: 8px 0;
    font-size: 80%;
    @media (min-width: 512px) {
      margin: 16px 0;
      font-size: 100%;
    }
    @media (min-width: 1024px) {
      margin: 32px 0;
      font-size: 120%;
    }
  }

  .preview {
    margin: 32px;
    display: grid;
    @media (min-width: 512px) {
      grid-template-columns: 1fr 1fr;
    }
    gap: 16px;

    width: 80%;

    & > * {
      width: 100%;
    }
  }

  .grid {
    display: grid;
    @media (min-width: 512px) {
      grid-template-columns: 1fr 1fr;
    }
    gap: 32px;
    margin: 0 16px;
  }

  section {
    width: 100%;
    margin-top: 32px;

    & > div {
      // display: grid;
      // grid-template-columns: 1fr;
      // gap: 32px;
      // @media(min-width: 512px) {
      // 	grid-template-columns: 1fr 1fr;
      // }

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
  }

  h3 {
    margin: 32px 0 16px;
    color: ${({ theme }) => theme?.text?.primary};
  }

  > a {
    border-radius: 8px;
    cursor: pointer;
    color: white;
    font-weight: bold;
    background-color: ${({ theme }) => theme?.action?.interactive};
    padding: 8px 16px;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    max-width: 512px;

    &:hover {
      color: white;
    }
  }

  .tiles {
    display: grid;
    gap: 16px;
    margin: 0 16px;

    grid-template-columns: 100%;
    @media (min-width: 512px) {
      grid-template-columns: repeat(3, 1fr);
    }

    .tile {
      background-color: ${({ theme }) => theme?.surface?.card};
      border-radius: 8px;
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 16px;

      border: 1px solid ${({ theme }) => theme?.action?.interactive};

      svg,
      svg * {
        fill: ${({ theme }) => theme?.action?.interactive};
      }
      &:hover {
        svg,
        svg * {
          fill: ${({ theme }) => theme?.action?.active};
        }
        border-color: ${({ theme }) => theme?.action?.active};
      }
    }
  }
`;

const Page: React.FC = () => {
  const [modelPath, setModelPath] = useState("");

  useEffect(() => {
    const id = setInterval(() => {
      const root =
        NOTE_PRESETS[Math.floor(Math.random() * NOTE_PRESETS.length)];
      const structure =
        POD_LIST_PRESETS[Math.floor(Math.random() * POD_LIST_PRESETS.length)];
      const text = `${root.name} ${structure.name}`;
      const route = getModelRoute(
        PresetType.Chord, // TODO
        structure.presetId,
        root.presetId
      );

      setModelPath(route);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <StyledHomePage isHome>
      <img src={logoSrc} className="logo" /*width={768} height={128}*/ />
      <p className="intro">Every chord. Every scale. Every key.</p>
      <div className="tiles">
        <Link to="/browse" className="tile">
          <Icon iconId={IconId.Browse} size={64} />
          Browse Chords & Scales
        </Link>
        <Link to="/view/fretboard" className="tile">
          <Icon iconId={IconId.Guitar} size={64} />
          Customize Fretboard
        </Link>
        <Link to={modelPath} className="tile">
          <Icon iconId={IconId.Dice} size={64} />
          Random Page
        </Link>
      </div>
      <div className="grid">
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
                Play What offers something for musicians of all skill levels.
                Use the resources below to find the features most useful for
                you.
              </p>
              <Link to="/help">Help</Link>
              <Link to="/about">About</Link>
              <Link to="/coming-soon">Coming Soon</Link>
            </div>
          </div>
        </section>
      </div>
    </StyledHomePage>
  );
};

export default Page;
