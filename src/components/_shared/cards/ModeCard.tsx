import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import { useRootSuffix } from "../../../contexts/PagePropsContext";
import { Tag } from "../../../core/models/Model.constants";
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

    const rootSuffix = useRootSuffix();

    const type = model.tags.find(t =>
        t === Tag.Diatonic ||
        t === Tag.Pentatonic ||
        t === Tag.MelodicMode ||
        t === Tag.HarmonicMode
    );

    if (!type) return null;

    let modeType = '';
    switch (type) {
        case Tag.Diatonic:
            modeType = 'Diatonic';
            break;
        case Tag.Pentatonic:
            modeType = 'Pentatonic';
            break;
        case Tag.MelodicMode:
            modeType = 'Melodic Minor';
            break;
        case Tag.HarmonicMode:
            modeType = 'Harmonic Minor';
            break;
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
                            <Link to={`/browse/${n.modelId}/${n.id}/${rootSuffix}`} className={model.id === n.id ? 'active' : ''}>{n.name}</Link>
                        </li>
                    ))}
                </ul>
            </StyledModeCard>
        </Card>
    );
};

export default ModeCard;
