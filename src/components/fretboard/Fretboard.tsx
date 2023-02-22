import * as React from "react";
import styled, { css } from "styled-components";
import {
  getFretMapFromFretboardProps,
  IFretboardProps,
} from "../../core/fretboard/Fretboard.utils";
import { IColConfig, IRowConfig, Table } from "../ui/Table";

export const StyledFretTable = styled.div``;

export const StyledFretFlag = styled.div<{
  $color?: string;
  $opacity?: number;
}>`
  height: 16px;
  width: 16px;
  background: ${(props) => props.$color || "transparent"};
  opacity: ${(props) => props.$opacity || 1};
  border-radius: 100%;
  z-index: 1;
`;

const tableStyles = css`
  width: 100%;
  border-collapse: collapse;
  td,
  th {
    min-width: 18px;
    text-align: center;
  }
  tbody td {
    background-color: #e8dbb8;

    border-right: 1px solid grey;
    &:first-child {
      border-left: 1px solid grey;
    }
    .fret-content {
      min-height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }
    .fret-string {
      height: 1px;
      background: #bbb;
      width: 100%;
      position: absolute;
      margin: auto 0;
    }
  }
  tbody tr {
    &:first-child {
      border-top: 1px solid grey;
    }
    &:last-child {
      border-bottom: 1px solid grey;
    }
  }
`;

const Fretboard: React.FC<Partial<IFretboardProps>> = (props) => {
  const fretMap = getFretMapFromFretboardProps(props);

  const { fretNums, fretDots, strings } = fretMap;

  const rows: IRowConfig[] = [];
  for (let s = 0; s < strings.length; s++) {
    const cols: IColConfig[] = [];
    for (let f = 0; f < strings[s].length; f++) {
      const { color, opacity } = strings[s][f];
      cols.push({
        content: (
          <div className="fret-content">
            <div className="fret-string" />
            <StyledFretFlag $color={color} $opacity={opacity} />
          </div>
        ),
      });
    }
    rows.push({ cols });
  }

  return (
    <StyledFretTable>
      <Table
        thead={fretNums.length ? [{ cols: fretNums }] : undefined}
        tfoot={fretDots.length ? [{ cols: fretDots }] : undefined}
        tbody={rows}
        styles={tableStyles}
      />
    </StyledFretTable>
  );
};

export default Fretboard;
