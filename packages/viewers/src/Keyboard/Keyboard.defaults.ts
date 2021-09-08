import { IViewerProps } from "../viewer.constants";

export interface IKeyboardProps extends IViewerProps {
	keyRange: [number, number];
	hideLabel?: boolean;
}

export interface IKeyboardKeyProps extends IKeyboardProps {
	noteIndex: number;
	scale: number;
}

const DEFAULT_KEYBOARD_PROPS = {
	keyRange: [-12, 12]
};

export default DEFAULT_KEYBOARD_PROPS;
