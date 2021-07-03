import { ModelId } from '@pw/core/src/models/Model.constants';
import { NOTE_PRESETS } from '@pw/core/src/models/Pod/Note/Note.constants';
import React from "react";
import DropdownInput from '../../shared/ui/inputs/DropdownInput';
import LabelRow from '../LabelRow';
import { PodCardList } from '../PodCard';
import Panel from './Panel';

const RootPanel: React.FC<any> = ({ rootName, rootValue, setRoot }) => {
    const rootModal = <h2>Edit Root</h2>;

    return (
        <Panel title="Root" subtitle={rootName} modal={rootModal}>
            <LabelRow label="Model" >Note</LabelRow>
            <LabelRow label="Preset"  >
                <DropdownInput value={rootValue} setValue={config => setRoot(config.value)} options={NOTE_PRESETS} displayProperty="name" />
            </LabelRow>
            <PodCardList podType={ModelId.Note} pods={[rootValue]} />
        </Panel>
    );
};

export default RootPanel;
