import React from 'react';
import BreadcrumbList from '../../../app/components/shared/breadcrumb-list/BreadcrumbList';
import { CHORD_PRESETS } from "../../../core/models/PodList/Chord/Chord.constants";

const Page = props => {
    console.log(props);
    console.log(props.params.id);

    const chord = CHORD_PRESETS.find(c => c.id.toLowerCase() === props.params.id)

    return <>
        <h1>{chord.name}</h1>
        <BreadcrumbList path={props.path} />
    </>;
}

export default Page;
