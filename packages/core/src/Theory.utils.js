import { DEGREE_VALUES, INTERVAL_VALUES, NOTE_VALUES } from './Pod.presets';
import CoreUtils from './Core.utils';
import { ACCIDENTAL } from './Theory.constants';
import { ROOT_SCALE } from './Core.constants';

class TheoryUtils {

	static getAccidentalOffset(pod) {
		const [p, d] = pod;
		let offset = p - ROOT_SCALE[d][0];
		//if (offset < 0 && accidental.offset > 0) offset = offset + 12;
		//else if (offset > 0 && accidental.offset < 0) offset = offset - 12;
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

}

export default TheoryUtils;
