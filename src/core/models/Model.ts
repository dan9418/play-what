import NumberUtils from '../general/Number.utils';
import { IPod, ModelId, PresetId, Tag } from './Model.constants';

export default class Model {
    modelId: ModelId;
    id: PresetId;
    name: string;
    tags: Tag[];

    getPreview() {
        return this.name || 'unnamed';
    }

    static fromValue = (presetArray, subclass, value: any) => {
        const preset = presetArray.find(p => subclass.arePodsEqual(p.value, subclass.reducePods(value)));
        if (!preset) {
            console.error(presetArray[0].modelId, value, presetArray);
            throw new Error('Unknown model value');
        }
        return new subclass(preset.id);
    }

    static containsSubset = (podList: IPod[], subset: IPod[]): boolean => {
        for (let i = 0; i < subset.length; i++) {
            if (!podList.find(x => x[0] === subset[i][0] && x[1] === subset[i][1]))
                return false;
        }
        return true;
    };

    // Search

    static isPodAtPitch = (pod: IPod, p: number, matchOctave = false): IPod | null => {
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

    /*static getPodAtPitch = (A: IPod[], p: number, matchOctave: boolean): IPod | null => {
        const pod = A.find(a => this.isPodAtPitch(a, p, matchOctave));
        return pod ? pod : null;
    };*/

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

    static getIndexOfPodAtPitch = (A: IPod[], p: number, matchOctave: boolean): number | null => {
        const pod = A.findIndex(a => this.isPodAtPitch(a, p, matchOctave));
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
}
