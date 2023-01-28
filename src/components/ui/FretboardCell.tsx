import React from "react";
import styled from "styled-components";
import FretTable from "../../viewers/fret-table/FretTable";
import { IFretboardProps } from "../../viewers/fretboard/Fretboard.utils";

export const StyledFretboardCell = styled.div`
  padding: 8px;
  .caption {
    font-weight: bold;
    font-size: 90%;
    text-align: center;
    margin-top: 8px;
  }
`;

interface IFretboardCellProps {
  fretboardConfig: IFretboardProps;
  caption?: string;
}

const FretboardCell: React.FC<IFretboardCellProps> = ({
  fretboardConfig,
  caption,
}) => {
  return (
    <StyledFretboardCell>
      <FretTable {...fretboardConfig} />
      {caption && <div className="caption">{caption}</div>}
    </StyledFretboardCell>
  );
};

export default FretboardCell;
