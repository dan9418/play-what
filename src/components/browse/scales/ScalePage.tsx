import Scale from "@pw-core/models/Scale";
import React from "react";
import styled from 'styled-components';
import { useRootParam } from "../../../state/state";
import BreadcrumbList from "../../_shared/breadcrumb-list/BreadcrumbList";
import { StyledPageBody } from "../../_shared/layout/PageBody";
import PageTitle from "../../_shared/layout/PageTitle";
import { StyledDoublePane, StyledPane } from "../../_shared/layout/Pane";
import DetailsCard from "../_shared/cards/DetailsCard";
import RelatedCard from "../_shared/cards/RelatedCard";
import RootCard from "../_shared/cards/RootCard";
import SoundCard from "../_shared/cards/SoundCard";

const StyledScalePage = styled(StyledPageBody)`
   
`;


const ScalePage: React.FC<any> = props => {

    const [rootParam, setRootParam] = useRootParam();

    const scale = new Scale(props.params.id, { root: rootParam });

    return (
        <StyledScalePage>
            <BreadcrumbList id={scale.id} name={scale.getName()} path={props.path} />
            <PageTitle title={scale.getName()} subtitle="Scale" />
            <StyledDoublePane>
                <StyledPane>
                    <RootCard model={scale} />
                    <RelatedCard model={scale} />
                    <SoundCard model={scale} />
                </StyledPane>
                <StyledPane>
                    <DetailsCard model={scale} />
                </StyledPane>
            </StyledDoublePane>
        </StyledScalePage >
    );
};

export default ScalePage;
