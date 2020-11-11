import Utils from '../../Utils';
import PodUtils from '../pod/PodUtils';

const DEFAULT_KEY_CENTER = [0, 1];
const DEFAULT_INTERVALS = [[0, 1], [1, 0]];

class Cell {

	constructor({ keyCenter, intervals }) {
		this.keyCenter = keyCenter || DEFAULT_KEY_CENTER;
		this.intervals = intervals || DEFAULT_INTERVALS;
		const notes = PodUtils.addPodList(this.keyCenter, this.intervals);
		this.notes = notes;
	}

	// common

	equalTo(b) {
		return false;
	}

	getValue() {
		return null;
	}

	getName() {
		return 'Custom';
	}

	getPreset() {
		return null;
	}

	getPreview() {
		return JSON.stringify([this.keyCenter, this.intervals, this.notes]);
	}

	getType() {
		return 'cell';
	}

	getValue() {
		return this.value;
	}

	// utils

	reduce(max = [12, 7]) {

		return new Cell(newValue);
	}

	/*findPodWithPitch(p) {
		const A = this.value;
		const octaveReduce = true
		const pitch = octaveReduce ? index.modulo({ a: p, b: pod.max[0] }) : p;
		return A.find((n) => n[0] === pitch) || null;
	};

	findIndexOfPodWithPitch(p) {
		const A = this.value;
		const octaveReduce = true
		const pitch = octaveReduce ? index.modulo({ a: p, b: pod.max[0] }) : p;
		return A.findIndex((n) => n[0] === pitch);
	};*/
}

export default Cell;
