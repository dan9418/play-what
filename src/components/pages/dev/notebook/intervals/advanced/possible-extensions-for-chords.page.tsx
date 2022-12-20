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
                    thead={[{ cols: [undefined, 'b9', '9', '#9', '11', '#11', 'b13', '13', 'b5', '#5'] }]}
                    tbody={[
                        {
                            cols: [{ content: 'Dom', isHeader: true }, 'X', 'X', 'X', undefined, 'X', 'X', 'X', 'X', 'X']
                        },
                        {
                            cols: [{ content: 'min', isHeader: true }, undefined, 'X', undefined, 'X', undefined, undefined, 'X', undefined, undefined]
                        },
                        {
                            cols: [{ content: 'Maj', isHeader: true }, '?', 'X', undefined, 'X', 'X', undefined, 'X', undefined, 'X']
                        },
                        {
                            cols: [{ content: 'M6', isHeader: true }, '?', '?', 'X', 'X', 'X', undefined, undefined, undefined, undefined]
                        },
                        {
                            cols: [{ content: 'm6', isHeader: true }, undefined, '?', undefined, undefined, undefined, undefined, undefined, undefined, undefined]
                        },
                        {
                            cols: [{ content: 'm/M', isHeader: true }, undefined, 'X', undefined, undefined, undefined, undefined, undefined, undefined, undefined]
                        }
                    ]}
                    styles={styles}
                />
            </Card>
        </StyledExtensionsPage>
    )
};

export default Page;
