import React from 'react';
import './DropdownInput.css';

const DropdownInput = props => {
    const { value, setValue, options, displayProperty } = props;

    return (
        <select
            className='dropdown-input '
            onChange={e => setValue(options[e.target.selectedIndex], e.target.selectedIndex)}
            value={value ? value.id : ''}
        >
            {options.map((v, i) => (
                <option key={i} value={v.id}>{displayProperty ? v[displayProperty] : v.name}</option>
            ))}
        </select>
    );
}

export default DropdownInput;