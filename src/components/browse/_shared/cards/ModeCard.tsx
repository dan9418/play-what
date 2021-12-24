import { Link } from "gatsby";
import React from "react";
import { useRecoilState } from "recoil";
import styled from 'styled-components';
import { usePageProps } from "../../../../contexts/PagePropsContext";
import { rootState } from "../../../../state/state";
import Card from "../../../_shared/ui/Card";

const StyledModeCard = styled.div`
    button {
        appearance: none;
        background-color: transparent;
        border: none;
        cursor: pointer;
        width: 100%;
        padding: 8px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${({ theme }) => theme.action.interactive};

        &.active {
            background-color: ${props => props.theme.action.active};
            color: ${({ theme }) => theme.text.inverted};
            font-weight: bold;
        }

        :hover {
            background: ${({ theme }) => theme.utils.hoverDark};
            color: ${({ theme }) => theme.action.interactive};
        }
    }
`;

const ModeCard: React.FC<any> = ({ model }) => {
    const pageProps = usePageProps();
    const [root, setRoot] = useRecoilState(rootState);

    const modes = model.getAllModes();

    return (
        <Card
            title="Modes"
        >
            <StyledModeCard>
                <ul>
                    {modes.map(n => (
                        <li key={n.id}>
                            <Link to={`/browse/${n.modelId}/${n.id}`}>{n.name}</Link>
                        </li>
                    ))}
                </ul>
            </StyledModeCard>
        </Card>
    );
};

export default ModeCard;
