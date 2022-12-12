import React from "react";
import styled from 'styled-components';
import PageLayout from "../../layout/PageLayout";
import Card from "../../ui/Card";
import { List } from "../../ui/List";

const StyledDevPage = styled(PageLayout)``;

const Page: React.FC<any> = () => {
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

export default Page;
