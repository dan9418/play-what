import React from "react";
import styled from "styled-components";
import { PresetType } from "../../../../core/Core.constants";
import ColumnManager from "../../shared/layout/ColumnManager";
import PageLayout from "../../shared/layout/PageLayout";
import CollectionCard, { ICollectionCardProps } from "./cards/CollectionCard";

const StyledCollectionPage = styled(PageLayout)`
  .intro {
    padding: 0 16px;
    margin-bottom: 16px;
  }
`;

export interface ICollectionPageCard
  extends Omit<ICollectionCardProps, "presetType"> {}

export interface ICollectionPageProps {
  title: string;
  subtitle: string;
  intro: string;
  presetType: PresetType;
  cards: ICollectionPageCard[];
}

const CollectionPage: React.FC<ICollectionPageProps> = ({
  title,
  subtitle,
  intro,
  presetType,
  cards,
}) => {
  return (
    <StyledCollectionPage title={title} subtitle={subtitle}>
      <div>
        <p className="intro">{intro}</p>
      </div>
      <ColumnManager>
        <ColumnManager>
          {cards.map((card) => {
            const { title, description, data } = card;
            return (
              <CollectionCard
                presetType={presetType}
                title={title}
                description={description}
                data={data}
              />
            );
          })}
        </ColumnManager>
      </ColumnManager>
    </StyledCollectionPage>
  );
};

export default CollectionPage;
