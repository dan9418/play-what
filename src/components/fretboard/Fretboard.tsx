import * as React from "react";
import styled, { css } from "styled-components";
import {
  DEFAULT_FRETBOARD_PROPS,
  getDotsForFret,
  IFretboardProps,
} from "../../core/fretboard/Fretboard.utils";
import { IColConfig, IRowConfig, Table } from "../ui/Table";

import FretFlag from "./FretFlag";

export const StyledFretTable = styled.div``;

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

const Fretboard: React.FC<IFretboardProps> = (userProps) => {
  const props = { ...DEFAULT_FRETBOARD_PROPS, ...userProps };

  const { fretRange, showFretDots, showFretNumbers, tuning, colorMapFn } =
    props;
  const [lo, hi] = fretRange as [number, number];

  const numFrets = hi - lo + 1;
  const numStrings = (tuning as number[]).length;

  const fretNums: number[] = [];
  for (let i = 0; i < numFrets; i++) {
    fretNums.push(lo + i);
  }

  const fretDots: string[] = [];
  for (let i = 0; i < numFrets; i++) {
    fretDots.push(getDotsForFret(lo + i));
  }

  const strings: IRowConfig[] = [];
  for (let s = 0; s < numStrings; s++) {
    const frets: IColConfig[] = [];
    for (let f = lo; f <= hi; f++) {
      frets.push({
        content: (
          <div className="fret-content">
            <div className="fret-string" />
            <FretFlag
              color={(colorMapFn as any)({
                stringIndex: s,
                fretIndex: f,
                ...props,
              })}
              text=""
              opacity={1}
            />
          </div>
        ),
      });
    }
    strings.push({
      cols: frets,
    });
  }

  return (
    <StyledFretTable>
      <Table
        thead={showFretNumbers ? [{ cols: fretNums }] : undefined}
        tfoot={showFretDots ? [{ cols: fretDots }] : undefined}
        tbody={strings}
        styles={tableStyles}
      />
    </StyledFretTable>
  );
};

export default Fretboard;
