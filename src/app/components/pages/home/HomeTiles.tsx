import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import Icon, { IconId } from "../../shared/ui/Icon";
import useRandomModel from "./useRandomModel";

const StyledHomeTiles = styled.div`
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
    cursor: pointer;
    color: white;
    font-weight: bold;
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
    }
  }
`;

const HomeTiles: React.FC = () => {
  const modelPath = useRandomModel();
  return (
    <StyledHomeTiles>
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
    </StyledHomeTiles>
  );
};

export default HomeTiles;
