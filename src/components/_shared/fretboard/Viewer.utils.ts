// import ColorUtils from "@pw-core/color/Color.utils";
// import IntervalUtils from "@pw-core/models/Interval.utils";
// import { IPod, ModelId } from "@pw-core/models/Model.constants";
// import Model from "@pw-core/models/Model.utils";
// import NoteUtils from "@pw-core/models/Note.utils";

// interface IPodProps {
//     bgColor: string;
//     fgColor: string;
//     text: string;
//     note: IPod,
//     interval: IPod
// }

// interface IPodPropsOptions {
//     modelId?: ModelId;
//     matchOctave?: boolean;
//     labelBy?: string;
// }

// const DEFAULT_POD_PROP_OPTIONS: IPodPropsOptions = {
//     modelId: ModelId.Interval,
//     matchOctave: false,
//     labelBy: 'interval'
// }

// const getPodProps = (modelDetails: any, noteIndex: number, userOptions?: IPodPropsOptions): IPodProps | null => {
//     const options = { ...DEFAULT_POD_PROP_OPTIONS, ...userOptions };

//     const notes = modelDetails.notes.value as IPod[];
//     const intervals = modelDetails.intervals.value as IPod[];

//     // Find pod
//     const podIndex = Model.getIndexOfPodAtPitch(notes, noteIndex, options.matchOctave);
//     if (podIndex === null) return null;

//     // Isolate pod
//     const note = notes[podIndex];
//     const interval = intervals[podIndex];

//     const isExtended = IntervalUtils.isExtendedInterval(interval);

//     // Reduce pod
//     const reducedNote = Model.reduce(note);
//     const reducedInterval = Model.reduce(interval);

//     // Get text
//     let text = '';
//     if (options.labelBy === 'interval') {
//         text = IntervalUtils.getName(reducedInterval);
//     }
//     else if (options.labelBy === 'note') {
//         text = NoteUtils.getName(reducedNote);
//     }

//     // Get colors
//     let bgColor = '';
//     if (options.modelId === ModelId.Interval) {
//         bgColor = IntervalUtils.getPodColor(reducedInterval);
//     }
//     else {
//         bgColor = IntervalUtils.getPodColor(reducedNote);
//     }
//     let fgColor = ColorUtils.getFgColor(bgColor);
//     if (isExtended) {
//         fgColor = bgColor;
//         bgColor = ColorUtils.getFgColor(fgColor);
//     }

//     // Package data
//     return { bgColor, fgColor, text, note, interval };
// }

// export default {
//     getPodProps
// }
