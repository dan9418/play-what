import Chord from "@pw-core/models/Chord";
import React from "react";
import styled from 'styled-components';
import { useRootParam } from "../../../state/state";
import BreadcrumbList from "../../_shared/breadcrumb-list/BreadcrumbList";
import { StyledPageBody } from "../../_shared/layout/PageBody";
import PageTitle from "../../_shared/layout/PageTitle";
import { StyledDoublePane, StyledPane } from "../../_shared/layout/Pane";
import InversionsCard from "../_shared/cards/InversionsCard";
import RelatedCard from "../_shared/cards/RelatedCard";
import RootCard from "../_shared/cards/RootCard";
import SoundCard from "../_shared/cards/SoundCard";
import DetailsCard from "../_shared/cards/DetailsCard";

const StyledChordPage = styled(StyledPageBody)`

`;

const ChordPage: React.FC<any> = props => {
    const [rootParam, setRootParam] = useRootParam();

    const chord = new Chord(props.params.id, { root: rootParam });

    return (
        <StyledChordPage>
            <BreadcrumbList id={chord.id} name={chord.getName()} path={props.path} />
            <PageTitle title={chord.getName()} subtitle="Chord" />
            <StyledDoublePane>
                <StyledPane>
                    <RootCard model={chord} />
                    <InversionsCard model={chord} />
                    <RelatedCard model={chord} />
                </StyledPane>
                <StyledPane>
                    <DetailsCard model={chord} />
                    <SoundCard model={chord} />
                </StyledPane>
            </StyledDoublePane>
        </StyledChordPage >
    );
};

export default ChordPage;
