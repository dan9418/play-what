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
                    thead={[{ cols: ['', 'b9', '9', '#9', '11', '#11', 'b13', '13', 'b5', '#5'] }]}
                    tbody={[
                        {
                            cols: [{ content: 'Dom', isHeader: true }, 'X', 'X', 'X', '', 'X', 'X', 'X', 'X', 'X']
                        },
                        {
                            cols: [{ content: 'min', isHeader: true }, '', 'X', '', 'X', '', '', 'X', '', '']
                        },
                        {
                            cols: [{ content: 'Maj', isHeader: true }, '?', 'X', '', 'X', 'X', '', 'X', '', 'X']
                        },
                        {
                            cols: [{ content: 'M6', isHeader: true }, '?', '?', 'X', 'X', 'X', '', '', '', '']
                        },
                        {
                            cols: [{ content: 'm6', isHeader: true }, '', '?', '', '', '', '', '', '', '']
                        },
                        {
                            cols: [{ content: 'm/M', isHeader: true }, '', 'X', '', '', '', '', '', '', '']
                        }
                    ]}
                    styles={styles}
                />
            </Card>
        </StyledExtensionsPage>
    )
};

export default Page;
