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
    background-color: white;
  }
`;

const FretTable: React.FC<IFretTableProps> = (userProps) => {
  const props = { ...DEFAULT_FRET_TABLE_PROPS, ...userProps };

  const [lo, hi] = props.fretRange;
  const numFrets = hi - lo + 1;
  const numStrings = props.tuning.value.length;

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
        content: "x",
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
