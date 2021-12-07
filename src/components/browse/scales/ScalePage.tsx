import React from "react";
import styled from 'styled-components';
import { NumberParam, useQueryParam } from "use-query-params";
import { ModelId } from "../../../core/models/Model.constants";
import PodListUtils from "../../../core/models/PodList/PodList.utils";
import { SCALE_PRESETS } from "../../../core/models/PodList/Scale/Scale.constants";
import { useIntervalsPreset } from "../../../state/state";
import BreadcrumbList from "../../_shared/breadcrumb-list/BreadcrumbList";
import { StyledPageBody } from "../../_shared/layout/PageBody";
import PageTitle from "../../_shared/layout/PageTitle";
import { StyledDoublePane, StyledPane } from "../../_shared/layout/Pane";
import IntervalsCard from "../_shared/cards/IntervalsCard";
import RelatedCard from "../_shared/cards/RelatedCard";
import SoundCard from "../_shared/cards/SoundCard";
import ViewerCard from "../_shared/cards/ViewerCard";


const StyledScalePage = styled(StyledPageBody)`
   
`;


const ScalePage: React.FC<any> = props => {
    console.log('dpb props', props);

    const [num, setNum] = useQueryParam("root", NumberParam);

    console.log('dpb root', num);

    const scale = useIntervalsPreset(SCALE_PRESETS, props.params.id, true);

    return (
        <StyledScalePage>
            <BreadcrumbList id={scale.id} name={scale.name} path={props.path} />
            <PageTitle title={scale.name} subtitle={PodListUtils.getName(scale.value, ModelId.Interval)} />
            <StyledDoublePane>
                <StyledPane>
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
