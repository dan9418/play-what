import { css } from "styled-components";

export const TABLE_STYLES_1 = css`
  width: 100%;
  border-collapse: collapse;
  td,
  th {
    padding: 4px;
    text-align: center;
  }
`;

export const FRET_POSITION_TABLE_STYLES = css`
  border-collapse: collapse;
  width: unset !important;
  margin: auto;
  td,
  th {
    height: 48px;
    width: 48px;
    text-align: center;
    vertical-align: middle !important;
  }
  td {
    border: 1px solid black;
  }
`;
