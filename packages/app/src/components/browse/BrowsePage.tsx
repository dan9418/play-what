import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from 'styled-components';
import { CHARTS, IChartConfig } from "../../../../core/src/models/Chart/Chart.constants";
import { NOTE_PRESET_MAP } from "../../../../core/src/models/Pod/Note/Note.constants";
import { CHORD_PRESET_MAP } from "../../../../core/src/models/PodList/Chord/Chord.constants";
import InputRow from "../../../../ui/src/InputRow";
import DropdownInput from "../../../../ui/src/inputs/DropdownInput";
import { dataListState, IDataItem } from "../../state/state";
import ListBuilder from "../create/list-builder/ListBuilder";

const StyledBrowsePage = styled.div`
    h1 {
        padding: 16px 0;
        width: 100%;
        text-align: center;
    }

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-width: 1024px;
    margin: auto;
`;

const getOptions = () => {
    return Object.values(CHARTS).map(chart => {
        return {
            id: chart.name,
            name: chart.name,
            value: chart
        }
    })
}

const getChartListData = (config: IChartConfig): IDataItem[] => {
    const items = [];

    for (let s = 0; s < config.sections.length; s++) {
        const section = config.sections[s];

        for (let c = 0; c < section.chords.length; c++) {
            const chord = section.chords[c];
            const [noteId, chordId, t] = chord;

            const root = NOTE_PRESET_MAP.get(noteId).value || [0, 0];
            const intervals = CHORD_PRESET_MAP.get(chordId).value || [];

            items.push({
                root,
                intervals
            });
            //...(new Array((t / 2) - 1).fill(<div className="rest" >/</div>))
        }
    }

    return items;
}

const BrowsePage: React.FC<any> = () => {

    const options = getOptions();
    const [chartIndex, setChartIndex] = useState(0);
    const [dataList, setDataList] = useRecoilState(dataListState);

    useEffect(() => {
        const chartConfig = Object.values(CHARTS)[chartIndex];
        const chartDataList = getChartListData(chartConfig);
        setDataList(chartDataList);
    }, [chartIndex])

    return (
        <StyledBrowsePage>
            <h1>{options[chartIndex].name}</h1>
            <InputRow label="Select Chart: ">
                <DropdownInput options={options} value={options[chartIndex]} setValue={(v, i) => setChartIndex(i)} />
            </InputRow>
            <ListBuilder />
        </StyledBrowsePage>
    );
};

export default BrowsePage;
