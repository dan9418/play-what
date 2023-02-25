import React from "react";
import styled from "styled-components";
import { getNameFromId } from "../../../../../core/models/Interval.utils";
import { IntervalId } from "../../../../../core/models/Model.constants";
import PageLayout from "../../../../layout/PageLayout";
import Card from "../../../../ui/Card";
import { Table } from "../../../../ui/Table";
import { TABLE_STYLES_1 } from "../../../../ui/Table.styles";

const FOOTERS = [
  {
    cols: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
  },
];

const ROWS = [
  {
    cols: [
      "",
      "",
      "",
      getNameFromId(IntervalId.A2),
      "",
      getNameFromId(IntervalId.A3),
      getNameFromId(IntervalId.A4),
      "",
      getNameFromId(IntervalId.A5),
      "",
      getNameFromId(IntervalId.A6),
      "",
    ],
  },
  {
    cols: [
      getNameFromId(IntervalId.P1),
      getNameFromId(IntervalId.m2),
      getNameFromId(IntervalId.M2),
      getNameFromId(IntervalId.m3),
      getNameFromId(IntervalId.M3),
      getNameFromId(IntervalId.P4),
      "",
      getNameFromId(IntervalId.P5),
      getNameFromId(IntervalId.m6),
      getNameFromId(IntervalId.M6),
      getNameFromId(IntervalId.m7),
      getNameFromId(IntervalId.M7),
    ],
  },
  {
    cols: [
      "",
      "",
      getNameFromId(IntervalId.d3),
      "",
      getNameFromId(IntervalId.d4),
      "",
      getNameFromId(IntervalId.d5),
      getNameFromId(IntervalId.d6),
      "",
      getNameFromId(IntervalId.d7),
      "",
      "",
    ],
  },
];

const StyledPage = styled(PageLayout)``;

const Page: React.FC = () => {
  return (
    <StyledPage title="Intervals vs Semitones">
      <Card>
        <Table tfoot={FOOTERS} tbody={ROWS} styles={TABLE_STYLES_1} />
      </Card>
    </StyledPage>
  );
};

export default Page;
