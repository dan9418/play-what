import React from "react";
import styled from "styled-components";
import { useRoot } from "../../../contexts/PagePropsContext";
import {
  getModelIdClass,
  getModelIdText,
  ModelType,
} from "../../../core/models/Model.constants";
import GrandStaff from "../../../viewers/grand-staff/GrandStaff";
import DetailsCard from "../../cards/DetailsCard";
import GuitarCard from "../../cards/GuitarCard";
import ModeCard from "../../cards/ModeCard";
import RelatedCard from "../../cards/RelatedCard";
import RomanNumeralsCard from "../../cards/RomanNumeralsCard";
import RootCard from "../../cards/RootCard";
import ColumnManager from "../../column-manager/ColumnManager";
import PageLayout from "../../layout/PageLayout";

const StyledPodlistPage = styled(PageLayout)``;

interface IPodListPageProps {
  pageContext: any;
}

const PodListPage: React.FC<IPodListPageProps> = (props) => {
  const { modelType, modelId } = props.pageContext;
  const root = useRoot();

  const cl = getModelIdClass(modelType);
  const clText = getModelIdText(modelType);

  const podList = new cl(modelId, { root });
  const title = `${podList.name} ${clText}`;

  //const subtitle = podList.aliases.length ? `Also known as ${podList.aliases.join(', ')}` : 'Podlist';

  return (
    <StyledPodlistPage title={title}>
      <ColumnManager>
        <ColumnManager tablet={["300px", "auto"]}>
          <RootCard />
          <DetailsCard model={podList} />
        </ColumnManager>

        {modelType === ModelType.Scale && <RomanNumeralsCard model={podList} />}
        {modelType === ModelType.Scale && <ModeCard model={podList} />}
        <GrandStaff model={podList} />
        <ColumnManager>
          <GuitarCard model={podList} />
        </ColumnManager>
        <RelatedCard model={podList} />
      </ColumnManager>
    </StyledPodlistPage>
  );
};

export default PodListPage;
