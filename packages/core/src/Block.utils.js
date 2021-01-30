import PodUtils from './Pod.utils';
import PodListUtils from './PodList.utils';

const MAX = [12, 7];
const DEFAULT_POD = [0, 0];

class BlockUtils {
	static getName(block, options = {}) {
		const keyCenterPreset = PodUtils.findPreset(block.keyCenter, { podType: 'note' });
		const intervalsPreset = PodListUtils.findPreset(block.intervals, { podType: 'chord' });

		const keyCenter = keyCenterPreset ? keyCenterPreset.id : '?';
		const intervals = intervalsPreset ? intervalsPreset.id : '?';

		return `${keyCenter} + ${intervals}`;
	}
}

export default BlockUtils;
