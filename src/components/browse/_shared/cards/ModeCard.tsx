import { Link } from "gatsby";
import React from "react";
import { useRecoilState } from "recoil";
import styled from 'styled-components';
import { usePageProps } from "../../../../contexts/PagePropsContext";
import { rootState } from "../../../../state/state";
import Card from "../../../_shared/ui/Card";

const StyledModeCard = styled.div`
    ul {
        display: flex;
        gap: 4px;
        flex-wrap: wrap;
        a {
            padding: 4px;
        }
    }
`;

const ModeCard: React.FC<any> = ({ model }) => {
    const pageProps = usePageProps();
    const [root, setRoot] = useRecoilState(rootState);

    let modes = [];
    try {
        modes = model.getAllModes();
    }
    catch (e) {
        return null;
    }

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
