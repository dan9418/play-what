import React from "react";
import styled from 'styled-components';
import Chord from "@pw-core/models/Chord";
import BreadcrumbList from "../../_shared/breadcrumb-list/BreadcrumbList";
import { StyledPageBody } from "../../_shared/layout/PageBody";
import PageTitle from "../../_shared/layout/PageTitle";
import { StyledDoublePane, StyledPane } from "../../_shared/layout/Pane";
import IntervalsCard from "../_shared/cards/IntervalsCard";
import NotesCard from "../_shared/cards/NotesCard";
import RelatedCard from "../_shared/cards/RelatedCard";
import RootCard from "../_shared/cards/RootCard";
import SoundCard from "../_shared/cards/SoundCard";
import ViewerCard from "../_shared/cards/ViewerCard";
import { useRootParam } from "../../../state/state";

const StyledChordPage = styled(StyledPageBody)`

`;

const ChordPage: React.FC<any> = props => {
    const [rootParam, setRootParam] = useRootParam();

    const chord = new Chord(props.params.id, { root: rootParam });

    return (
        <StyledChordPage>
            <BreadcrumbList id={chord.preset.id} name={chord.preset.name} path={props.path} />
            <PageTitle title={chord.preset.name} subtitle={chord.getIntervalListString()} />
            <StyledDoublePane>
                <StyledPane>
                    <RootCard model={chord} />
                    <IntervalsCard model={chord} />
                    <NotesCard model={chord} />
                    <SoundCard model={chord} />
                </StyledPane>
                <StyledPane>
                    <ViewerCard model={chord} />
                    <RelatedCard model={chord} />
                </StyledPane>
            </StyledDoublePane>
        </StyledChordPage >
    );
};

export default ChordPage;
