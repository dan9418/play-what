import { Link } from "gatsby";
import React, { useState } from "react";
import styled from 'styled-components';
import { CHART_PRESETS, getParsedChart } from "../../core/models/Chart.constants";
import DropdownInput from "../_shared/inputs/DropdownInput";
import { StyledPageBody } from "../_shared/layout/PageBody";
import PageTitle from "../_shared/layout/PageTitle";
import Card, { StyledCard } from "../_shared/ui/Card";
import InputRow, { StyledInputRow } from "../_shared/ui/InputRow";

const StyledPracticePage = styled(StyledPageBody)`
	width: 100%;
    max-width: 100%;
    margin: auto;
    
    ${StyledCard}, ${StyledInputRow} {
        margin-top: 16px;

    }

    .sections {
        gap: 16px;

        h3 {
            font-size: 120%;
            margin: 16px 0;
        }
    }

    .chords {
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        gap: 8px;
    }

    .chord {
        font-size: 140%;
        padding: 8px;
        white-space: nowrap;
        border-radius: 8px;
        border: 1px solid black;
        aspect-ratio: 2;

        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const PracticePage: React.FC<any> = () => {
    const [chartPreset, setChartPreset] = useState(CHART_PRESETS[0]);

    const chart = getParsedChart(chartPreset.value);

    console.log('dpb chart', chart);

    return (
        <StyledPracticePage>
            <PageTitle title="Chord Charts" />
            <InputRow label="Chart">
                <DropdownInput options={CHART_PRESETS} value={chartPreset} setValue={setChartPreset} />
            </InputRow>
            <Card title={chart.name}>
                <ul className="sections">
                    {chart.sections.map((s, i) =>
                        <li key={i}>
                            <h3>Section {s.name}</h3>
                            <ul className="chords">
                                {s.chords.map((c, j) =>
                                    <li key={j}>
                                        <Link to={`/browse/chords/${c.id}/root/${c.root.id}`} className="chord">{c.getShortName()}</Link>
                                    </li>
                                )}
                            </ul>
                        </li>
                    )}
                </ul>
            </Card>
        </StyledPracticePage>
    );
};

export default PracticePage;
