import React from "react";
import styled from "styled-components";
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
    cols: [""],
  },
];

const StyledPage = styled(PageLayout)``;

const Page: React.FC = () => {
  return (
    <StyledPage title="Intervals From Fret Positions">
      <Card>
        <Table tfoot={FOOTERS} tbody={ROWS} styles={TABLE_STYLES_1} />
      </Card>
    </StyledPage>
  );
};

export default Page;
