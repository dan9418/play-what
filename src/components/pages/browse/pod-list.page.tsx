import React from "react";
import styled from "styled-components";
import { ModelPageProps, useRoot } from "../../../contexts/PagePropsContext";
import {
  getModelIdClass,
  PresetType,
} from "../../../core/models/Model.constants";
import DetailsCard from "../../cards/DetailsCard";
import GuitarCard from "../../cards/GuitarCard";
import ModeCard from "../../cards/ModeCard";
import RelatedCard from "../../cards/RelatedCard";
import RomanNumeralsCard from "../../cards/RomanNumeralsCard";
import RootCard from "../../cards/RootCard";
import ColumnManager from "../../column-manager/ColumnManager";
import PageLayout from "../../layout/PageLayout";

const StyledPodlistPage = styled(PageLayout)``;

const PodListPage: React.FC<ModelPageProps> = (props) => {
  const { presetType, presetId } = props.pageContext;
  const root = useRoot();

  const cl = getModelIdClass(presetType);
  const clText = presetType;

  const podList = new cl(presetId, { root });
  const title = `${podList.name} ${clText}`;

  //const subtitle = podList.aliases.length ? `Also known as ${podList.aliases.join(', ')}` : 'Podlist';

  return (
    <StyledPodlistPage title={title}>
      <ColumnManager>
        <ColumnManager tablet={["300px", "auto"]}>
          <RootCard />
          <DetailsCard model={podList} />
        </ColumnManager>

        {presetType === PresetType.Scale && (
          <RomanNumeralsCard model={podList} />
        )}
        {presetType === PresetType.Scale && <ModeCard model={podList} />}
        <ColumnManager>
          <GuitarCard model={podList} />
        </ColumnManager>
        <RelatedCard model={podList} />
      </ColumnManager>
    </StyledPodlistPage>
  );
};

export default PodListPage;
