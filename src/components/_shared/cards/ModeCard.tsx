import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import { ScaleTag } from "../../../core/models/Model.constants";
import { SCALE_PRESETS } from "../../../core/models/Model.presets";
import Card from "../../_shared/ui/Card";

const StyledModeCard = styled.div`
    ul {
        display: flex;
        justify-content: space-around;
        gap: 4px;
        flex-wrap: wrap;
        a {
            padding: 4px;
            &.active {
                font-weight: bold;
                text-decoration: underline;
            }
        }
    }
`;

const ModeCard: React.FC<any> = ({ model }) => {

    const type = model.tags.find(t =>
        t === ScaleTag.Diatonic ||
        t === ScaleTag.Pentatonic ||
        t === ScaleTag.MelodicMode ||
        t === ScaleTag.HarmonicMode
    );

    if (!type) return;

    let modeType = '';
    switch (type) {
        case ScaleTag.Diatonic:
            modeType = 'Diatonic';
        case ScaleTag.Pentatonic:
            modeType = 'Pentatonic';
        case ScaleTag.MelodicMode:
            modeType = 'Melodic Minor';
        case ScaleTag.HarmonicMode:
            modeType = 'Harmonic Minor';
    }

    const modes = SCALE_PRESETS.filter(p => p.tags.includes(type));

    return (
        <Card
            title={`${modeType} Modes`}
        >
            <StyledModeCard>
                <ul>
                    {modes.map(n => (
                        <li key={n.id}>
                            <Link to={`/${n.modelId}/${n.id}`} className={model.id === n.id ? 'active' : ''}>{n.name}</Link>
                        </li>
                    ))}
                </ul>
            </StyledModeCard>
        </Card>
    );
};

export default ModeCard;
