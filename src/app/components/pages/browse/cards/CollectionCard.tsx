import React from "react";
import styled from "styled-components";
import { PresetType } from "../../../../../core/Core.constants";
import { AnyPodListPreset } from "../../../../../core/Core.derived";
import Card, { ICardProps } from "../../../shared/ui/Card";
import CollectionTable from "./CollectionTable";

export interface ICollectionCardProps extends ICardProps {
  data: AnyPodListPreset[];
  description?: string;
  presetType: PresetType;
}

const StyledCollectionCard = styled(Card)`
  p {
    margin: 16px 0;
  }
`;

const CollectionCard: React.FC<ICollectionCardProps> = ({
  description,
  data,
  presetType,
  ...rest
}) => {
  return (
    <StyledCollectionCard {...rest}>
      {description && <p>{description}</p>}
      <CollectionTable presetType={presetType} data={data} />
    </StyledCollectionCard>
  );
};

export default CollectionCard;
