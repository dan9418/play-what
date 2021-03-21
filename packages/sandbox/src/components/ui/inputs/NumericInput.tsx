const React = require("react");
import styled from 'styled-components';

const StyledNumbericInput = styled.input`
	max-width: 64px;
    padding: 4px;
    border-radius: 4px;
    border: none;
`;

const NumericInput = ({ value, setValue, ...props }) => {
	const onChange = e => setValue(parseInt(e.target.value));

	return (
		<StyledNumbericInput className="numeric-input" type="number" value={value} onChange={onChange} {...props} />
	);
}

export default NumericInput;
