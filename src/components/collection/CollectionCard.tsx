import React from "react";
import styled from "styled-components";
import Card, { ICardProps } from "../ui/Card";
import CollectionTable from "./CollectionTable";

interface ICollectionCardProps extends ICardProps {
  data: any[];
  description?: string;
}

const StyledCollectionCard = styled(Card)`
  p {
    margin: 16px 0;
  }
`;

const CollectionCard: React.FC<ICollectionCardProps> = ({
  description,
  data,
  ...rest
}) => {
  return (
    <StyledCollectionCard {...rest}>
      {description && <p>{description}</p>}
      <CollectionTable data={data} />
    </StyledCollectionCard>
  );
};

export default CollectionCard;
