import * as React from "react";
import styled, { css } from "styled-components";
import { IColConfig, IRowConfig, Table } from "../../components/ui/Table";
import FretFlag from "./FretFlag";
import { IFretTableProps } from "./FretTable.utils";

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

const FretTable: React.FC<IFretTableProps> = (props) => {
  const { fretboardConfig, fretMap } = props;
  const { fretDotLabels, fretNumberLabels, stringLabels } = fretboardConfig;

  const strings: IRowConfig[] = [];
  for (let s = 0; s < fretMap.length; s++) {
    const frets: IColConfig[] = [];
    for (let f = 0; f < fretMap[s].length; f++) {
      frets.push({
        content: (
          <div className="fret-content">
            <div className="fret-string" />
            {fretMap ? <FretFlag fretConfig={fretMap[s][f]} /> : undefined}
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
        thead={[{ cols: fretNumberLabels }]}
        tfoot={[{ cols: fretDotLabels }]}
        tbody={strings}
        styles={tableStyles}
      />
    </StyledFretTable>
  );
};

export default FretTable;
