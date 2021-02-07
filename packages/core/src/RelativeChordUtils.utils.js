import PodUtils from './Pod.utils';
import PodListUtils from './PodList.utils';

const MAX = [12, 7];
const DEFAULT_POD = [0, 0];

class RelativeChordUtils {
	static getName(relativechord, options = {}) {
		const keyCenterPreset = PodUtils.findPreset(relativechord.keyCenter, { podType: 'note' });
		const intervalsPreset = PodListUtils.findPreset(relativechord.intervals, { podType: 'chord' });

		const keyCenter = keyCenterPreset ? keyCenterPreset.id : '?';
		const intervals = intervalsPreset ? intervalsPreset.id : '?';

		return `${keyCenter} + ${intervals}`;
	}
}

export default RelativeChordUtils;
