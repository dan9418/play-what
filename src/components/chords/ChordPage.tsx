import Chord from "@pw-core/models/Chord";
import React from "react";
import styled from 'styled-components';
import Note from "../../core/models/Note";
import BreadcrumbList from "../_shared/breadcrumb-list/BreadcrumbList";
import DetailsCard from "../_shared/cards/DetailsCard";
import GuitarCard from "../_shared/cards/GuitarCard";
import RelatedCard from "../_shared/cards/RelatedCard";
import SoundCard from "../_shared/cards/SoundCard";
import { StyledPageBody } from "../_shared/layout/PageBody";
import PageTitle from "../_shared/layout/PageTitle";
import { StyledPane } from "../_shared/layout/Pane";

const StyledChordPage = styled(StyledPageBody)`

`;

const ChordPage: React.FC<any> = props => {

    const root = props.pageContext.rootId ? Note.fromId(props.pageContext.rootId) : undefined;

    const chord = new Chord(props.pageContext.modelId, { root });

    return (
        <StyledChordPage>
            <BreadcrumbList id={chord.id} name={chord.name} path={props.path} />
            <PageTitle title={chord.name} subtitle="Chord" />
            <StyledPane>
                <DetailsCard model={chord} />
                <GuitarCard model={chord} />
                <RelatedCard model={chord} />
                <SoundCard model={chord} />
            </StyledPane>
        </StyledChordPage >
    );
};

export default ChordPage;
