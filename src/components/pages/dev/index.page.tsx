import React from "react";
import styled from 'styled-components';
import PageTitle from "../../layout/PageTitle";
import Card, { StyledCard } from "../../ui/Card";
import { List } from "../../ui/List";

const StyledDevPage = styled(PageTitle)`
	
    ${StyledCard} {
        margin-top: 16px;
         li {
            padding: 8px;
            font-size: 120%;
        }
    }
`;

export const Page: React.FC<any> = () => {
    return (
        <StyledDevPage title="Developer Panel" subtitle="Advanced Users Only" >
            <Card>
                <List lists={[
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
                                text: 'Edit Theme',
                                link: '/experimental/edit-theme'
                            }
                        ]
                    }
                ]}
                    items={[
                        {
                            text: 'Notebook',
                            link: '/notebook/'
                        }
                    ]}
                    prefix="/dev"
                    level={1}
                />
            </Card>
        </StyledDevPage >
    )
};
