import { ModelId } from '@pw/core/src/models/Model.constants';
import { NOTE_PRESETS } from '@pw/core/src/models/Pod/Note/Note.constants';
import React from "react";
import DropdownInput from '../../shared/ui/inputs/DropdownInput';
import LabelRow from '../LabelRow';
import { PodCardList } from '../PodCard';
import Panel from './Panel';

const RootPanel: React.FC<any> = ({ preview, root, setRoot }) => {
    const rootModal = <h2>Edit Root</h2>;

    return (
        <>
            <LabelRow labels={[
                'Note',
                <DropdownInput key="2" value={root} setValue={config => setRoot(config.value)} options={NOTE_PRESETS} displayProperty="name" />
            ]} />
            <PodCardList podType={ModelId.Note} pods={[root]} />
        </>
    );
};

export default RootPanel;
