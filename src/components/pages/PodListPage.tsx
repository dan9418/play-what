import React from "react";
import styled from 'styled-components';
import { useRoot } from "../../contexts/PagePropsContext";
import { getModelIdClass, getModelIdText, ModelType } from "../../core/models/Model.constants";
import DetailsCard from "../cards/DetailsCard";
import GuitarCard from "../cards/GuitarCard";
import ModeCard from "../cards/ModeCard";
import RelatedCard from "../cards/RelatedCard";
import RomanNumeralsCard from "../cards/RomanNumeralsCard";
import RootCard from "../cards/RootCard";
import { StyledPageBody } from "../layout/PageBody";
import PageTitle from "../layout/PageTitle";
import { StyledPane } from "../layout/Pane";

const StyledPodlistPage = styled(StyledPageBody)`

`;

interface IPodListPageProps {
    pageContext: any;
}

const PodlistPage: React.FC<IPodListPageProps> = props => {

    const { modelType, modelId } = props.pageContext;
    const root = useRoot();

    const cl = getModelIdClass(modelType);
    const clText = getModelIdText(modelType);

    const podList = new cl(modelId, { root });
    const title = `${podList.name} ${clText}`;

    //const subtitle = podList.aliases.length ? `Also known as ${podList.aliases.join(', ')}` : 'Podlist';



    return (
        <StyledPodlistPage>
            <PageTitle title={title} action={<RootCard />} />
            <StyledPane>
                <DetailsCard model={podList} />

                {modelType === ModelType.Scale && <RomanNumeralsCard model={podList} />}
                {modelType === ModelType.Scale && <ModeCard model={podList} />}
                <GuitarCard model={podList} />
                <RelatedCard model={podList} />
            </StyledPane>
        </StyledPodlistPage >
    );
};

export default PodlistPage;
