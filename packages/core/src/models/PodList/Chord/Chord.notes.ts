/*import Pod from '../pod/Pod';
import utils from '../../Core.utils';
import { INTERVAL_PRESET_MAP } from '../pod/Interval';
import PodList from './PodList';

class Chord extends PodList {
	static getInversion({ A, n }) {
		let result = [...A];
		result = utils.rotate(result, n);
		const octave = INTERVAL_PRESET_MAP.P8.value;
		for (let i = 1; i <= n; i++) {
			const index = result.length - i;
			const a = result[index];
			result[index] = Pod.addPod({ a, b: octave })
		}
		return result;
	}

	static transpose({ A, b }) {
		return PodList.addPod({ A, b });
	}

	getName() {
		return '?';
	}

	getType() {
		return 'chord';
	}
}


export default Chord;*/
