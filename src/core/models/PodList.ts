import IntervalSpan from './Interval';
import Model from './Model';
import { ChordId, IPod, ModelId, ScaleId } from './Model.constants';
import { CHORD_PRESETS, SCALE_PRESETS } from './Model.presets';
import Note from './Note';
import { addPods, arePodListsEqual, getIndexOfPodAtPitch, listContainsSubset } from './Pod.static';

export interface IPodListOptions {
    root?: Note;
}

export default class PodList extends Model {

    modelId: ModelId | undefined;
    id: ChordId | ScaleId;
    root: Note;
    podList: IPod[];
    intervals: IntervalSpan[];
    notePods?: IPod[];
    notes?: Note;

    constructor(presetMap, presetId: ChordId | ScaleId, options?: IPodListOptions) {
        super();

        const preset = presetMap.get(presetId);
        if (!preset) throw new Error(`Unknown presetId: ${presetId}`);

        this.modelId = preset.modelId;
        this.id = preset.id;
        this.name = preset.name;
        this.tags = preset.tags;
        this.aliases = preset.aliases;
        this.podList = preset.value;
        this.intervals = preset.value.map(pod => IntervalSpan.fromValue(pod));

        if (options && options.root) {
            this.applyRoot(options.root);
        }
    }

    equals(B: PodList) {
        return arePodListsEqual(this.podList, B.podList);
    }

    getName = () => {
        return `${this.root ? `${this.root.name} ` : ''}${this.name}`;
    }

    getShortName = () => {
        const name = this.name
            .replace('Major', 'Maj')
            .replace('Minor', 'Min')
            .replace('Augmented', 'Aug')
            .replace('Diminished', 'Dim')
            .replace('Suspended', 'Sus')
            .replace('Dominant', 'Dom')
            .replace('st', '')
            .replace('nd', '')
            .replace('rd', '')
            .replace('th', '')
            .replace('Pentatonic', 'Pent');

        return name;
    }

    applyRoot(root: Note) {
        let notes;
        let notePods;
        try {
            notePods = this.intervals.map(ivl => addPods(ivl.pod, root.pod));
            notes = notePods.map(pod => new Note(pod));
        }
        catch (e) {
            console.error(e);
            throw new Error('Unable to apply root');
        }
        this.root = root;
        this.notes = notes;
        this.notePods = notePods;
        this.name = this.getName();
        return this;
    }

    getIntervalListString(): string {
        const nameArr = this.intervals.map(ivl => ivl.getName());
        return nameArr.join(', ');
    }

    isInSuperset(superset: IPod[]) {
        if (superset.length <= this.podList.length) return false;
        return listContainsSubset(superset, this.podList);
    }

    containsSubset(subset: IPod[]) {
        if (subset.length >= this.podList.length) return false;
        return listContainsSubset(this.podList, subset);
    }

    getSubchords() {
        return CHORD_PRESETS.filter(preset =>
            this.containsSubset(preset.value)
        );
    }

    getSuperchords() {
        return CHORD_PRESETS.filter(preset =>
            this.isInSuperset(preset.value)
        );
    }

    getSubscales() {
        return SCALE_PRESETS.filter(preset =>
            this.containsSubset(preset.value)
        );
    }

    getSuperscales() {
        return SCALE_PRESETS.filter(preset =>
            this.isInSuperset(preset.value)
        );
    }

    getPreview() {
        return this.getIntervalListString();
    }

    tryGetPodPairAtPitch(noteIndex: number): [IntervalSpan, Note] {
        const index = getIndexOfPodAtPitch(this.notePods, noteIndex, false);

        if (index == null) return [undefined, undefined];

        return [
            this.intervals[index],
            this.notes[index]
        ];
    }
}
