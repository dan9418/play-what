import React from "react";
import styled from 'styled-components';
import { PodType } from "../../../core/models/Model.constants";
import { CHORD_PRESETS } from "../../../core/models/PodList/Chord/Chord.constants";
import PodListUtils from "../../../core/models/PodList/PodList.utils";
import { useHistory, useIntervalsPreset } from "../../../state/state";
import BreadcrumbList from "../../_shared/breadcrumb-list/BreadcrumbList";
import { StyledPageBody } from "../../_shared/layout/PageBody";
import PageTitle from "../../_shared/layout/PageTitle";
import { StyledDoublePane, StyledPane } from "../../_shared/layout/Pane";
import IntervalsCard from "../_shared/cards/IntervalsCard";
import SoundCard from "../_shared/cards/SoundCard";
import ViewerCard from "../_shared/cards/ViewerCard";
import ChordOptionsCard from "./cards/ChordOptionsCard";
import ChordRelatedCard from "./cards/ChordRelatedCard";

const StyledChordPage = styled(StyledPageBody)`

`;


const ChordPage: React.FC<any> = props => {
    console.log('dpb props', props);

    const chord = useIntervalsPreset(CHORD_PRESETS, props.params.id, true);

    const history = useHistory(chord.id, chord.name, props.path);

    return (
        <StyledChordPage>
            <BreadcrumbList />
            <PageTitle title={chord.name} subtitle={PodListUtils.getName(chord.value, PodType.Interval)} />
            <StyledDoublePane>
                <StyledPane>
                    <IntervalsCard />
                    <SoundCard chord={chord} />
                    <ChordRelatedCard chord={chord} />
                </StyledPane>
                <StyledPane>
                    <ViewerCard />
                    <ChordOptionsCard chord={chord} />
                </StyledPane>
            </StyledDoublePane>
        </StyledChordPage >
    );
};

export default ChordPage;
