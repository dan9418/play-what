import { NOTE_PRESETS } from '@pw/core/src/models/Pod/Note/Note.constants';
import React from 'react';
import InputRow from '../ui/InputRow';
import DropdownInput from './DropdownInput';


const RootInputPreset = ({ root, setRoot }) => {
    // const [selectedPreset, setSelectedPreset] = useState(null);

    return (
        <InputRow label="Select Preset">
            <DropdownInput value={null} setValue={setRoot} options={NOTE_PRESETS} />
        </InputRow>
    );
}

export default RootInputPreset;
