import NumberUtils from "../general/Number.utils";
import { IntervalId, IPod, MAX_POD } from "./Model.constants";

// Sound

/*static playSound = (note: IPod): void => {
    const frequency = TuningUtils.getFrequency(note[0]);
    ToneUtils.playSound(frequency)
}*/

/*static playSoundList = (notes: IPod[]): void => {
    const frequencies = notes.map(n => TuningUtils.getFrequency(n[0]));
    ToneUtils.playSound(frequencies)
}*/

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



export const getIndexOfPodAtPitch = (A: IPod[], p: number, matchOctave: boolean): number | null => {
    const pod = A.findIndex(a => isPodAtPitch(a, p, matchOctave));
    return pod !== -1 ? pod : null;
};

/*static sort = (podList: IPod[]) => {
    return podList.sort((a, b) => {
        if (a[0] < b[0]) return -1;
        else if (a[0] > b[0]) return 1;
        else {
            if (a[1] < b[1]) return -1;
            else if (a[1] > b[1]) return 1;
            else return 0;
        }
    });
}*/


export const addPods = (a: IPod, b: IPod): IPod => {
    const p = a[0] + b[0];
    const d = a[1] + b[1];
    const result: IPod = [p, d];
    return result;
}

export const subtractPods = (a: IPod, b: IPod): IPod => {
    const p = a[0] - b[0];
    const d = a[1] - b[1];
    const result: IPod = [p, d];
    return result;
}

export const addPodList = (a: IPod, B: IPod[]): IPod[] => {
    const result = B.map((b) => addPods(a, b));
    return result;
};

export const reducePod = (a: IPod, max = MAX_POD): IPod => {
    const p = NumberUtils.modulo(a[0], max[0]);
    const d = NumberUtils.modulo(a[1], max[1]);
    return [p, d];
}

export const arePodsEqual = (a: IPod, b: IPod): boolean => {
    if (!a || !b || a.length !== 2 || b.length !== 2) return false;
    return a[0] === b[0] && a[1] === b[1];
}

export const reducePodList = (A: IPod[]): IPod[] => {
    return A.map((a) => reducePod(a));
}

export const arePodListsEqual = (A: IPod[], B: IPod[]): boolean => {
    if (!A || !B || A.length !== B.length) return false;
    for (let i = 0; i < A.length; i++) {
        const a = A[i];
        const b = B[i];
        if (!arePodsEqual(a, b)) return false;
    }
    return true;
}

export const listContainsSubset = (podList: IPod[], subset: IPod[]): boolean => {
    for (let i = 0; i < subset.length; i++) {
        if (!podList.find(x => x[0] === subset[i][0] && x[1] === subset[i][1]))
            return false;
    }
    return true;
};

export const getDegree = (pod: IPod) => {
    return NumberUtils.modulo(pod[1], MAX_POD[1]);
}

export const getShortName = str => str.
    replace('Major', 'Maj')
    .replace('Minor', 'Min')
    .replace('Augmented', 'Aug')
    .replace('Diminished', 'Dim')
    .replace('Suspended', 'Sus')
    .replace('Dominant', 'Dom')
    .replace('Pentatonic', 'Pent')
    .replace('st', '')
    .replace('nd', '')
    .replace('rd', '')
    .replace('th', '');


export const getExtensionInversionId = (id: IntervalId) => {
    switch (id) {
        case IntervalId.m2: return IntervalId.b9;
        case IntervalId.M2: return IntervalId.x9;
        case IntervalId.m3: return IntervalId.s9;
        case IntervalId.M3: return IntervalId.b11;
        case IntervalId.P4: return IntervalId.x11;
        case IntervalId.A4:
        case IntervalId.d5:
            return IntervalId.s11;
        case IntervalId.m6: return IntervalId.b13;
        case IntervalId.M6: return IntervalId.x13;
        case IntervalId.m7: return IntervalId.s13;
        // reverse
        case IntervalId.b9: return IntervalId.m2;
        case IntervalId.x9: return IntervalId.M2;
        case IntervalId.s9: return IntervalId.m3;
        case IntervalId.b11: return IntervalId.M3;
        case IntervalId.x11: return IntervalId.P4;
        case IntervalId.s11: return IntervalId.d5;
        case IntervalId.b13: return IntervalId.m6;
        case IntervalId.x13: return IntervalId.M6;
        case IntervalId.s13: return IntervalId.m7;
        default: return '';
    }
} 