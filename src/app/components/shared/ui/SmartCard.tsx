import React from "react";
import styled from "styled-components";
import Card, { StyledCard } from "./Card";
import { ITableConfig, Table } from "./Table";

export const StyledSmartCard = styled.div`
  overflow-x: scroll;
  ${StyledCard} {
    min-width: 1024px;
    margin-top: 16px;
    > table {
      table-layout: fixed;
      width: 100%;
      > tbody > tr > td {
        vertical-align: top;
      }
    }
  }
`;

export interface ICardConfig {
  title: string;
  table: ITableConfig;
}

interface ISmartCardProps {
  cards: ICardConfig[];
}

const SmartCard: React.FC<ISmartCardProps> = ({ cards }) => {
  return (
    <StyledSmartCard>
      {cards.map((card) => {
        return (
          <Card title={card.title}>
            <Table {...card.table} />
          </Card>
        );
      })}
    </StyledSmartCard>
  );
};

export default SmartCard;
