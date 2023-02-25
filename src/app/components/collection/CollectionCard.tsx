import React from "react";
import styled from "styled-components";
import { IChordPreset } from "../../core/models/Chord.constants";
import { AnyPodListPreset } from "../../core/models/Model.derived";
import { IScalePreset } from "../../core/models/Scale.constants";
import Card, { ICardProps } from "../ui/Card";
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
