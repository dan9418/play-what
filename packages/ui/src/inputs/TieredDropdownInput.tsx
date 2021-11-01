
import React, { useState } from "react";
import LabelledInput from "../../../app/src/components/shared/labelled-input/LabelledInput";
import DropdownInput from "./DropdownInput";

interface IOptionTier {
    id: string;
    name: string;
    options: ({ id: string; name: string })[];
    getNextTier?: (v, i?, currentTier?, parentTiers?) => IOptionTier;
}

interface ITieredInputProps {
    currentTier: IOptionTier;
    onChange: (v, i?, currentTier?, parentTiers?) => void;
    parentTiers?: IOptionTier[];
}

export const UNSELECTED_KEY = 'UNSELECTED';
const UNSELECTED_OPTION = { id: UNSELECTED_KEY, name: '---' };

const TieredDropdownInput: React.FC<ITieredInputProps> = ({ currentTier, onChange, parentTiers = [] }) => {

    const { id, name, options, getNextTier } = currentTier;

    const finalOptions = options && [UNSELECTED_OPTION, ...options];

    const [value, setValue] = useState(UNSELECTED_OPTION);

    const isLeaf = !options || !getNextTier || value.id === UNSELECTED_KEY || !getNextTier(value);

    return <>
        <LabelledInput key={id} text={name}>
            <DropdownInput
                value={value}
                setValue={(v, i) => {
                    setValue(v);
                    onChange(v, i, currentTier, parentTiers)
                }}
                options={finalOptions}
            />
        </LabelledInput>
        {!isLeaf && (
            <TieredDropdownInput currentTier={getNextTier(value)} onChange={onChange} parentTiers={[...parentTiers, currentTier]} />
        )}
    </>;
};

export default TieredDropdownInput;
