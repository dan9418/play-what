import IntervalSpan from './Interval';
import Model from './Model';
import { ChordId, IPod, NoteId, ScaleId } from './Model.constants';
import { CHORD_PRESETS, SCALE_PRESETS } from './Model.presets';
import Note from './Note';
import { arePodListsEqual, getIndexOfPodAtPitch } from './Pod.static';

export default class PodList extends Model {

    id: ChordId | ScaleId;
    root: Note;
    podList: IPod[];
    intervals: IntervalSpan[];
    notePods?: IPod[];
    notes?: Note;

    constructor(presetMap, presetId: ChordId | ScaleId, options) {
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
        return `${this.root ? `${this.root.getName()} ` : ''}${this.name}`;
    }

    applyRoot(noteId: NoteId) {
        let root;
        let notes;
        let notePods;
        try {
            root = new Note(noteId);
            notes = this.intervals.map(ivl => Note.fromRootedInterval(root, ivl));
            notePods = notes.map(n => n.pod);
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

        const intervalPods = this.podList;

        const chords = CHORD_PRESETS.filter(preset =>
            intervalPods.length !== preset.value.length &&
            Model.containsSubset(intervalPods, preset.value)
        );

        if (chords.length) {
            result.push({
                modelName: 'Chords',
                values: chords
            });
        }

        const scales = SCALE_PRESETS.filter(preset =>
            intervalPods.length !== preset.value.length &&
            Model.containsSubset(intervalPods, preset.value)
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

        const intervalPods = this.podList;

        const chords = CHORD_PRESETS.filter(preset =>
            intervalPods.length !== preset.value.length &&
            Model.containsSubset(preset.value, intervalPods)
        );

        if (chords.length) {
            result.push({
                modelName: 'Chords',
                values: chords
            });
        }

        const scales = SCALE_PRESETS.filter(preset =>
            intervalPods.length !== preset.value.length &&
            Model.containsSubset(preset.value, intervalPods)
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

    tryGetNoteAtPitch(noteIndex: number): Note {
        const index = getIndexOfPodAtPitch(this.notePods, noteIndex, false);

        if (index == null) return;

        return this.notes[index];
    }
}
