import DropdownInput from "./DropdownInput/DropdownInput";

const { default: NumericInput } = require("./NumericInput/NumericInput");

const INPUT = {
	numeric: {
		id: 'numeric',
		name: 'Numeric',
		component: NumericInput
	},
	dropdown: {
		id: 'dropdown',
		name: 'Dropdown',
		component: DropdownInput
	}
};

export default INPUT;
