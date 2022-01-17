import Note from "@pw-core/models/Note";
import React from "react";
import styled from 'styled-components';
import DetailsCard from "../../components/browse/_shared/cards/DetailsCard";
import RelatedCard from "../../components/browse/_shared/cards/RelatedCard";
import SoundCard from "../../components/browse/_shared/cards/SoundCard";
import { StyledPageBody } from "../../components/_shared/layout/PageBody";
import PageTitle from "../../components/_shared/layout/PageTitle";
import { StyledDoublePane, StyledPane } from "../../components/_shared/layout/Pane";
import Card from "../../components/_shared/ui/Card";
import { NOTE_PRESET_MAP } from "../../core/models/Model.presets";

const StyledNotePage = styled(StyledPageBody)`
    
`;


const NotePage: React.FC<any> = props => {
    const notePreset = NOTE_PRESET_MAP.get(props.params.id);
    const note = new Note(notePreset.value);

    return (
        <StyledNotePage>
            <PageTitle title={note.name} subtitle="Note" />
            <StyledDoublePane>
                <StyledPane>
                    <Card title="Frequency" />
                    <RelatedCard model={note} />
                    <SoundCard model={note} />
                </StyledPane>
                <StyledPane>
                    <DetailsCard model={note} />
                </StyledPane>
            </StyledDoublePane>
        </StyledNotePage >
    );
};

export default NotePage;
