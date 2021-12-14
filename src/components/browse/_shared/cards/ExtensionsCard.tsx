import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import Card from "../../../_shared/ui/Card";

const StyledExtensions = styled.div`
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
            aspect-ratio: 1;
            width: 100%;

            &.active {
                background-color: ${props => props.theme.active};
                color: ${({ theme }) => theme.white};
            }

            :hover {
                background: ${({ theme }) => theme.hover};
            }
        }
    }
`;


const ExtensionsCard: React.FC<any> = ({ model }) => {

    const extensions = ['b9', 9, '#9', 'b11', 11, '#11', 'b13', 13, '#13'];

    return (
        <Card title="Extensions">
            <StyledExtensions>
                <ul>
                    {extensions.map(o => {
                        return (
                            <li key={o}>
                                <Link to={``}>{o}</Link>
                            </li>
                        );
                    })}
                </ul>
            </StyledExtensions>
        </Card>
    );
};

export default ExtensionsCard;
