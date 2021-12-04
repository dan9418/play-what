import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import { IPreset, PodType } from "../../../core/models/Model.constants";
import PodListUtils from "../../../core/models/PodList/PodList.utils";
import THEME, { COLOR } from "../../../styles/theme";
import BreadcrumbList from "../../_shared/breadcrumb-list/BreadcrumbList";
import FilterList from "../../_shared/inputs/FilterList";
import { StyledPageBody } from "../../_shared/layout/PageBody";
import PageControls from "../../_shared/layout/PageTitle";

const StyledSearchPage = styled(StyledPageBody)`
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

interface ISearchPageProps {
    path?: string;
    tag: any;
    title: string;
    subtitle: string;
    presets: IPreset<any>[];
    prefix: string;
}

const SearchPage: React.FC<ISearchPageProps> = ({ path, tag, title, subtitle, presets, prefix }) => {
    return (
        <StyledSearchPage>
            <BreadcrumbList path={path} />
            <PageControls title={title} subtitle={subtitle} />

            <FilterList tag={tag} />
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
                        presets.map(preset => (
                            <tr>
                                <td><Link to={`${prefix}${preset.id.toLowerCase()}`}>{preset.name}</Link></td>
                                <td>{preset.id}</td>
                                <td>{PodListUtils.getName(preset.value, PodType.Interval)}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </StyledSearchPage>
    );
};

export default SearchPage;
