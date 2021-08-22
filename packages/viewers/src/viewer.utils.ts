import ColorUtils from "../../core/src/color/Color.utils";
import { IPod, PodType } from "../../core/src/models/Model.constants";
import IntervalUtils from "../../core/src/models/Pod/Interval/Interval.utils";
import NoteUtils from "../../core/src/models/Pod/Note/Note.utils";
import PodUtils from "../../core/src/models/Pod/Pod.utils";
import PodListUtils from "../../core/src/models/PodList/PodList.utils";

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

    const label = options.podType === PodType.Interval ? IntervalUtils.getName(reduced) : NoteUtils.getName(reduced);
    return { color, fgColor, label };
}

export default {
    getPodProps
}
