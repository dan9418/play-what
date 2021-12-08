import NumberUtils from '../general/Number.utils';
import ToneUtils from '../tone/Tone.utils';
import TuningUtils from '../tuning/Tuning.utils';
import IntervalUtils from './Interval/Interval.utils';
import { ICompleteModelDetails, IModelConfig, IPod, MASTER_PRESETS, MAX_POD, ModelId } from './Model.constants';
import NoteUtils from './Note/Note.utils';

// Equality

const areEqual = (a: IPod, b: IPod): boolean => {
    if (!a || !b || a.length !== 2 || b.length !== 2) return false;
    return a[0] === b[0] && a[1] === b[1];
}


const areEqualList = (A: IPod[], B: IPod[]): boolean => {
    if (!A || !B || A.length !== B.length) return false;
    for (let i = 0; i < A.length; i++) {
        const a = A[i];
        const b = B[i];
        if (!areEqual(a, b)) return false;
    }
    return true;
}

// Reduction

const reduce = (a: IPod, max = MAX_POD): IPod => {
    const p = NumberUtils.modulo(a[0], max[0]);
    const d = NumberUtils.modulo(a[1], max[1]);
    return [p, d];
}

const reduceList = (A: IPod[]): IPod[] => {
    return A.map((a) => reduce(a));
}

// Addition

const addPod = (a: IPod, b: IPod, reduceResult = false): IPod => {
    const p = a[0] + b[0];
    const d = a[1] + b[1];
    const result: IPod = [p, d];
    return reduceResult ? reduce(result) : result;
}

const subtractPod = (a: IPod, b: IPod, reduceResult = false): IPod => {
    const p = a[0] - b[0];
    const d = a[1] - b[1];
    const result: IPod = [p, d];
    return reduceResult ? reduce(result) : result;
}

const addPodList = (a: IPod, B: IPod[]): IPod[] => {
    const newValue = B.map((b) => addPod(a, b));
    return newValue;
};

// Property Derivation

const getPitchClass = (pod: IPod): number => {
    return NumberUtils.modulo(pod[0], MAX_POD[0]);
}

const getOctave = (pod: IPod, midi = false): number => {
    const raw = Math.floor(pod[0] / 12);
    return midi ? raw + 4 : raw;
}

const getDegree = (pod: IPod): number => {
    return NumberUtils.modulo(pod[1], MAX_POD[1]);
}

const getX = (pod: IPod): number => {
    return Math.floor(pod[1] / 7);
}

// Search

const isPodAtPitch = (pod: IPod, p: number, matchOctave = false): IPod | null => {
    const pitchOffset = 0;
    const target = p - pitchOffset;
    let a = pod[0];
    let b = target;
    if (!matchOctave) {
        a = NumberUtils.modulo(a, 12);
        b = NumberUtils.modulo(b, 12);
    }
    return a === b ? pod : null;
};

const getPodAtPitch = (A: IPod[], p: number, matchOctave: boolean): IPod | null => {
    const pod = A.find(a => isPodAtPitch(a, p, matchOctave));
    return pod ? pod : null;
};

// Sound

const playSound = (note: IPod): void => {
    const frequency = TuningUtils.getFrequency(note[0]);
    ToneUtils.playSound(frequency)
}

const playSoundList = (notes: IPod[]): void => {
    const frequencies = notes.map(n => TuningUtils.getFrequency(n[0]));
    ToneUtils.playSound(frequencies)
}

// Search

const getIndexOfPodAtPitch = (A: IPod[], p: number, matchOctave: boolean): number | null => {
    const pod = A.findIndex(a => isPodAtPitch(a, p, matchOctave));
    return pod !== -1 ? pod : null;
};

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

const findPreset = (podList: IPod[]): IModelConfig | undefined => {
    return MASTER_PRESETS.find(p => areEqualList(p.value, podList));
}

const getDetails = (root: IPod, intervals: IPod[]): ICompleteModelDetails => {

    const notes = addPodList(root, intervals);

    const rootName = NoteUtils.getName(root);
    const intervalsName = getName(intervals, ModelId.Interval);
    const intervalsPreview = getName(intervals, ModelId.Interval);
    const notesPreview = getName(notes, ModelId.Note);

    const preset = MASTER_PRESETS.find(p => areEqualList(p.value, intervals));
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
    addPod,
    subtractPod,
    addPodList,
    getPitchClass,
    getOctave,
    getDegree,
    getX,
    playSound,
    playSoundList,
    areEqual,
    areEqualList,
    reduce,
    reduceList,
    getPodAtPitch,
    getIndexOfPodAtPitch,
    containsSubset,
    sort,
    getName,
    findPreset,
    getDetails
};
