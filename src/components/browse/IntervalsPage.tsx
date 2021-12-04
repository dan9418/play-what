import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import { IntervalTag } from "../../core/models/Model.constants";
import { INTERVAL_PRESETS } from "../../core/models/Pod/Interval/Interval.constants";
import THEME, { COLOR } from "../../styles/theme";
import BreadcrumbList from "../_shared/breadcrumb-list/BreadcrumbList";
import FilterList from "../_shared/FilterList";
import { StyledPageBody } from "../_shared/PageBody";
import PageControls from "../_shared/PageTitle";

const StyledChordsPage = styled(StyledPageBody)`
    table {
        width: 100%;
        border-collapse: collapse;

        thead {
            tr th {
                text-align: left;
                background-color: ${THEME.surface.nav};
                padding: 8px;
                color: white;
            }
        }

        tbody {
            tr {
                &:hover {
                    background-color: ${COLOR.light2};
                }
            }
        }

        a {
            display: block;
            padding: 8px;
        }
    }
`;


const IntervalsPage: React.FC<any> = props => {
    console.log('dpb props', props);
    return (
        <StyledChordsPage>
            <BreadcrumbList path={props.path} />
            <PageControls title="Intervals" subtitle="An interval is the distance between two notes" />

            <FilterList tag={IntervalTag} />
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Id</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        INTERVAL_PRESETS.map(preset => (
                            <tr>
                                <td><Link to={`/browse/intervals/${preset.id.toLowerCase()}`}>{preset.name}</Link></td>
                                <td>{preset.id}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </StyledChordsPage>
    );
};

export default IntervalsPage;
