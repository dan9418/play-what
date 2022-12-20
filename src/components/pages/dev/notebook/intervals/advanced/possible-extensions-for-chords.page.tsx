import React from "react";
import styled, { css } from 'styled-components';
import PageLayout from "../../../../../layout/PageLayout";
import Card from "../../../../../ui/Card";
import { Table } from "../../../../../ui/Table";

const StyledExtensionsPage = styled(PageLayout)`

`;

const styles = css`
    width: 100%;
    td, th {
        padding: 4px;
        text-align: center;
    }
`;

const Page: React.FC<any> = () => {
    return (
        <StyledExtensionsPage title="Extended Intervals">
            <Card title="">
                <Table
                    headerColIndicies={[0]}
                    thead={[{ cols: ['', 'b9', '9', '#9', '11', '#11', 'b13', '13', 'b5', '#5'] }]}
                    tbody={[
                        {
                            cols: ['Dom', 'X', 'X', 'X', '', 'X', 'X', 'X', 'X', 'X']
                        },
                        {
                            cols: ['min', '', 'X', '', 'X', '', '', 'X', '', '']
                        },
                        {
                            cols: ['Maj', '?', 'X', '', 'X', 'X', '', 'X', '', 'X']
                        },
                        {
                            cols: ['M6', '?', '?', 'X', 'X', 'X', '', '', '', '']
                        },
                        {
                            cols: ['m6', '', '?', '', '', '', '', '', '', '']
                        },
                        {
                            cols: ['m/M', '', 'X', '', '', '', '', '', '', '']
                        }
                    ]}
                    styles={styles}
                />
            </Card>
        </StyledExtensionsPage>
    )
};

export default Page;
