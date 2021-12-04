import React from "react";
import styled from 'styled-components';
import { PodType } from "../../../core/models/Model.constants";
import { CHORD_PRESETS } from "../../../core/models/PodList/Chord/Chord.constants";
import PodListUtils from "../../../core/models/PodList/PodList.utils";
import BreadcrumbList from "../shared/breadcrumb-list/BreadcrumbList";
import { StyledPageBody } from "../shared/PageBody";
import PageControls from "../shared/PageTitle";
import ChordDetailsCard from "./cards/ChordDetailsCard";

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

    const chord = CHORD_PRESETS.find(c => c.id.toLowerCase() === props.params.id)
    return (
        <StyledChordPage>
            <BreadcrumbList path={props.path} />
            <PageControls title={chord.name} subtitle={PodListUtils.getName(chord.value, PodType.Interval)} />
            <div className="grid">
                <ChordDetailsCard chord={chord} />
            </div>
        </StyledChordPage >
    );
};

export default ChordPage;
