import ToneUtils from '../../tone/Tone.utils';
import TuningUtils from '../../tuning/Tuning.utils';
import IntervalUtils from '../Pod/Interval/Interval.utils';
import NoteUtils from '../Pod/Note/Note.utils';
import PodUtils from '../Pod/Pod.utils';
import { ICompleteModelDetails, IPod, IPreset, ModelId } from '../Model.constants';
import MASTER_PRESETS from './PodList.constants';

// Equality

const areEqual = (A: IPod[], B: IPod[]): boolean => {
	if (!A || !B || A.length !== B.length) return false;
	for (let i = 0; i < A.length; i++) {
		const a = A[i];
		const b = B[i];
		if (!PodUtils.areEqual(a, b)) return false;
	}
	return true;
}

// Reduction

const reduce = (A: IPod[]): IPod[] => {
	return A.map((a) => PodUtils.reduce(a));
}

// Search

const getPodAtPitch = (A: IPod[], p: number, matchOctave: boolean): IPod | null => {
	const pod = A.find(a => PodUtils.getPodAtPitch(a, p, matchOctave));
	return pod ? pod : null;
};

const getIndexOfPodAtPitch = (A: IPod[], p: number, matchOctave: boolean): number | null => {
	const pod = A.findIndex(a => PodUtils.getPodAtPitch(a, p, matchOctave));
	return pod !== -1 ? pod : null;
};

// Sound

const playSound = (notes: IPod[]): void => {
	const frequencies = notes.map(n => TuningUtils.getFrequency(n[0]));
	ToneUtils.playSound(frequencies)
}

// Other

const containsSubset = (podList: IPod[], subset: IPod[]): boolean => {
	for (let i = 0; i < subset.length; i++) {
		if (!podList.find(x => x[0] === subset[i][0] && x[1] === subset[i][1]))
			return false;
	}
	return true;
};

/*const getName = (podList: IPod[]): string => {
	if (podList.length === 0) {
		return "No Selection";
	}
	else if (podList.length === 1) {
		const ivlPreset = INTERVAL_PRESETS.find(ivl => PodUtils.areEqual(ivl.value, podList[0]));
		return ivlPreset.name;
	}
	else if (podList.length === 2 && PodUtils.areEqual(podList[0], INTERVAL_PRESET_MAP.get(IntervalId.P1).value)) {
		const ivlPreset = INTERVAL_PRESETS.find(ivl => PodUtils.areEqual(ivl.value, podList[1]));
		return ivlPreset.name;
	}
	else if (podList.length === 2) {
		return 'Unknown Interval Pair';
	}
	else if (podList.length >= 3 && podList.length < 5) {
		let qualifier;
		return 'chord';
	}
	else {
		return 'scale';
	}
};*/

const getName = (podList: IPod[], modelId: ModelId): string => {
	const nameFn = modelId === ModelId.Interval ? IntervalUtils.getName : NoteUtils.getName;
	const nameArr = podList.map((pod) => nameFn(pod));
	return nameArr.join(', ');
};

const sort = (podList: IPod[]) => {
	return podList.sort((a, b) => {
		if (a[0] < b[0]) return -1;
		else if (a[0] > b[0]) return 1;
		else {
			if (a[1] < b[1]) return -1;
			else if (a[1] > b[1]) return 1;
			else return 0;
		}
	});
}

const findPreset = (podList: IPod[]): IPreset<IPod[]> | undefined => {
	return MASTER_PRESETS.find(p => areEqual(p.value, podList));
}

const getDetails = (root: IPod, intervals: IPod[]): ICompleteModelDetails => {

	const notes = PodUtils.addPodList(root, intervals);

	const rootName = NoteUtils.getName(root);
	const intervalsName = getName(intervals, ModelId.Interval);
	const intervalsPreview = getName(intervals, ModelId.Interval);
	const notesPreview = getName(notes, ModelId.Note);

	const preset = MASTER_PRESETS.find(p => areEqual(p.value, intervals));
	const presetName = preset ? preset.name : 'Unknown';

	return {
		root: {
			name: rootName,
			preview: rootName,
			value: root
		},
		intervals: {
			name: intervalsName,
			preview: intervalsPreview,
			value: intervals,
			formattedName: intervals.length ? presetName : 'None'
		},
		notes: {
			name: `${rootName} ${intervalsName}`,
			preview: notesPreview,
			value: notes,
			formattedName: intervals.length ? `${rootName} ${presetName}` : 'None'
		}
	}
}

export default {
	areEqual,
	reduce,
	getPodAtPitch,
	getIndexOfPodAtPitch,
	playSound,
	containsSubset,
	sort,
	getName,
	findPreset,
	getDetails
};
