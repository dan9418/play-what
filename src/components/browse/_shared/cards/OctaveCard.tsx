import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import { useQueryParam, StringParam } from "use-query-params";
import Card from "../../../_shared/ui/Card";

const StyledOctaves = styled.div`
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


const OctaveCard: React.FC<any> = ({ model }) => {

    const octaves = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const [rootParam, setRootParam] = useQueryParam("root", StringParam);

    if (!rootParam) return null;

    return (
        <Card title="Octave">
            <StyledOctaves>
                <ul>
                    {octaves.map(o => {
                        return (
                            <li key={o}>
                                <Link to={``} className={o === 4 ? `active` : ''}>{o}</Link>
                            </li>
                        );
                    })}
                </ul>
            </StyledOctaves>
        </Card>
    );
};

export default OctaveCard;
