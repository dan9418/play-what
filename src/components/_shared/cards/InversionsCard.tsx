import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import Card from "../../../_shared/ui/Card";

const StyledInversions = styled.div`
    ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2px;

        li {
            width: 100%;
        }

        a {
            text-decoration: none;
            padding: 4px;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;

            &.active {
                background-color: ${props => props.theme.action.active};
                color: ${({ theme }) => theme.white};
            }

            :hover {
                background: ${({ theme }) => theme.state.hoverDark};
            }
        }
    }
`;


const InversionCard: React.FC<any> = ({ model }) => {
    return null;

    const inversions = ['None', 'First', 'Second', 'Third'];

    return (
        <Card title="Inversion">
            <StyledInversions>
                <ul>
                    {inversions.map(o => {
                        return (
                            <li key={o}>
                                <Link to={``} className={o === 'None' ? `active` : ''}>{o}</Link>
                            </li>
                        );
                    })}
                </ul>
            </StyledInversions>
        </Card>
    );
};

export default InversionCard;
