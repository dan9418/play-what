import Note from "@pw-core/models/Note";
import React from "react";
import styled from 'styled-components';
import BreadcrumbList from "../../_shared/breadcrumb-list/BreadcrumbList";
import { StyledPageBody } from "../../_shared/layout/PageBody";
import PageTitle from "../../_shared/layout/PageTitle";
import { StyledDoublePane, StyledPane } from "../../_shared/layout/Pane";
import Card from "../../_shared/ui/Card";
import DetailsCard from "../_shared/cards/DetailsCard";
import OctaveCard from "../_shared/cards/OctaveCard";
import RelatedCard from "../_shared/cards/RelatedCard";
import SoundCard from "../_shared/cards/SoundCard";

const StyledNotePage = styled(StyledPageBody)`
    
`;


const NotePage: React.FC<any> = props => {
    const note = new Note(props.params.id);

    return (
        <StyledNotePage>
            <BreadcrumbList id={note.id} name={note.getName()} path={props.path} />
            <PageTitle title={note.name} subtitle="Note" />
            <StyledDoublePane>
                <StyledPane>
                    <Card title="Frequency" />
                    <OctaveCard model={note} />
                </StyledPane>
                <StyledPane>
                    <DetailsCard model={note} />
                    <RelatedCard model={note} />
                    <SoundCard model={note} />
                </StyledPane>
            </StyledDoublePane>
        </StyledNotePage >
    );
};

export default NotePage;
