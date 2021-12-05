import React from "react";
import styled from 'styled-components';
import { PodType } from "../../../core/models/Model.constants";
import PodListUtils from "../../../core/models/PodList/PodList.utils";
import { SCALE_PRESETS } from "../../../core/models/PodList/Scale/Scale.constants";
import { useIntervalsPreset } from "../../../state/state";
import BreadcrumbList from "../../_shared/breadcrumb-list/BreadcrumbList";
import { StyledPageBody } from "../../_shared/layout/PageBody";
import PageTitle from "../../_shared/layout/PageTitle";
import IntervalsCard from "../_shared/cards/IntervalsCard";
import ViewerCard from "../_shared/cards/ViewerCard";


const StyledScalePage = styled(StyledPageBody)`
    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
        padding: 16px;

        .card {
            background: white;
            height: 100%;
            width: 100%;
            border-radius: 16px;
            padding: 16px;

            label {
                font-weight: bold;
                margin-right: 4px;
            }
        }
    }
`;


const ScalePage: React.FC<any> = props => {
    console.log('dpb props', props);

    const scale = useIntervalsPreset(SCALE_PRESETS, props.params.id, true);

    return (
        <StyledScalePage>
            <BreadcrumbList path={props.path} />
            <PageTitle title={scale.name} subtitle={PodListUtils.getName(scale.value, PodType.Interval)} />
            <div className="grid">
                <IntervalsCard />
                <ViewerCard />
            </div>
        </StyledScalePage >
    );
};

export default ScalePage;
