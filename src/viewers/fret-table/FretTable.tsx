import * as React from "react";
import styled, { css } from "styled-components";
import { IColConfig, IRowConfig, Table } from "../../components/ui/Table";
import {
  ITuning,
  TuningId,
  TUNING_PRESET_MAP,
} from "../fretboard/Fretboard.tuning";
import { getDotsForFret } from "../fretboard/Fretboard.utils";

interface IFretTableProps {
  fretRange?: [number, number];
  tuning?: ITuning;
}

const DEFAULT_FRET_TABLE_PROPS: IFretTableProps = {
  fretRange: [0, 12],
  tuning: TUNING_PRESET_MAP.get(TuningId.Standard) as ITuning,
};

const StyledFretTable = styled.div``;

const tableStyles = css`
  width: 100%;
  border-collapse: collapse;
  td,
  th {
    min-width: 32px;

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
    .fret-flag {
      height: 16px;
      width: 16px;
      background: red;
      border-radius: 100%;
      z-index: 1;
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

const FretTable: React.FC<IFretTableProps> = (userProps) => {
  const props = { ...DEFAULT_FRET_TABLE_PROPS, ...userProps };

  const [lo, hi] = props.fretRange as [number, number];
  const numFrets = hi - lo + 1;
  const numStrings = (props.tuning as ITuning).value.length;

  const fretNums: number[] = [];
  for (let i = 0; i < numFrets; i++) {
    fretNums.push(lo + i);
  }

  const fretDots: string[] = [];
  for (let i = 0; i < numFrets; i++) {
    fretDots.push(getDotsForFret(lo + i));
  }

  const strings: IRowConfig[] = [];
  for (let i = 0; i < numStrings; i++) {
    const frets: IColConfig[] = [];
    for (let i = 0; i < numFrets; i++) {
      frets.push({
        content: (
          <div className="fret-content">
            <div className="fret-string" />
            <div className="fret-flag" />
          </div>
        ),
      });
    }
    strings.push({
      cols: frets,
    });
  }

  return (
    <StyledFretTable className="fret-table">
      <Table
        thead={[{ cols: fretNums }]}
        tfoot={[{ cols: fretDots }]}
        tbody={strings}
        styles={tableStyles}
      />
    </StyledFretTable>
  );
};

export default FretTable;
