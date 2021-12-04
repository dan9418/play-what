import React, { useEffect } from "react";
import styled from 'styled-components';
import { IPod, PodType } from "../../../core/models/Model.constants";
import { CHORD_PRESETS } from "../../../core/models/PodList/Chord/Chord.constants";
import PodListUtils from "../../../core/models/PodList/PodList.utils";
import BreadcrumbList from "../shared/breadcrumb-list/BreadcrumbList";
import { StyledPageBody } from "../shared/PageBody";
import PageControls from "../shared/PageTitle";
import ChordDetailsCard from "./cards/ChordDetailsCard";
import ChordRelatedCard from "./cards/ChordRelatedCard";
import ChordOptionsCard from "./cards/ChordOptionsCard";
import SoundCard from "./cards/SoundCard";
import ViewerCard from "./cards/ViewerCard";
import { useRecoilState } from "recoil";
import { dataIndexState, dataListState } from "../../state/state";

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

    const [dataList, setDataList] = useRecoilState(dataListState);
    const [dataIndex, setDataIndex] = useRecoilState(dataIndexState);

    const chord = CHORD_PRESETS.find(c => c.id.toLowerCase() === props.params.id);

    useEffect(
        () => {

            console.log("dpb test", chord.value);
            setDataIndex(0);
            setDataList([{
                root: [0, 0] as any,
                intervals: chord.value,
            }]);
        }, []);

    console.log('dpb test', dataIndex);

    return (
        <StyledChordPage>
            <BreadcrumbList path={props.path} />
            <PageControls title={chord.name} subtitle={PodListUtils.getName(chord.value, PodType.Interval)} />
            <div className="grid">
                <ChordDetailsCard chord={chord} />
                <ViewerCard pods={chord.value} />
                <ChordOptionsCard chord={chord} />
                <SoundCard chord={chord} />
                <ChordRelatedCard chord={chord} />
            </div>
        </StyledChordPage >
    );
};

export default ChordPage;
