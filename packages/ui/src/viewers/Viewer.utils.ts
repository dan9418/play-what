import ColorUtils from "../../../core/src/color/Color.utils";
import { ICompleteModelDetails, IPod, PodType } from "../../../core/src/models/Model.constants";
import IntervalUtils from "../../../core/src/models/Pod/Interval/Interval.utils";
import NoteUtils from "../../../core/src/models/Pod/Note/Note.utils";
import PodUtils from "../../../core/src/models/Pod/Pod.utils";
import PodListUtils from "../../../core/src/models/PodList/PodList.utils";
import { IViewerDetails, IViewerProps, ViewerId, VIEWER_PRESET_MAP } from "./Viewer.constants";

interface IPodProps {
    bgColor: string;
    fgColor: string;
    text: string;
    note: IPod,
    interval: IPod
}

interface IPodPropsOptions {
    podType?: PodType;
    matchOctave?: boolean;
    labelBy?: string;
}

const DEFAULT_POD_PROP_OPTIONS: IPodPropsOptions = {
    podType: PodType.Interval,
    matchOctave: false,
    labelBy: 'interval'
}

const getPodProps = (modelDetails: ICompleteModelDetails, noteIndex: number, userOptions?: IPodPropsOptions): IPodProps | null => {
    const options = { ...DEFAULT_POD_PROP_OPTIONS, ...userOptions };

    const notes = modelDetails.notes.value as IPod[];
    const intervals = modelDetails.intervals.value as IPod[];

    // Find pod
    const podIndex = PodListUtils.getIndexOfPodAtPitch(notes, noteIndex, options.matchOctave);
    if (podIndex === null) return null;

    // Isolate pod
    const note = notes[podIndex];
    const interval = intervals[podIndex];

    // Reduce pod
    const reducedNote = PodUtils.reduce(note);
    const reducedInterval = PodUtils.reduce(interval);

    // Get text
    let text = '';
    if (options.labelBy === 'interval') {
        text = IntervalUtils.getName(reducedInterval);
    }
    else if (options.labelBy === 'note') {
        text = NoteUtils.getName(reducedNote);
    }

    // Get colors
    let bgColor = '';
    if (options.podType === PodType.Interval) {
        bgColor = IntervalUtils.getPodColor(reducedInterval);
    }
    else {
        bgColor = IntervalUtils.getPodColor(reducedNote);
    }
    const fgColor = ColorUtils.getFgColor(bgColor);
    /*if (isExtended) {
        fgColor = bgColor;
        bgColor = ColorUtils.getFgColor(fgColor);
    }*/

    // Package data
    return { bgColor, fgColor, text, note, interval };
}

const getDetails = (viewerId: ViewerId, viewerProps: IViewerProps): IViewerDetails => {
    const viewerConfig = VIEWER_PRESET_MAP.get(viewerId);
    //const presetConfig = viewerConfig.value.presets.find(p => p.id === presetId);

    return {
        viewerId,
        viewerName: viewerConfig.name,
        component: viewerConfig.value.component,
        props: { ...viewerConfig.value.defaultProps, ...viewerProps }
    }
}

export default {
    getPodProps,
    getDetails
}
