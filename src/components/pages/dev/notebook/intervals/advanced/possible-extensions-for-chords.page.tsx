import React from "react";
import styled from 'styled-components';
import PageLayout from "../../../../../layout/PageLayout";
import Card from "../../../../../ui/Card";

const StyledExtensionsPage = styled(PageLayout)`
    table {
        width: 100%;
        border-collapse: collapse;
        td, td {
            padding: 4px;
            text-align: center;
        }
        thead tr:first-child {
            border-bottom: 1px solid ${props => props.theme.utils.border}    
        }
        td:first-child {
            font-weight: bold;
            border-right: 1px solid ${props => props.theme.utils.border}
        }
    }
`;

const Page: React.FC<any> = () => {
    return (
        <StyledExtensionsPage title="Extended Intervals">
            <Card title="">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>b9</th>
                            <th>9</th>
                            <th>#9</th>
                            <th>11</th>
                            <th>#11</th>
                            <th>b13</th>
                            <th>13</th>
                            <th>b5</th>
                            <th>#5</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Dom</td>
                            <td>X</td>
                            <td>X</td>
                            <td>X</td>
                            <td></td>
                            <td>X</td>
                            <td>X</td>
                            <td>X</td>
                            <td>X</td>
                            <td>X</td>
                        </tr>
                        <tr>
                            <td>min</td>
                            <td>X</td>
                            <td>X</td>
                            <td></td>
                            <td>X</td>
                            <td></td>
                            <td></td>
                            <td>X</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Maj</td>
                            <td></td>
                            <td>X</td>
                            <td></td>
                            <td>X</td>
                            <td>X</td>
                            <td></td>
                            <td>X</td>
                            <td></td>
                            <td>X</td>
                        </tr>
                        <tr>
                            <td>M6</td>
                            <td>?</td>
                            <td>?</td>
                            <td>X</td>
                            <td>X</td>
                            <td>X</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>m6</td>
                            <td>?</td>
                            <td>?</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>m/M</td>
                            <td></td>
                            <td>X</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </Card>
        </StyledExtensionsPage>
    )
};

export default Page;
