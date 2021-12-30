import { Link } from "gatsby";
import React from "react";
import { useRecoilState } from "recoil";
import styled from 'styled-components';
import { usePageProps } from "../../../../contexts/PagePropsContext";
import { ScaleTag } from "../../../../core/models/Model.constants";
import { rootState } from "../../../../state/state";
import Card from "../../../_shared/ui/Card";

const StyledModeCard = styled.div`
    ul {
        display: flex;
        gap: 4px;
        flex-wrap: wrap;
        a {
            padding: 4px;
            &.active {
                font-weight: bold;
            }
        }
    }
`;

const ModeCard: React.FC<any> = ({ model }) => {
    const pageProps = usePageProps();
    const [root, setRoot] = useRecoilState(rootState);

    if (!model.getAllModes) return;

    let modes = model.getAllModes();

    let modeType = '';
    if (model.tags.includes(ScaleTag.Diatonic)) modeType = 'Diatonic';
    else if (model.tags.includes(ScaleTag.Pentatonic)) modeType = 'Pentatonic';
    else if (model.tags.includes(ScaleTag.MelodicMode)) modeType = 'Melodic Minor';
    else if (model.tags.includes(ScaleTag.HarmonicMode)) modeType = 'Harmonic Minor';

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
