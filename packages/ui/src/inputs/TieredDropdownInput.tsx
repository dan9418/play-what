
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

const TieredDropdownInput: React.FC<ITieredInputProps> = ({ currentTier, onChange, parentTiers = [] }) => {

    const [value, setValue] = useState(currentTier.options && currentTier.options[0]);

    const { id, name, options, getNextTier } = currentTier;


    const isLeaf = !options || !getNextTier;

    return <>
        <LabelledInput key={id} text={name}>
            <DropdownInput
                value={value}
                setValue={(v, i) => {
                    setValue(v);
                    isLeaf && onChange(v, i, currentTier, parentTiers)
                }}
                options={options}
            />
        </LabelledInput>
        {!isLeaf && (
            <TieredDropdownInput currentTier={getNextTier(value)} onChange={onChange} parentTiers={[...parentTiers, currentTier]} />
        )}
    </>;
};

export default TieredDropdownInput;
