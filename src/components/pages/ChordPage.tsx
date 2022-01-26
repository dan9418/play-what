import Chord from "@pw-core/models/Chord";
import React from "react";
import styled from 'styled-components';
import { useRoot } from "../../contexts/PagePropsContext";
import DetailsCard from "../cards/DetailsCard";
import GuitarCard from "../cards/GuitarCard";
import RelatedCard from "../cards/RelatedCard";
import RootCard from "../cards/RootCard";
import { StyledPageBody } from "../layout/PageBody";
import PageTitle from "../layout/PageTitle";
import { StyledPane } from "../layout/Pane";

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
            </StyledPane>
        </StyledChordPage >
    );
};

export default ChordPage;
