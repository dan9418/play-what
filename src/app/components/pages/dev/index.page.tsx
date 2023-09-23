import React from "react";
import styled from 'styled-components';
import PageLayout from "../../shared/layout/PageLayout";
import Card from "../../shared/ui/Card";
import { List } from "../../shared/ui/List";
import { LIST_STYLES_1 } from "../../shared/ui/List.styles";

const StyledDevPage = styled(PageLayout)``;

const Page: React.FC<any> = () => {
    return (
        <StyledDevPage title="Developer Panel" subtitle="Advanced Users Only" >
            <Card>
                <List
                    prefix="/dev"
                    styles={LIST_STYLES_1}
                    lists={[
                        {
                            title: 'Tests',
                            items: [
                                {
                                    text: 'All Intervals From All Roots',
                                    link: '/test/all-intervals-from-all-roots'
                                }
                            ]
                        },
                        {
                            title: 'Experimental',
                            items: [
                                {
                                    text: 'Notebook',
                                    link: '/notebook/'
                                },
                                {
                                    text: 'Edit Theme',
                                    link: '/experimental/edit-theme'
                                },

                            ]
                        }
                    ]}
                />
            </Card>
        </StyledDevPage >
    )
};

export default Page;
