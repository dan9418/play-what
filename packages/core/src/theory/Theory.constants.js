import { ROOT_DEGREE } from "./Degree.constants";
import { ROOT_PITCH } from "./Pitch.constants";

export const ROOT_SCALE = DIATONIC_VALUES.map((pod, i) => (
	[
		ROOT_PITCH + pod.value[0],
		ROOT_DEGREE + pod.value[1]
	]
));
