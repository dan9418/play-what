import React from "react";
import styled from 'styled-components';
import { ModelId } from "../../../core/models/Model.constants";
import PodListUtils from "../../../core/models/PodList/PodList.utils";
import { useChordPreset } from "../../../state/state";
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

const StyledChordPage = styled(StyledPageBody)`

`;


const ChordPage: React.FC<any> = props => {
    const chord = useChordPreset(props.params.id);

    return (
        <StyledChordPage>
            <BreadcrumbList id={chord.id} name={chord.name} path={props.path} />
            <PageTitle title={chord.name} subtitle={PodListUtils.getName(chord.value, ModelId.Interval)} />
            <StyledDoublePane>
                <StyledPane>
                    <RootCard />
                    <IntervalsCard />
                    <NotesCard />
                    <SoundCard />
                </StyledPane>
                <StyledPane>
                    <ViewerCard />
                    <RelatedCard />
                </StyledPane>
            </StyledDoublePane>
        </StyledChordPage >
    );
};

export default ChordPage;
