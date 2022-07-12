import IntervalSpan from '@pw-core/models/Interval';
import ArrayUtils from '../general/Array.utils';
import NumberUtils from '../general/Number.utils';
import Chord from './Chord';
import Model from './Model';
import { IntervalId, IPod, ModelType, ScaleId, Tag } from './Model.constants';
import { SCALE_PRESETS, SCALE_PRESET_MAP } from './Model.presets';
import { arePodListsEqual, reducePodList, subtractPods } from './Pod.static';
import PodList from './PodList';

export default class Scale extends PodList {

    modelType = ModelType.Scale;

    constructor(modelId: ScaleId, options: any = undefined) {
        super(SCALE_PRESET_MAP, modelId, options);
    }

    static fromValue = (value: IPod[]) => Model.fromValue(SCALE_PRESETS, Scale, value, arePodListsEqual, reducePodList);

    getMode(d) {
        let rotated = [...this.podList];
        rotated = ArrayUtils.rotate(rotated, d);
        for (let i = (this.podList.length - d); i < rotated.length; i++) {
            const curPod = rotated[i];
            rotated[i] = [curPod[0] + 12, curPod[1] + 7];
        }
        // Get difference between each interval
        const newPods: IPod[] = [[0, 0]];
        const newIntervals = [new IntervalSpan(IntervalId.P1)];
        for (let i = 0; i < rotated.length - 1; i++) {
            const newPod = subtractPods(rotated[i + 1], rotated[0])
            newPods.push(newPod);
            const newIvl = IntervalSpan.fromValue(newPod);
            newIntervals.push(newIvl);
        }
        const mode = Scale.fromValue(newPods);

        return mode;
    };

    getAllModes() {
        const modes = [];
        if (this.tags.includes(Tag.Diatonic) ||
            this.tags.includes(Tag.Pentatonic) ||
            this.tags.includes(Tag.MelodicMode) ||
            this.tags.includes(Tag.HarmonicMode)
        ) {
            for (let i = 0; i < this.podList.length; i++) {
                modes.push(this.getMode(i));
            }
        }
        return modes;
    };

    getNumeral(d) {
        // Get every other interval
        const curIntervals = [];
        for (let i = 0; i < this.podList.length; i = i + 2) {
            const curD = NumberUtils.moduloSum(d, i, this.podList.length);
            const curIvl = this.intervals[curD];
            curIntervals.push(curIvl);
        }
        // Get difference between each interval
        const newPods: IPod[] = [[0, 0]];
        //const newIntervals = [new IntervalSpan(IntervalId.P1)];
        for (let i = 0; i < curIntervals.length - 1; i++) {
            const newPod = subtractPods(curIntervals[i + 1].pod, curIntervals[0].pod)
            newPods.push(newPod);
            //const newIvl = IntervalSpan.fromValue(newPod);
            //newIntervals.push(newIvl);
        }
        const numeral = Chord.fromValue(newPods);
        if (this.root) {
            numeral.applyRoot(this.notes[d]);
        }
        return numeral;
    };

    getAllNumerals() {
        const numerals = [];
        if (this.tags.includes(Tag.Diatonic)) {
            for (let i = 0; i < this.podList.length; i++) {
                numerals.push(this.getNumeral(i));
            }
        }
        return numerals;
    };
}
