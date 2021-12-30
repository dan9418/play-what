import { Link } from "gatsby";
import React from "react";
import { useRecoilState } from "recoil";
import styled from 'styled-components';
import { usePageProps } from "../../../contexts/PagePropsContext";
import { rootState } from "../../../state/state";
import Card from "../../_shared/ui/Card";

const StyledRomanNumeralsCard = styled.div`
    ul {
        display: flex;
        gap: 4px;
        flex-wrap: wrap;
        a {
            padding: 4px;
        }
    }
`;

const RomanNumeralsCard: React.FC<any> = ({ model }) => {
    const pageProps = usePageProps();
    const [root, setRoot] = useRecoilState(rootState);

    const numerals = model.getAllNumerals();

    if (!numerals.length) return null;

    return (
        <Card
            title="Roman Numerals"
        >
            <StyledRomanNumeralsCard>
                <ul>
                    {numerals.map((n, i) => (
                        <li key={i}>
                            <Link to={`/${n.modelId}/${n.id}`}>{n.name}</Link>
                        </li>
                    ))}
                </ul>
            </StyledRomanNumeralsCard>
        </Card>
    );
};

export default RomanNumeralsCard;
