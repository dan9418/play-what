import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logoSrc from "../../../static/play_what_logo_web.png";
import { FEEDBACK_LINK } from "../../config/constants";
import {
  getModelIdClass,
  getModelIdText,
  ModelType,
} from "../../core/models/Model.constants";
import { ALL_PRESETS, NOTE_PRESETS } from "../../core/models/Model.presets";
import Note from "../../core/models/Note";
import { getModelRoute } from "../../core/routing/Routing.utils";
import PageLayout from "../layout/PageLayout";
import SearchBar, { StyledSearchBar } from "../search/SearchBar";
import Icon, { IconId } from "../ui/Icon";
import { DEFAULT_MODEL } from "./view/view.defaults";

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
    color: ${({ theme }) => theme.text.primary};
    text-align: center;
    line-height: 120%;
    font-size: 120%;
    margin: auto;
    @media (min-width: 512px) {
      font-size: 140%;
    }
    @media (min-width: 1024px) {
      font-size: 160%;
    }
  }

  .disclaimer {
    font-style: italic;
    color: ${({ theme }) => theme.text.secondary};
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

  ${StyledSearchBar} {
    margin: 32px auto;
    display: flex;
    justify-content: center;
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
    color: ${({ theme }) => theme.text.primary};
  }

  > a {
    border-radius: 8px;
    cursor: pointer;
    color: white;
    font-weight: bold;
    background-color: ${(props) => props.theme.action.interactive};
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
      background-color: ${(props) => props.theme.surface.card};
      border-radius: 8px;
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 16px;

      border: 1px solid ${(props) => props.theme.action.interactive};

      svg,
      svg * {
        fill: ${(props) => props.theme.action.interactive};
      }
      &:hover {
        svg,
        svg * {
          fill: ${(props) => props.theme.action.active};
        }
        border-color: ${(props) => props.theme.action.active};
      }
    }
  }
`;

const Page: React.FC<any> = () => {
  const [placeholder, setPlaceholder] = useState("Search the site");
  const [model, setModel] = useState(DEFAULT_MODEL);

  const modelPath = getModelRoute(
    model.modelType,
    model.modelId,
    model.root.modelId
  );

  useEffect(() => {
    const id = setInterval(() => {
      const root =
        NOTE_PRESETS[Math.floor(Math.random() * NOTE_PRESETS.length)];
      const structure =
        ALL_PRESETS[Math.floor(Math.random() * ALL_PRESETS.length)];
      const text = `${root.name} ${structure.name} ${getModelIdText(
        structure.modelType
      )}`;
      const cl = getModelIdClass(structure.modelType);
      const m = new cl(structure.modelId, { root: Note.fromId(root.modelId) });

      setPlaceholder(text);
      setModel(m);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <StyledHomePage isHome>
      <img src={logoSrc} className="logo" /*width={768} height={128}*/ />
      <p className="intro">Every chord. Every scale. Every key.</p>
      <SearchBar placeholder={placeholder} />
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
              <Link to={getModelRoute(ModelType.Scale)}>Chords</Link>
              <Link to={getModelRoute(ModelType.Chord)}>Scales</Link>
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
