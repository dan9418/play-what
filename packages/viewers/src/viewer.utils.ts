import ColorUtils from "../../core/src/color/Color.utils";
import { ICompleteModelDetails, IPod } from "../../core/src/models/Model.constants";
import IntervalUtils from "../../core/src/models/Pod/Interval/Interval.utils";
import NoteUtils from "../../core/src/models/Pod/Note/Note.utils";
import PodUtils from "../../core/src/models/Pod/Pod.utils";
import PodListUtils from "../../core/src/models/PodList/PodList.utils";
import { DisplayType } from './../../core/src/models/Model.constants';
import { IViewerDetails, ViewerId, VIEWER_PRESET_MAP } from "./viewer.constants";

interface IPodProps {
    bgColor: string;
    fgColor: string;
    text: string;
}

interface IPodPropsOptions {
    displayType?: DisplayType;
    matchOctave?: boolean;
}

const DEFAULT_POD_PROP_OPTIONS: IPodPropsOptions = {
    displayType: DisplayType.Degree,
    matchOctave: false
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

    // Get colors and text
    let bgColor = '';
    let text = '';
    if (options.displayType === DisplayType.Degree) {
        text = IntervalUtils.getName(reducedInterval);
        bgColor = IntervalUtils.getPodColor(reducedInterval);
    }
    else {
        text = NoteUtils.getName(reducedNote);
        bgColor = IntervalUtils.getPodColor(reducedNote);
    }
    const fgColor = ColorUtils.getFgColor(bgColor);

    // Package data
    return { bgColor, fgColor, text };
}

const getDetails = (viewerId: ViewerId, presetId: string): IViewerDetails => {
    const viewerConfig = VIEWER_PRESET_MAP.get(viewerId);
    const presetConfig = viewerConfig.value.presets.find(p => p.id === presetId);

    return {
        viewerId,
        viewerName: viewerConfig.name,
        presetId,
        presetName: presetConfig.name,
        component: viewerConfig.value.component,
        props: presetConfig.props
    }
}

export default {
    getPodProps,
    getDetails
}
