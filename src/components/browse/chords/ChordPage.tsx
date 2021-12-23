import Chord from "@pw-core/models/Chord";
import React from "react";
import { useRecoilValue } from "recoil";
import styled from 'styled-components';
import { rootState } from "../../../state/state";
import BreadcrumbList from "../../_shared/breadcrumb-list/BreadcrumbList";
import { StyledPageBody } from "../../_shared/layout/PageBody";
import PageTitle from "../../_shared/layout/PageTitle";
import { StyledDoublePane, StyledPane } from "../../_shared/layout/Pane";
import DetailsCard from "../_shared/cards/DetailsCard";
import GuitarCard from "../_shared/cards/GuitarCard";
import RelatedCard from "../_shared/cards/RelatedCard";
import RootCard from "../_shared/cards/RootCard";
import SoundCard from "../_shared/cards/SoundCard";

const StyledChordPage = styled(StyledPageBody)`

`;

const ChordPage: React.FC<any> = props => {
    const root = useRecoilValue(rootState)

    const chord = new Chord(props.params.id, { root });

    return (
        <StyledChordPage>
            <BreadcrumbList id={chord.id} name={chord.getName()} path={props.path} />
            <PageTitle title={chord.getName()} subtitle="Chord" />
            <StyledDoublePane>
                <StyledPane>
                    <RootCard model={chord} />
                    <RelatedCard model={chord} />
                    <SoundCard model={chord} />
                </StyledPane>
                <StyledPane>
                    <DetailsCard model={chord} />
                    <GuitarCard model={chord} />
                </StyledPane>
            </StyledDoublePane>
        </StyledChordPage >
    );
};

export default ChordPage;
