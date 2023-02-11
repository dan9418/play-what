import React from "react";
import styled from "styled-components";
import PageLayout from "../../../../layout/PageLayout";
import SmartCard from "../../../../ui/SmartCard";
import { TABLE_STYLES_1 } from "../../../../ui/Table.styles";

const HEAD = [
  {
    cols: ["b9", "9", "#9", "b11", "11", "#11", "b13", "13", "#13"],
  },
];

const ROWS = [
  {
    cols: ["m2", "M2", "m3", "M3", "P4", "TT", "m6", "M6", "m7"],
  },
];

const StyledPage = styled(PageLayout)``;

const Page: React.FC = () => {
  return (
    <StyledPage title="Extended Intervals vs Standard Intervals">
      <SmartCard
        cards={[
          {
            title: "Degrees",
            table: {
              tbody: [
                { cols: [1, 2, 3, 4, 5, 6, 7] },
                { cols: [8, 9, 10, 11, 12, 13, 14] },
              ],
              styles: TABLE_STYLES_1,
            },
          },
          {
            title: "Intervals",
            table: {
              thead: HEAD,
              tbody: ROWS,
              styles: TABLE_STYLES_1,
            },
          },
        ]}
      />
    </StyledPage>
  );
};

export default Page;
