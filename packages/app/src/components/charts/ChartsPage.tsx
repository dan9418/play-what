import { CHARTS, IChartConfig } from "@pw/core/src/models/Chart/Chart.constants";
import { PodType } from "@pw/core/src/models/Model.constants";
import { NOTE_PRESET_MAP } from "@pw/core/src/models/Pod/Note/Note.constants";
import { CHORD_PRESET_MAP } from "@pw/core/src/models/PodList/Chord/Chord.constants";
import PodListUtils from "@pw/core/src/models/PodList/PodList.utils";
import InputRow from "@pw/ui/src/InputRow";
import DropdownInput from "@pw/ui/src/inputs/DropdownInput";
import React, { ReactNode, useState } from "react";
import styled from 'styled-components';
import Fretboard from "../../../../viewers/src/Fretboard/Fretboard";
import { FRETBOARD_TUNING } from "../../../../viewers/src/Fretboard/Fretboard.api";
import THEME from "../../styles/theme";

const FRETBOARD_PROPS = {
    fretRange: [0, 12] as [number, number],
    tuning: FRETBOARD_TUNING.standard.value,
    matchOctave: false,
    labelBy: 'none',
    showFretDots: false,
    showFretNumbers: false,
    podType: PodType.Interval
}

const StyledChartsPage = styled.div`
    h1 {
        margin-top: 16px;
        padding: 16px 0;
        width: 100%;
        text-align: center;
    }

    h2 {
        padding: 8px 0;
        margin-bottom: 16px;
        border-bottom: 1px solid ${THEME.border};
    }

    padding: 64px 16px 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-width: 1024px;
    margin: auto;

    .chart {
        width: 100%;
        padding: 16px 8px;
    }
`;

const StyledSection = styled.div`
    width: 100%;
    display: grid;
    gap: 8px;
    grid-template-columns: 1fr;
    @media(min-width: 512px) {
        grid-template-columns: repeat(${props => Math.min(2, props.$length)}, 1fr);
    }
    @media(min-width: 1024px) {
        grid-template-columns: repeat(${props => Math.min(4, props.$length)}, 1fr);
    }

    .rest {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 200%;

        background: white;
        border-radius: 8px;
    }
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

const StyledChord = styled.div`
    //border: 1px solid black;
    background: white;
    border-radius: 8px;
     h3 {
        font-weight: normal;
        margin-top: 16px;
    }
    width: 100%;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Chord: React.FC<any> = ({ chord }) => {
    const [noteId, chordId, t] = chord;
    const root = NOTE_PRESET_MAP.get(noteId);
    const intervals = CHORD_PRESET_MAP.get(chordId);

    const voicingOptions = intervals.voicings;

    const [voicing, setVoicing] = useState(intervals.voicings[0]);

    const details = PodListUtils.getDetails(root.value, intervals.value);

    return (
        <StyledChord>
            <h3>{`${root.name} ${intervals.name}`}</h3>
            <Fretboard details={details} {...FRETBOARD_PROPS} voicing={voicing} />
            {voicingOptions.length > 0 && <DropdownInput value={voicing} setValue={setVoicing} options={voicingOptions} />}
        </StyledChord>
    );
};

const getChart = (config: IChartConfig): ReactNode => {
    const sectionItems = [];
    for (let s = 0; s < config.sections.length; s++) {
        const section = config.sections[s];
        const chordItems = [];
        for (let c = 0; c < section.chords.length; c++) {
            const chord = section.chords[c];
            const [a, b, t] = chord;

            const chords = [
                <Chord chord={chord} key="1" />,
                ...(new Array((t / 2) - 1).fill(
                    <div className="rest" >/</div>
                ))
            ];

            chordItems.push(
                ...chords
            );
        }
        sectionItems.push(
            <>
                <h2>{`Section ${section.name}`}</h2>
                <StyledSection $length={chordItems.length} className="section">
                    {chordItems}
                </StyledSection>
            </>
        );
    }

    return (
        <div className="chart">
            {sectionItems}
        </div>
    );
}

const ChartsPage: React.FC<any> = () => {

    const options = getOptions();
    const [chartIndex, setChartIndex] = useState(0);
    const chart = Object.values(CHARTS)[chartIndex];

    const chartComponent = getChart(chart);

    return (
        <StyledChartsPage>
            <h1>{chart.name}</h1>
            <InputRow label="Select Chart: ">
                <DropdownInput options={options} value={options[chartIndex]} setValue={(v, i) => setChartIndex(i)} />
            </InputRow>


            {chartComponent}

        </StyledChartsPage>
    );
};

export default ChartsPage;
