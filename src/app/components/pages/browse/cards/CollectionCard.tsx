import React from "react";
import styled from "styled-components";
import { AnyPodListPreset } from "../../../../../core/Core.derived";
import Card, { ICardProps } from "../../../shared/ui/Card";

import CollectionTable from "./CollectionTable";

interface ICollectionCardProps extends ICardProps {
  data: AnyPodListPreset[];
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
