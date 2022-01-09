import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import Card from "../../_shared/ui/Card";

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
                            {numerals.map((n, i) => (
                                <td key={i}>
                                    {n.getNumeral(i + 1)}
                                </td>
                            ))}
                        </tr>
                        <tr>
                            <th>Name</th>
                            {numerals.map((n, i) => (
                                <td key={i}>
                                    <Link to={`/browse/${n.modelId}/${n.id}/${n.root ? `root/${n.root.id}` : ''}`}>{n.getShortName()}</Link>
                                </td>
                            ))}
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th >Degree</th>
                            {numerals.map((n, i) => (
                                <th key={i}>
                                    {i + 1}
                                </th>
                            ))}
                        </tr>
                    </tfoot>
                </table>
            </StyledRomanNumeralsCard>
        </Card>
    );
};

export default RomanNumeralsCard;
