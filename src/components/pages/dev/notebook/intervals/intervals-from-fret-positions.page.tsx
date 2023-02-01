import React from "react";
import styled from "styled-components";
import PageLayout from "../../../../layout/PageLayout";
import SmartCard from "../../../../ui/SmartCard";
import { FRET_POSITION_TABLE_STYLES } from "../../../../ui/Table.styles";

const HEAD = [
  {
    cols: ["", "-3", "-2", "-1", "0", "+1", "+2", "+3"],
  },
];

const ROW_HEAD = ["e", "B", "G", "D", "A", "E"];

const BASIC_DATA = [
  [
    ["M6", "m7", "M7", "x", "m2", "M2", "m3"],
    ["M3", "P4", "TT", "P5", "m6", "M6", "m7"],
    ["x", "m2", "M2", "m3", "M3", "P4", "TT"],
    ["P5", "m6", "M6", "m7", "M7", "x", "m2"],
    ["M2", "m3", "M3", "P4", "TT", "P5", "m6"],
    ["M6", "m7", "M7", "X", "m2", "M2", "m3"],
  ],
  [
    ["M3", "P4", "TT", "P5", "m6", "M6", "m7"],
    ["M7", "x", "m2", "M2", "m3", "M3", "P4"],
    ["P5", "m6", "M6", "m7", "M7", "x", "m2"],
    ["M2", "m3", "M3", "P4", "TT", "P5", "m6"],
    ["M6", "m7", "M7", "X", "m2", "M2", "m3"],
    ["M3", "P4", "TT", "P5", "m6", "M6", "m7"],
  ],
  [
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "X", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
  ],
  [
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "X", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
  ],
  [
    ["", "", "", "", "", "", ""],
    ["", "", "", "X", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
  ],
  [
    ["", "", "", "X", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
  ],
];

const StyledPage = styled(PageLayout)``;

const getCards = () => {
  return BASIC_DATA.map((d, i) => {
    return {
      title: `${ROW_HEAD[5 - i]} Root`,
      table: {
        thead: HEAD,
        styles: FRET_POSITION_TABLE_STYLES,
        tbody: d.map((str, j) => {
          return {
            cols: [ROW_HEAD[j], ...str],
          };
        }),
        headerColIndicies: [0],
      },
    };
  });
};

const Page: React.FC = () => {
  return (
    <StyledPage title="Intervals From Fret Positions">
      <SmartCard cards={getCards()} />
    </StyledPage>
  );
};

export default Page;
