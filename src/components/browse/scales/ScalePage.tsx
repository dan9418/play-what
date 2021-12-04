import React from "react";
import styled from 'styled-components';
import { PodType } from "../../../core/models/Model.constants";
import PodListUtils from "../../../core/models/PodList/PodList.utils";
import { SCALE_PRESETS } from "../../../core/models/PodList/Scale/Scale.constants";
import BreadcrumbList from "../../_shared/breadcrumb-list/BreadcrumbList";
import { StyledPageBody } from "../../_shared/layout/PageBody";
import PageTitle from "../../_shared/layout/PageTitle";


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

    const scale = SCALE_PRESETS.find(c => c.id.toLowerCase() === props.params.id)
    return (
        <StyledScalePage>
            <BreadcrumbList path={props.path} />
            <PageTitle title={scale.name} subtitle={PodListUtils.getName(scale.value, PodType.Interval)} />
            <div className="grid">

            </div>
        </StyledScalePage >
    );
};

export default ScalePage;
