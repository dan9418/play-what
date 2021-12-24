import IntervalSpan from '@pw-core/models/Interval';
import ArrayUtils from '../general/Array.utils';
import NumberUtils from '../general/Number.utils';
import Chord from './Chord';
import Model from './Model';
import { IntervalId, IPod, ScaleId } from './Model.constants';
import { SCALE_PRESETS, SCALE_PRESET_MAP } from './Model.presets';
import { arePodListsEqual, reducePodList, subtractPods } from './Pod.static';
import PodList from './PodList';

export default class Scale extends PodList {

    constructor(id: ScaleId, options = undefined) {
        super(SCALE_PRESET_MAP, id, options);
    }

    static fromValue = (value: IPod[]) => Model.fromValue(SCALE_PRESETS, Scale, value, arePodListsEqual, reducePodList);

    getMode(d) {
        /*let mode = [...A];
        mode = ArrayUtils.rotate(mode, d);
        const modelRoot = mode[0];
        const newMode = mode.map((m) => [m[0] + modelRoot[0], m[1] + modelRoot[1]]);
        return newMode;*/
    };

    getAllModes({ scale, modelRoot }) {
        /*const modes = [];
        for (let i = 1; i <= scale.length; i++) {
            modes.push(getMode({ scale, degree: i }));
        }
        return modes.map((m, i) => ({
            name: `Degree ${i + 1}`,
            a: modelRoot,
            B: m
        }));*/
    };

    getNumeral(d) {
        const LIMIT = 7;
        const curIntervals = [];
        const newPods: IPod[] = [[0, 0]];
        const newIntervals = [new IntervalSpan(IntervalId.P1)];
        for (let i = 0; i < LIMIT; i = i + 2) {
            const curD = NumberUtils.moduloSum(d, i, this.podList.length);
            const curIvl = this.intervals[curD];
            curIntervals.push(curIvl);
        }
        for (let i = 0; i < curIntervals.length - 1; i++) {
            const newPod = subtractPods(curIntervals[i + 1].pod, curIntervals[0].pod)
            const newIvl = IntervalSpan.fromValue(newPod);
            newPods.push(newPod);
            newIntervals.push(newIvl);
        }
        const numeral = Chord.fromValue(newPods);
        console.log('dpb num', numeral/*, curIntervals, newPods, newIntervals*/);
        if (this.root) {
            numeral.applyRoot(this.notes[d]);
            console.log('dpb num root', numeral);
        }
        return numeral;
    };

    getAllNumerals() {
        const numerals = [];
        for (let i = 0; i < this.podList.length; i++) {
            numerals.push(this.getNumeral(i));
        }
        return numerals;
    };
}
