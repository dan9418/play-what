import { IViewerProps } from "../Viewer.constants";

export enum KeyType {
	Black = 'black',
	White = 'white'
}

export interface IKeyboardProps extends IViewerProps {
	keyRange: [number, number];
	hideLabel?: boolean;
}

export interface IKeyboardKeyProps extends IKeyboardProps {
	noteIndex: number;
	scale: number;
	keyType: KeyType;
}

export const BLACK_KEY_INDICES = [0, 2, 4, 5, 7, 9, 11];

const DEFAULT_KEYBOARD_PROPS = {
	keyRange: [-12, 12]
};

export default DEFAULT_KEYBOARD_PROPS;
