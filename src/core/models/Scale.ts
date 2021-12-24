import IntervalSpan from '@pw-core/models/Interval';
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

    // 	static getMode({ A, d }) {
    // 		return chord.getInversion({ A, n: d });
    // 		/*let mode = [...A];
    // 		mode = utils.rotate(mode, d);
    // 		const modelRoot = mode[0];
    // 		const newMode = mode.map((m) => [m[0] + modelRoot[0], m[1] + modelRoot[1]]);
    // 		return newMode;*/
    // 	};

    // 	static getAllModes({ scale, modelRoot }) {
    // 		/*const modes = [];
    // 		for (let i = 1; i <= scale.length; i++) {
    // 			modes.push(getMode({ scale, degree: i }));
    // 		}
    // 		return modes.map((m, i) => ({
    // 			name: `Degree ${i + 1}`,
    // 			a: modelRoot,
    // 			B: m
    // 		}));*/
    // 	};

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
        //curIntervals.push(new IntervalSpan(IntervalId.P8));
        for (let i = 0; i < curIntervals.length - 1; i++) {
            const newPod = subtractPods(curIntervals[i + 1].pod, curIntervals[0].pod)
            const newIvl = IntervalSpan.fromValue(newPod);
            newPods.push(newPod);
            newIntervals.push(newIvl);
        }
        console.log('dpb num', curIntervals, newPods, newIntervals);
        return Chord.fromValue(newPods);
    };

    getAllNumerals() {
        const numerals = [];
        for (let i = 0; i < this.podList.length; i++) {
            numerals.push(this.getNumeral(i));
        }
        return numerals;
    };
}
