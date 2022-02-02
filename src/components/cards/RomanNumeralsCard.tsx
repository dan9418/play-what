import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import Card from "../ui/Card";

const StyledRomanNumeralsCard = styled.div`
    table {
        border-collapse: collapse;
        width: 100%;

        th {
            //color: ${props => props.theme.brand.accent};
            &:first-child {
                text-align: right;
            }
            padding: 4px;
        }
        
        td {
            padding: 4px;
            text-align: center;
        }

        .numeral td {
            font-size: 160%;
            font-family: serif;
        }
    }

    sup {
        font-size: 80%;
    }
`;

const RomanNumeralsCard: React.FC<any> = ({ model }) => {

    const numerals = model.getAllNumerals();

    if (!numerals.length) return null;

    return (
        <Card
            title="Roman Numerals"
        >
            <StyledRomanNumeralsCard>
                <table>
                    <tbody>
                        <tr className="numeral">
                            <th>Numeral</th>
                            {numerals.map((n, i) => {
                                const [numeral, symbol] = n.getNumeralParts(i + 1)
                                return (
                                    <td key={i} className="numeral">
                                        {numeral}
                                        <sup className="symbol">{symbol}</sup>
                                    </td>
                                );
                            })}
                        </tr>
                        <tr>
                            <th>Degree</th>
                            {numerals.map((n, i) => (
                                <th key={i}>
                                    {i + 1}
                                </th>
                            ))}
                        </tr>
                        <tr>
                            <th>Name</th>
                            {numerals.map((n, i) => (
                                <td key={i}>
                                    <Link to={`/browse/${n.modelType}/${n.modelId}/${n.root ? `root/${n.root.modelId}` : ''}`}>{n.getShortName()}</Link>
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </StyledRomanNumeralsCard>
        </Card>
    );
};

export default RomanNumeralsCard;
