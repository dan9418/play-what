import NumberUtils from '../general/Number.utils';
import Model from './Model';
import { ChordId, CHORD_QUALITY, IPod, ModelType } from './Model.constants';
import { CHORD_PRESETS, CHORD_PRESET_MAP } from './Model.presets';
import { arePodListsEqual, reducePodList } from './Pod.static';
import PodList from './PodList';


const getSymbol = (modelId, symbolType = 'jazz') => {
    switch (modelId) {
        case ChordId.MajTriad:
        case ChordId.Maj7:
            return CHORD_QUALITY.major.name[symbolType];
        case ChordId.MinTriad:
        case ChordId.Min7:
            return CHORD_QUALITY.minor.name[symbolType];
        case ChordId.Dom7:
            return CHORD_QUALITY.dominant.name[symbolType];
        case ChordId.HalfDim7:
            return CHORD_QUALITY.halfDiminished.name[symbolType];
        case ChordId.AugTriad:
            return CHORD_QUALITY.augmented.name[symbolType];
        case ChordId.DimTriad:
            return CHORD_QUALITY.diminished.name[symbolType];
    }
}

const getNumeralText = (n, modelId) => {
    const text = NumberUtils.romanize(n);
    switch (modelId) {
        case ChordId.HalfDim7:
        case ChordId.Min7:
        case ChordId.MinTriad:
        case ChordId.DimTriad:
            return text.toLowerCase();
        case ChordId.MajTriad:
        case ChordId.Maj7:
        case ChordId.Dom7:
        case ChordId.AugTriad:
        default:
            return text;
    }
}

export default class Chord extends PodList {

    modelType = ModelType.Chord;

    constructor(modelId: ChordId, options = undefined) {
        super(CHORD_PRESET_MAP, modelId, options);
    }

    getNumeralParts(n, symbolType?): [string, string] {
        return [getNumeralText(n, this.modelId), getSymbol(this.modelId, symbolType)];
    }

    static fromValue = (value: IPod[]) => Model.fromValue(CHORD_PRESETS, Chord, value, arePodListsEqual, reducePodList);
}
