import pod from '../pod/pod'
import index from '../index/index';
import note from '../pod/note';
import interval from '../pod/interval';

// Constants

const DEFAULT = [[0, 0]];

class PodList {

	constructor(value) {
		this.value = value;
	}

	// Common

	static isValid(podList) {
		return podList !== null && Array.isArray(podList) && podList.find((v) => !pod.isValid(v));
	};

	static areEqual({ list1, list2 }) {
		if (!list1 || !list2) return false;
		if (list1.length !== list2.length) return false;
		for (let i = 0; i < list1.length; i++) {
			if (!pod.areEqual({ pod1: list1[i], pod2: list2[i] })) { return false; }
		}
		return true;
	};

	static reduce({ A }) { return A.map((a) => pod.reduce({ a })); }

	static getName({ podList, podType, theoryType }) {
		/*if (theoryType) {
			switch (theoryType) {
			case 'chord':
				return chord.getName({ A: podList });
			case 'scale':
				return scale.getName({ A: podList });
			}
		}*/
		if (podType) {
			switch (podType) {
			case 'note':
				return podList.map(pod => note.getName({ a: pod })).join(', ');
			case 'interval':
				return podList.map(pod => interval.getName({ a: pod })).join(', ');
			}
		}
		return JSON.stringify(podList);
	}

	// Utils

	static findPodWithPitch({ A, p }) {
		const octaveReduce = true
		const pitch = octaveReduce ? index.modulo({ a: p, b: pod.max[0] }) : p;
		return A.find((n) => n[0] === pitch) || null;
	};

	static findIndexOfPodWithPitch({ A, p }) {
		const octaveReduce = true
		const pitch = octaveReduce ? index.modulo({ a: p, b: pod.max[0] }) : p;
		return A.findIndex((n) => n[0] === pitch);
	};

	static addPod({ A, b }) { return A.map((a) => pod.addPod({ a, b })); }

}

export default PodList;
