import IntervalSpan from './Interval';
import Model from './Model';
import { ChordId, IPod, ScaleId } from './Model.constants';
import { CHORD_PRESETS, SCALE_PRESETS } from './Model.presets';
import Note from './Note';
import { addPods, arePodListsEqual, getIndexOfPodAtPitch, listContainsSubset } from './Pod.static';

export interface IPodListOptions {
    root?: Note;
}

export default class PodList extends Model {

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

    getSubsets() {
        const result: any[] = [
            {
                modelName: 'Intervals',
                values: this.intervals
            }
        ];

        if (this.root) {
            result.push({
                modelName: 'Notes',
                values: this.notes
            });
        }

        const chords = CHORD_PRESETS.filter(preset =>
            this.containsSubset(preset.value)
        );

        if (chords.length) {
            result.push({
                modelName: 'Chords',
                values: chords
            });
        }

        const scales = SCALE_PRESETS.filter(preset =>
            this.containsSubset(preset.value)
        );

        if (scales.length) {
            result.push({
                modelName: 'Scales',
                values: scales
            });
        }

        return result;
    }

    getSupersets() {
        const result = [];

        const chords = CHORD_PRESETS.filter(preset =>
            this.isInSuperset(preset.value)
        );

        if (chords.length) {
            result.push({
                modelName: 'Chords',
                values: chords
            });
        }

        const scales = SCALE_PRESETS.filter(preset =>
            this.isInSuperset(preset.value)
        );

        if (scales.length) {
            result.push({
                modelName: 'Scales',
                values: scales
            });
        }

        return result;
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
