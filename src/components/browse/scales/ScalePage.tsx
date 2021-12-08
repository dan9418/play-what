import React from "react";
import styled from 'styled-components';
import { ModelId } from "../../../core/models/Model.constants";
import ModelUtils from "../../../core/models/Model.utils";
import { useScalePreset } from "../../../state/state";
import BreadcrumbList from "../../_shared/breadcrumb-list/BreadcrumbList";
import { StyledPageBody } from "../../_shared/layout/PageBody";
import PageTitle from "../../_shared/layout/PageTitle";
import { StyledDoublePane, StyledPane } from "../../_shared/layout/Pane";
import IntervalsCard from "../_shared/cards/IntervalsCard";
import RelatedCard from "../_shared/cards/RelatedCard";
import RootCard from "../_shared/cards/RootCard";
import SoundCard from "../_shared/cards/SoundCard";
import ViewerCard from "../_shared/cards/ViewerCard";

const StyledScalePage = styled(StyledPageBody)`
   
`;


const ScalePage: React.FC<any> = props => {
    const scale = useScalePreset(props.params.id);

    return (
        <StyledScalePage>
            <BreadcrumbList id={scale.id} name={scale.name} path={props.path} />
            <PageTitle title={scale.name} subtitle={ModelUtils.getName(scale.value, ModelId.Interval)} />
            <StyledDoublePane>
                <StyledPane>
                    <RootCard />
                    <IntervalsCard />
                    <SoundCard />
                </StyledPane>
                <StyledPane>
                    <ViewerCard />
                    <RelatedCard />
                </StyledPane>
            </StyledDoublePane>
        </StyledScalePage >
    );
};

export default ScalePage;
