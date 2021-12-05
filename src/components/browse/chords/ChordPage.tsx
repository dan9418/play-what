import React from "react";
import styled from 'styled-components';
import { PodType } from "../../../core/models/Model.constants";
import { CHORD_PRESETS } from "../../../core/models/PodList/Chord/Chord.constants";
import PodListUtils from "../../../core/models/PodList/PodList.utils";
import { useIntervalsPreset } from "../../../state/state";
import BreadcrumbList from "../../_shared/breadcrumb-list/BreadcrumbList";
import { StyledPageBody } from "../../_shared/layout/PageBody";
import PageTitle from "../../_shared/layout/PageTitle";
import IntervalsCard from "../_shared/cards/IntervalsCard";
import SoundCard from "../_shared/cards/SoundCard";
import ViewerCard from "../_shared/cards/ViewerCard";
import ChordOptionsCard from "./cards/ChordOptionsCard";
import ChordRelatedCard from "./cards/ChordRelatedCard";

const StyledChordPage = styled(StyledPageBody)`
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


const ChordPage: React.FC<any> = props => {
    console.log('dpb props', props);

    const chord = useIntervalsPreset(CHORD_PRESETS, props.params.id, true);

    return (
        <StyledChordPage>
            <BreadcrumbList path={props.path} />
            <PageTitle title={chord.name} subtitle={PodListUtils.getName(chord.value, PodType.Interval)} />
            <div className="grid">
                <IntervalsCard />
                <ViewerCard />
                <ChordOptionsCard chord={chord} />
                <SoundCard chord={chord} />
                <ChordRelatedCard chord={chord} />
            </div>
        </StyledChordPage >
    );
};

export default ChordPage;
