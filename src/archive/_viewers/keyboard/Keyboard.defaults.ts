import Chord from "../../core/models/Chord";
import Scale from "../../core/models/Scale";

export enum KeyType {
	Black = 'black',
	White = 'white'
}

export interface IKeyboardProps {
	keyRange: [number, number];
	hideLabel?: boolean;
	model?: Chord | Scale;
	colorMapFn?: (fretProps: IKeyboardKeyProps) => string | undefined;
}

export interface IKeyboardKeyProps extends IKeyboardProps {
	noteIndex: number;
	scale: number;
	keyType: KeyType;
}

export const BLACK_KEY_INDICES = [0, 2, 4, 5, 7, 9, 11];

export const getKeyColor = (props: IKeyboardKeyProps): string | undefined => {
	const { noteIndex, model } = props;

	const [interval, note] = model.tryGetPodPairAtPitch(noteIndex);

	if (!note) return;

	return interval.getColor();
}

const DEFAULT_KEYBOARD_PROPS = {
	keyRange: [-12, 12],
	colorMapFn: getKeyColor
};

export default DEFAULT_KEYBOARD_PROPS;
