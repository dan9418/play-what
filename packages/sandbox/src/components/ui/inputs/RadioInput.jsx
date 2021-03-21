const React = require("react");
import styled from 'styled-components';

const StyledDropdownInput = styled.select`
	height: 24px;
    min-width: 128px;
    line-height: 40px;
    font-size: 16px;
    outline: none;
    cursor: pointer;
    border: 1px solid #aaa;
    border-radius: 4px;
    border: none;

	> option {
		outline: none;
		border: none;
		border-radius: 4px;
		padding: 0 8px;
		cursor: pointer;
	}
`;

const DropdownInput = props => {
	const { value, setValue, options, displayProperty } = props;

	return (
		<StyledDropdownInput
			className='dropdown-input'
			onChange={e => setValue(options[e.target.selectedIndex], e.target.selectedIndex)}
			value={value ? value.id : ''}
		>
			{(options || []).map((v, i) => (
				<option key={i} value={v.id}>{displayProperty ? v[displayProperty] : v.name}</option>
			))}
		</StyledDropdownInput>
	);
}

export default DropdownInput;
