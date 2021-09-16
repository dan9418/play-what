import { NOTE_PRESETS } from '@pw/core/src/models/Pod/Note/Note.constants';
import PodUtils from '@pw/core/src/models/Pod/Pod.utils';
import React from 'react';
import InputRow from '../../../app/src/components/shared/ui/InputRow';
import DropdownInput from './DropdownInput';

const RootInputPreset = ({ root, setRoot }) => {
    // const [selectedPreset, setSelectedPreset] = useState(null);
    const selectedPreset = NOTE_PRESETS.find(n => PodUtils.areEqual(n.value, root));

    return (
        <InputRow label="Select Preset">
            <DropdownInput value={selectedPreset} setValue={x => setRoot(x.value)} options={NOTE_PRESETS} />
        </InputRow>
    );
}

export default RootInputPreset;
