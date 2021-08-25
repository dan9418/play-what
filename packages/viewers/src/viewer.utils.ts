import ColorUtils from "../../core/src/color/Color.utils";
import { IPod, PodType } from "../../core/src/models/Model.constants";
import IntervalUtils from "../../core/src/models/Pod/Interval/Interval.utils";
import NoteUtils from "../../core/src/models/Pod/Note/Note.utils";
import PodUtils from "../../core/src/models/Pod/Pod.utils";
import PodListUtils from "../../core/src/models/PodList/PodList.utils";
import { IViewerDetails, ViewerId, VIEWER_PRESET_MAP } from "./viewer.constants";

interface IPodProps {
    color: string | null,
    fgColor: string | null,
    label: string | null
}

interface IPodPropsOptions {
    matchOctave?: boolean;
    podType?: PodType
}

const getPodProps = (podList: IPod[], noteIndex: number, options: IPodPropsOptions = { podType: PodType.Interval }): IPodProps => {
    const pod = PodListUtils.getPodAtPitch(podList, noteIndex, options.matchOctave);
    if (!pod) return null;

    const reduced = PodUtils.reduce(pod);

    const color = IntervalUtils.getPodColor(reduced);
    const fgColor = ColorUtils.getFgColor(color);

    // const label = options.podType === PodType.Interval ? IntervalUtils.getName(reduced) : NoteUtils.getName(reduced);
    const label = NoteUtils.getName(reduced);
    return { color, fgColor, label };
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
