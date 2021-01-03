import { ROOT_SCALE } from './Core.constants';
import CoreUtils from './Core.utils';
import { DEGREE_VALUES } from './Pod.presets';
import { ACCIDENTAL, CORE_INTERVALS, QUALITY } from './Theory.constants';
class TheoryUtils {

	static getAccidentalOffset(pod) {
		const [p, d] = pod;
		let offset = p - ROOT_SCALE[d][0];
		console.log(p, d, offset);
		// TODO figure out root cause of this
		if (d === 0 && offset >= 11) offset = offset - 12;
		if (d === 6 && offset <= -11) offset = offset + 12;
		return offset;
	}

	static getAccidentalString(offset) {
		if (offset > 0) return ACCIDENTAL.sharp.symbol.repeat(offset);
		else if (offset < 0) return ACCIDENTAL.flat.symbol.repeat(-offset);
		return '';
	};

	static getNoteName(pod) {
		const offset = this.getAccidentalOffset(pod);
		const accidental = this.getAccidentalString(offset);
		const spelling = DEGREE_VALUES[pod[1]].name;
		return `${spelling}${accidental}`;
	}

	static getIntervalName(pod) {
		const [p, d] = pod;
		const degreeIntervals = CORE_INTERVALS[d];
		if (!degreeIntervals) return '?';
		const loIvl = degreeIntervals[0];
		if (p === loIvl.value[0]) return loIvl.id;
		if (p < loIvl.value[0]) {
			const offset = loIvl.value[0] - p;
			const quality = QUALITY.dim.symbol.repeat(offset);
			return `${quality}${d + 1}`;
		}
		const hiIvl = degreeIntervals[degreeIntervals.length - 1];
		if (p === hiIvl.value[0]) return hiIvl.id;
		if (p > hiIvl.value[0]) {
			const offset = p - hiIvl.value[0];
			const quality = QUALITY.aug.symbol.repeat(offset);
			return `${quality}${d + 1}`;
		}
		return '?';
	}

}

export default TheoryUtils;
