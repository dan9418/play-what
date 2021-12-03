import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import styled from 'styled-components';
import { PodType } from "../../../core/models/Model.constants";
import { CHORD_PRESETS } from "../../../core/models/PodList/Chord/Chord.constants";
import PodListUtils from "../../../core/models/PodList/PodList.utils";
import THEME, { COLOR } from "../../styles/theme";
import ListBuilder from "../create/list-builder/ListBuilder";
import { StyledPageBody } from "../shared/PageBody";
import PageControls from "../shared/PageTitle";

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


const ChordsPage: React.FC<any> = props => {

    console.log(props);

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <StyledChordsPage>
            <PageControls title="Chords" subtitle="A chord is a group of notes played simultaneously" />
            {console.log(JSON.stringify(CHORD_PRESETS))}
            {JSON.stringify(data)}
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
                        CHORD_PRESETS.map(preset => (
                            <tr>
                                <td><Link to="/">{preset.name}</Link></td>
                                <td>{preset.id}</td>
                                <td>{PodListUtils.getName(preset.value, PodType.Interval)}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <ListBuilder />
        </StyledChordsPage>
    );
};

export default ChordsPage;
