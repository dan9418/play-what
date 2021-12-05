import { IPod, IPreset, ModelId } from './Model.constants';
import { INTERVAL_PRESETS } from './Pod/Interval/Interval.constants';
import { CHORD_PRESETS } from './PodList/Chord/Chord.constants';
import { SCALE_PRESETS } from './PodList/Scale/Scale.constants';

export const ALL_MODELS: IPreset<IPod[]>[] = [
    ...INTERVAL_PRESETS.map(p => ({ ...p, value: [p.value], type: ModelId.Interval })),
    ...CHORD_PRESETS.map(p => ({ ...p, type: ModelId.Chord })),
    ...SCALE_PRESETS.map(p => ({ ...p, type: ModelId.Scale }))
]
