import React from "react";
import styled from 'styled-components';
import { useRoot } from "../../contexts/PagePropsContext";
import { getModelIdClass, getModelIdText } from "../../core/models/Model.constants";
import DetailsCard from "../cards/DetailsCard";
import GuitarCard from "../cards/GuitarCard";
import RelatedCard from "../cards/RelatedCard";
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

    const root = useRoot();

    const cl = getModelIdClass(props.pageContext.modelType);
    const clText = getModelIdText(props.pageContext.modelType);

    console.log('dpb', props.pageContext.modelType, cl);

    const podList = new cl(props.pageContext.modelId, { root });
    const title = `${podList.name} ${clText}`;

    const subtitle = podList.aliases.length ? `Also known as ${podList.aliases.join(', ')}` : 'Podlist';

    return (
        <StyledPodlistPage>
            <PageTitle title={title} />
            <StyledPane>
                <DetailsCard model={podList} />
                <RootCard />
                <GuitarCard model={podList} />
                <RelatedCard model={podList} />
            </StyledPane>
        </StyledPodlistPage >
    );
};

export default PodlistPage;
