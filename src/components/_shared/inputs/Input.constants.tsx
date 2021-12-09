export enum InputId {
	Numeric,
	Dropdown,
	Switch,
	Range,
	ButtonRow,
	Degree,
	Accidental,
	Intervals
}

export interface IInputProps {
	value: any;
	setValue: Function
}
