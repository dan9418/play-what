import IntervalSpan from '@pw-core/models/Interval';
import Model from './Model';
import { ChordId, IPod, NoteId, ScaleId } from './Model.constants';
import { CHORD_PRESETS, SCALE_PRESETS } from './Model.presets';
import Note from './Note';
import { getIndexOfPodAtPitch } from './Pod.static';

export default class PodList extends Model {

    id: ChordId | ScaleId;
    intervals: IntervalSpan[];
    root: Note;

    constructor(presetMap, presetId: ChordId | ScaleId, options) {
        super();

        const preset = presetMap.get(presetId);
        if (!preset) throw new Error(`Unknown presetId: ${presetId}`);

        this.modelId = preset.modelId;
        this.id = preset.id;
        this.name = preset.name;
        this.tags = preset.tags;
        this.intervals = preset.value.map(pod => IntervalSpan.fromValue(pod));

        if (options && options.root) {
            this.applyRoot(options.root);
        }
    }

    /*static fromRootedIntervals = (root: Note, intervals: IntervalSpan[]) => {
        return intervals.map(ivl => Note.fromRootedInterval(root, ivl));
    }*/

    getName = () => {
        return `${this.root ? `${this.root.getName()} ` : ''}${this.name}`;
    }

    applyRoot(noteId: NoteId) {
        let note;
        try {
            note = new Note(noteId);
        }
        catch (e) {
            console.error(e);
            throw new Error('Unable to apply root');
        }
        this.root = note;
        return this;
    }

    getIntervalListClasses(): IntervalSpan {
        return this.intervals;
    }

    getIntervalListPods(): IPod[] {
        return this.getIntervalListClasses().map(ivl => ivl.pod);
    }

    getIntervalListString(): string {
        const nameArr = this.getIntervalListClasses().map(ivl => ivl.getName());
        return nameArr.join(', ');
    }

    getNoteListClasses() {
        if (!this.root) return;

        return this.intervals.map(ivl => Note.fromRootedInterval(this.root, ivl));
    }

    getNoteListPods(): IPod[] {
        return this.getNoteListClasses().map(ivl => ivl.pod);
    }

    /*getNoteListString(): string {
        const nameArr = this.getNoteListClasses().map(note => note.name);
        return nameArr.join(', ');
    }*/

    getSubsets() {
        const result = [
            {
                modelName: 'Intervals',
                values: this.intervals
            }
        ];

        if (this.root) {
            result.push({
                modelName: 'Notes',
                values: this.getNoteListClasses()
            });
        }

        const intervalPods = this.getIntervalListPods();

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

        const intervalPods = this.getIntervalListPods();

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
        const notePods = this.getNoteListPods();
        const index = getIndexOfPodAtPitch(notePods, noteIndex, false);

        if (index == null) return;

        const notes = this.getNoteListClasses();

        return notes[index];
    }
}
