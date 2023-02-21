import React from "react";
import styled from "styled-components";
import { ModelPageProps, useRoot } from "../../../contexts/PagePropsContext";
import { PresetType } from "../../../core/models/Model.constants";
import RootCard from "../../cards/RootCard";
import ColumnManager from "../../column-manager/ColumnManager";
import PageLayout from "../../layout/PageLayout";

const StyledPodlistPage = styled(PageLayout)``;

const PodListPage: React.FC<ModelPageProps> = (props) => {
  const { presetType, presetId } = props.pageContext;
  const root = useRoot();

  const title = `PODLIST`;

  //const subtitle = podList.aliases.length ? `Also known as ${podList.aliases.join(', ')}` : 'Podlist';

  return (
    <StyledPodlistPage title={title}>
      <ColumnManager>
        <ColumnManager tablet={["300px", "auto"]}>
          <RootCard />
          {/*<DetailsCard model={podList} />*/}
        </ColumnManager>
        {
          presetType === PresetType.Scale &&
            null /*<RomanNumeralsCard model={podList} />*/
        }
        {
          presetType === PresetType.Scale &&
            null /*<ModeCard model={podList} />*/
        }
        {/*<GuitarCard model={podList} />*/}
        {/*<RelatedCard model={podList} />*/}
      </ColumnManager>
    </StyledPodlistPage>
  );
};

export default PodListPage;
