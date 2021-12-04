import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import { PodType, ScaleTag } from "../../core/models/Model.constants";
import PodListUtils from "../../core/models/PodList/PodList.utils";
import { SCALE_PRESETS } from "../../core/models/PodList/Scale/Scale.constants";
import THEME, { COLOR } from "../../styles/theme";
import BreadcrumbList from "../_shared/breadcrumb-list/BreadcrumbList";
import FilterList from "../_shared/inputs/FilterList";
import { StyledPageBody } from "../_shared/layout/PageBody";
import PageControls from "../_shared/layout/PageTitle";

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


const ScalesPage: React.FC<any> = props => {
    console.log('dpb props', props);
    return (
        <StyledChordsPage>
            <BreadcrumbList path={props.path} />
            <PageControls title="Scales" subtitle="A scale is a group of notes played sequentially" />

            <FilterList tag={ScaleTag} />
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Id</th>
                        <th>Intervals</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        SCALE_PRESETS.map(preset => (
                            <tr>
                                <td><Link to={`/browse/scales/${preset.id.toLowerCase()}`}>{preset.name}</Link></td>
                                <td>{preset.id}</td>
                                <td>{PodListUtils.getName(preset.value, PodType.Interval)}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </StyledChordsPage>
    );
};

export default ScalesPage;
