import Chord from "@pw-core/models/Chord";
import React from "react";
import styled from 'styled-components';
import { useRoot } from "../../contexts/PagePropsContext";
import DetailsCard from "../_shared/cards/DetailsCard";
import GuitarCard from "../_shared/cards/GuitarCard";
import RelatedCard from "../_shared/cards/RelatedCard";
import RootCard from "../_shared/cards/RootCard";
import SoundCard from "../_shared/cards/SoundCard";
import { StyledPageBody } from "../_shared/layout/PageBody";
import PageTitle from "../_shared/layout/PageTitle";
import { StyledPane } from "../_shared/layout/Pane";

const StyledChordPage = styled(StyledPageBody)`

`;

const ChordPage: React.FC<any> = props => {

    const root = useRoot();

    const chord = new Chord(props.pageContext.modelId, { root });

    const subtitle = chord.aliases.length ? `Also known as ${chord.aliases.join(', ')}` : 'Chord';

    return (
        <StyledChordPage>
            <PageTitle title={chord.name} subtitle={subtitle} />
            <StyledPane>
                <DetailsCard model={chord} />
                <RootCard />
                <GuitarCard model={chord} />
                <RelatedCard model={chord} />
                <SoundCard model={chord} />
            </StyledPane>
        </StyledChordPage >
    );
};

export default ChordPage;
