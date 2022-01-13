import Model from './Model';
import { ChordId, IPod, ModelId } from './Model.constants';
import { CHORD_PRESETS, CHORD_PRESET_MAP } from './Model.presets';
import { arePodListsEqual, reducePodList } from './Pod.static';
import PodList from './PodList';

const getSymbol = (degree, quality) => {
    switch (degree) {
        case 1: {
            switch (quality) {
                case ChordId.MajTriad:
                case ChordId.Maj7:
                    return 'I';
                case ChordId.MinTriad:
                case ChordId.Min7:
                    return 'i';
                case ChordId.Dom7:
                    return 'I⁷';
                case ChordId.HalfDim7:
                    return 'i ̽';
                case ChordId.AugTriad:
                    return 'I+';
                case ChordId.DimTriad:
                    return 'i°';
            }
        }
        case 2: {
            switch (quality) {
                case ChordId.MajTriad:
                case ChordId.Maj7:
                    return 'II';
                case ChordId.MinTriad:
                case ChordId.Min7:
                    return 'ii';
                case ChordId.Dom7:
                    return 'II⁷';
                case ChordId.HalfDim7:
                    return 'ii ̽';
                case ChordId.AugTriad:
                    return 'II+';
                case ChordId.DimTriad:
                    return 'ii°';
            }
        }
        case 3: {
            switch (quality) {
                case ChordId.MajTriad:
                case ChordId.Maj7:
                    return 'III';
                case ChordId.MinTriad:
                case ChordId.Min7:
                    return 'iiii';
                case ChordId.Dom7:
                    return 'III⁷';
                case ChordId.HalfDim7:
                    return 'iii ̽';
                case ChordId.AugTriad:
                    return 'III+';
                case ChordId.DimTriad:
                    return 'iii°';
            }
        }
        case 4: {
            switch (quality) {
                case ChordId.MajTriad:
                case ChordId.Maj7:
                    return 'IV';
                case ChordId.MinTriad:
                case ChordId.Min7:
                    return 'iv';
                case ChordId.Dom7:
                    return 'IV⁷';
                case ChordId.HalfDim7:
                    return 'iv ̽';
                case ChordId.AugTriad:
                    return 'IV+';
                case ChordId.DimTriad:
                    return 'iv°';
            }
        }
        case 5: {
            switch (quality) {
                case ChordId.MajTriad:
                case ChordId.Maj7:
                    return 'V';
                case ChordId.MinTriad:
                case ChordId.Min7:
                    return 'v';
                case ChordId.Dom7:
                    return 'V⁷';
                case ChordId.HalfDim7:
                    return 'v ̽';
                case ChordId.AugTriad:
                    return 'V+';
                case ChordId.DimTriad:
                    return 'v°';
            }
        }
        case 6: {
            switch (quality) {
                case ChordId.MajTriad:
                case ChordId.Maj7:
                    return 'VI';
                case ChordId.MinTriad:
                case ChordId.Min7:
                    return 'vi';
                case ChordId.Dom7:
                    return 'VI⁷';
                case ChordId.HalfDim7:
                    return 'vi ̽';
                case ChordId.AugTriad:
                    return 'VI+';
                case ChordId.DimTriad:
                    return 'vi°';
            }
        }
        case 7: {
            switch (quality) {
                case ChordId.MajTriad:
                case ChordId.Maj7:
                    return 'VII';
                case ChordId.MinTriad:
                case ChordId.Min7:
                    return 'vii';
                case ChordId.Dom7:
                    return 'VII⁷';
                case ChordId.HalfDim7:
                    return 'vii ̽';
                case ChordId.AugTriad:
                    return 'VII+';
                case ChordId.DimTriad:
                    return 'vii°';
            }
        }
    }
}

export default class Chord extends PodList {

    modelId = ModelId.Chord;

    constructor(id: ChordId, options = undefined) {
        super(CHORD_PRESET_MAP, id, options);
    }

    getNumeral(n) {
        return getSymbol(n, this.id);
    }

    static fromValue = (value: IPod[]) => Model.fromValue(CHORD_PRESETS, Chord, value, arePodListsEqual, reducePodList);
}
