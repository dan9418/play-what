import { DEFAULT_DEGREE_COLOR_SCHEME } from "../theory/Degree.constants";
import TuningUtils from "../tuning/Tuning.utils";
import Model from "./Model";
import { IModelConfig, IntervalId, INTERVAL_QUALITY, IPod } from './Model.constants';
import { CORE_INTERVALS, INTERVAL_PRESETS, INTERVAL_PRESET_MAP } from './Model.presets';
import Pod from "./Pod";

export default class IntervalSpan extends Pod {

    id: IntervalId;

    constructor(id: IntervalId) {
        super(INTERVAL_PRESET_MAP, id);
    }

    getName = () => {
        return IntervalSpan.getName(this.pod);
    }

    static fromValue = (value: IPod) => Model.fromValue(INTERVAL_PRESETS, IntervalSpan, value);

    static getIntervalOffset = (pod: IPod, coreIvl: IModelConfig) => {
        return coreIvl.value[0] - pod[0];
    }

    static getPodColor = (pod: IPod) => {
        if (!pod) return null;
        const [p, d] = pod;
        return DEFAULT_DEGREE_COLOR_SCHEME[d];
    }

    static getName = (interval: IPod): string => {
        const reduced = Pod.reducePods(interval);

        const [noteIndex, d] = reduced;
        const degreeIntervals = CORE_INTERVALS[d];
        if (!degreeIntervals) return '?';

        const pIvl = degreeIntervals[0];
        const loIvl = pIvl;
        const hiIvl = degreeIntervals[degreeIntervals.length - 1];

        // determine core interval and quality
        let ivl = null;
        let quality = null;
        if (degreeIntervals.length === 1) {
            ivl = pIvl; // perfect
            quality = INTERVAL_QUALITY.perfect;
        }
        else if (noteIndex <= loIvl.value[0]) {
            ivl = loIvl; // minor
            quality = INTERVAL_QUALITY.min;
        }
        else if (noteIndex >= hiIvl.value[0]) {
            ivl = hiIvl; // major
            quality = INTERVAL_QUALITY.maj;
        }

        const offset = this.getIntervalOffset(reduced, ivl);
        let qualityStr = quality.symbol

        if (!offset) return `${qualityStr}${d + 1}`;
        if (offset > 0) quality = INTERVAL_QUALITY.dim; // dim
        if (offset < 0) quality = INTERVAL_QUALITY.aug; // aug

        const count = Math.abs(offset);
        qualityStr = qualityStr.repeat(count);

        const value = `${qualityStr}${d + 1}`;

        /*if (isExtended) {
            console.log('x', value);
            if (value === 'm2') value = 'b9'
            else if (value === 'M2') value = '9'
            else if (value === 'm3') value = '#9'
            else if (value === 'M3') value = 'b11'
            else if (value === 'P4') value = '11'
            else if (value === 'A4' || value === 'd5') value = '#11'
            else if (value === 'm6') value = 'b13'
            else if (value === 'M6') value = '13'
            else if (value === 'm7') value = '#13'
        }*/

        return value;
    }

    static getRatio = (interval: IPod, options: any = {}) => {

        const [p] = interval;

        const baseline = TuningUtils.getFrequency(0);
        const compareTo = TuningUtils.getFrequency(p);

        const ratio = compareTo / baseline;

        return `1:${ratio.toFixed(2)}`;
    }

    static isExtendedInterval = (interval) => {
        const [p, d] = interval;
        const isExtendedDegree = d > 7;
        return isExtendedDegree;
    }

}
