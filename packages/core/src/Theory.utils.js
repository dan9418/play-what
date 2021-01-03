import { ROOT_SCALE } from './Core.constants';
import CoreUtils from './Core.utils';
import { DEGREE_VALUES } from './Pod.presets';
import { ACCIDENTAL, CORE_INTERVALS, QUALITY, QUALITY_VALUES } from './Theory.constants';
class TheoryUtils {

	static getAccidentalOffset(pod) {
		const [p, d] = pod;
		let offset = p - ROOT_SCALE[d][0];
		return offset;
	}

	static getIntervalOffset(pod, coreIvl) {
		return coreIvl.value[0] - pod[0];
	}

	static getAccidentalString(offset, d) {
		// TODO figure out edge case
		if (d === 0 && offset === 11) offset = offset - 12;
		if (d === 6 && offset === -11) offset = offset + 12;
		if (offset > 0) {
			return ACCIDENTAL.sharp.symbol.repeat(offset);
		}
		else if (offset < 0) {
			return ACCIDENTAL.flat.symbol.repeat(-offset);
		}
		return '';
	};

	static getNoteName(pod) {
		const offset = this.getAccidentalOffset(pod);
		const accidental = this.getAccidentalString(offset, pod[1]);
		const spelling = DEGREE_VALUES[pod[1]].name;
		return `${spelling}${accidental}`;
	}

	static getIntervalName(pod) {
		const [p, d] = pod;
		const degreeIntervals = CORE_INTERVALS[d];
		if (!degreeIntervals) return '?';

		const pIvl = degreeIntervals[0];
		const loIvl = pIvl;
		const hiIvl = degreeIntervals[degreeIntervals.length - 1];

		// determine core interval
		let ivl = null;
		if (!degreeIntervals.length) ivl === pIvl; // perfect
		else if (p <= loIvl.value[0]) ivl = loIvl; // minor
		else if (p >= hiIvl.value[0]) ivl = hiIvl; // major

		let offset = this.getIntervalOffset(pod, ivl);

		// determine quality
		let quality = null;
		if (!offset) return ivl.id; // unaltered
		if (offset < 0) quality = QUALITY.dim; // dim
		if (offset > 0) quality = QUALITY.aug; // aug

		const count = Math.abs(offset);
		const qualityStr = quality.symbol.repeat(count);

		return `${qualityStr}${d + 1}`;
	}

}

export default TheoryUtils;
