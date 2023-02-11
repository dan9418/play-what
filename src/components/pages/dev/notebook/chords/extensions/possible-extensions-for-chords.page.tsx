import React from "react";
import styled from "styled-components";
import PageLayout from "../../../../../layout/PageLayout";
import Card from "../../../../../ui/Card";
import { Table } from "../../../../../ui/Table";
import { TABLE_STYLES_1 } from "../../../../../ui/Table.styles";

const StyledExtensionsPage = styled(PageLayout)``;

const HEAD = [
  { cols: ["", "b9", "9", "#9", "11", "#11", "b13", "13", "b5", "#5"] },
];
const BODY = [
  { cols: ["Dom", "X", "X", "X", "", "X", "X", "X", "X", "X"] },
  { cols: ["min", "", "X", "", "X", "", "", "X", "", ""] },
  { cols: ["Maj", "?", "X", "", "X", "X", "", "X", "", "X"] },
  { cols: ["M6", "?", "?", "X", "X", "X", "", "", "", ""] },
  { cols: ["m6", "", "?", "", "", "", "", "", "", ""] },
  { cols: ["m/M", "", "X", "", "", "", "", "", "", ""] },
];

const Page: React.FC<any> = () => {
  return (
    <StyledExtensionsPage title="Possible Extensions For Chords">
      <Card title="">
        <Table
          headerColIndicies={[0]}
          thead={HEAD}
          tbody={BODY}
          styles={TABLE_STYLES_1}
        />
      </Card>
    </StyledExtensionsPage>
  );
};

export default Page;
