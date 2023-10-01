import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { PresetType } from "../../../../core/Core.constants";
import { getModelRoute } from "../../../../core/Routing.utils";
import { MediaQuery } from "../../../styles/breakpoint";
import Icon, { IconId } from "../../shared/ui/Icon";
import useRandomModel from "./useRandomModel";

const StyledHomeTiles = styled.div`
  display: grid;
  gap: 16px;
  margin: 0 16px;

  grid-template-columns: 100%;
  ${MediaQuery.Tablet} {
    grid-template-columns: repeat(4, 1fr);
  }

  a {
    background-color: ${({ theme }) => theme?.surface?.card};
    border-radius: 8px;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
    border: 1px solid ${({ theme }) => theme?.action?.interactive};
    cursor: pointer;
    color: ${({ theme }) => theme?.action?.interactive};
    width: 100%;
    max-width: 512px;

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
      color: ${({ theme }) => theme?.action?.active};
    }
  }
`;

const TILES = [
  {
    link: getModelRoute(PresetType.Chord),
    iconId: IconId.Browse,
    text: "Chords",
  },
  {
    link: getModelRoute(PresetType.Scale),
    iconId: IconId.Browse,
    text: "Scales",
  },
  {
    link: "/view/fretboard/?presetId=major-triad&presetType=chords&rootId=c",
    iconId: IconId.Guitar,
    text: "Fretboard",
  },
  {
    link: "RANDOM",
    iconId: IconId.Dice,
    text: "Random Page",
  },
];

const HomeTiles: React.FC = () => {
  const modelPath = useRandomModel();
  return (
    <StyledHomeTiles>
      {TILES.map((tile) => {
        const { link, iconId, text } = tile;
        return (
          <Link key={text} to={link === "RANDOM" ? modelPath : link}>
            <Icon iconId={iconId} size={48} />
            {text}
          </Link>
        );
      })}
    </StyledHomeTiles>
  );
};

export default HomeTiles;
