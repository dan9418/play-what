import React from "react";
import styled from "styled-components";
import PageLayout from "../../../../layout/PageLayout";
import Card from "../../../../ui/Card";
import { Table } from "../../../../ui/Table";
import { TABLE_STYLES_1 } from "../../../../ui/Table.styles";

const HEAD = [
  {
    cols: ["#", "Harmonics", "Interval", "Min"],
  },
];

const ROWS = [
  { cols: ["1", "1, 2, 4, 8, 16", "P1", 1] },
  { cols: ["2", "17", "m2", 17] },
  { cols: ["3", "9, 8", "M2", 9] },
  { cols: ["4", "19", "m3", 19] },
  { cols: ["5", "5, 10, 20", "M3", 5] },
  { cols: ["6", "21", "P4", 21] },
  { cols: ["7", "11, 22", "TT", 11] },
  { cols: ["8", "23", "TT*", 23] },
  { cols: ["9", "3, 6, 12, 24", "P5", 3] },
  { cols: ["10", "25", "m6", 25] },
  { cols: ["11", "13, 26", "m6*", 13] },
  { cols: ["12", "27", "M6", 27] },
  { cols: ["13", "7, 14, 28", "m7", 7] },
  { cols: ["14", "29", "m7*", 29] },
  { cols: ["15", "15, 30", "M7", 15] },
  { cols: ["16", "31", "M7*", 31] },
];

const StyledPage = styled(PageLayout)``;

const Page: React.FC = () => {
  return (
    <StyledPage title="Intervals vs Harmonics">
      <Card>
        <Table thead={HEAD} tbody={ROWS} styles={TABLE_STYLES_1} />
      </Card>
    </StyledPage>
  );
};

export default Page;
