import Scale from "@pw-core/models/Scale";
import React from "react";
import styled from 'styled-components';
import { useRoot } from "../../contexts/PagePropsContext";
import DetailsCard from "../cards/DetailsCard";
import GuitarCard from "../cards/GuitarCard";
import ModeCard from "../cards/ModeCard";
import RelatedCard from "../cards/RelatedCard";
import RomanNumeralsCard from "../cards/RomanNumeralsCard";
import RootCard from "../cards/RootCard";
import { StyledPageBody } from "../layout/PageBody";
import PageTitle from "../layout/PageTitle";
import { StyledPane } from "../layout/Pane";

const StyledScalePage = styled(StyledPageBody)`
   
`;


const ScalePage: React.FC<any> = props => {

    const root = useRoot();
    const scale = new Scale(props.pageContext.modelId, { root });

    const subtitle = scale.aliases.length ? `Also known as the ${scale.aliases.join('/')} Scale` : 'Scale';

    return (
        <StyledScalePage>
            <PageTitle title={scale.name} subtitle={subtitle} />
            <StyledPane>
                <DetailsCard model={scale} />
                <RootCard />
                <RomanNumeralsCard model={scale} />
                <ModeCard model={scale} />
                <GuitarCard model={scale} />
                <RelatedCard model={scale} />
            </StyledPane>
        </StyledScalePage >
    );
};

export default ScalePage;
