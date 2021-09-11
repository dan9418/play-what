import { CHARTS } from "@pw/core/src/models/Chart/Chart.constants";
import React, { useState } from "react";
import styled from 'styled-components';
import THEME from "../../styles/theme";
import DropdownInput from "../shared/inputs/DropdownInput";
import InputRow, { StyledInputRow } from "../shared/ui/InputRow";

const StyledChartsPage = styled.div`
    h1 {
        margin-top: 16px;
        padding: 16px 0;
        border-top: 1px solid ${THEME.border};
        border-bottom: 1px solid ${THEME.border};
        width: 100%;
        text-align: center;
    }

    padding: 64px 16px 32px;
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

/*
const getFolderItemFromChartConfig = (config: IChartConfig): IFolder => {
    const sectionItems = [];
    for (let s = 0; s < config.sections.length; s++) {
        const section = config.sections[s];
        const chordItems = [];
        for (let c = 0; c < section.chords.length; c++) {
            const chord = section.chords[c];
            const [root, intervals, t] = chord;
            chordItems.push({
                nodeType: NodeType.Item,
                text: root + ' ' + intervals,
                value: {
                    rootId: root,
                    presetId: intervals
                }
            });
        }
        sectionItems.push({
            nodeType: NodeType.Folder,
            text: 'Section ' + section.name,
            items: chordItems
        });
    }

    return {
        nodeType: NodeType.Folder,
        text: config.name,
        items: sectionItems
    };
}*/

const ChartsPage: React.FC<any> = () => {

    const options = getOptions();
    const [chart, setChart] = useState(options[0]);

    return (
        <StyledChartsPage>
            <InputRow label="Chart">
                <DropdownInput options={options} value={chart} setValue={setChart} />
            </InputRow>

            <h1>{chart.name}</h1>
        </StyledChartsPage>
    );
};

export default ChartsPage;
