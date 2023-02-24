import React from "react";
import styled from "styled-components";
import { IChordPreset } from "../../core/models/Chord.presets";
import { IScalePreset } from "../../core/models/Scale.presets";
import Card, { ICardProps } from "../ui/Card";
import CollectionTable from "./CollectionTable";

interface ICollectionCardProps extends ICardProps {
  data: (IChordPreset | IScalePreset)[];
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
