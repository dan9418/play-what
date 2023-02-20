import ArrayUtils from "../general/Array.utils";
import Chord from "./Chord";
import IntervalSpan from "./Interval";
import { IntervalId, IPod, ModelType, ScaleId, Tag } from "./Model.constants";
import { getIntervalFromValue, getScalefromValue } from "./Model.generation";
import { SCALE_PRESET_MAP } from "./Model.presets";
import { subtractPods } from "./Pod.static";
import PodList from "./PodList";
import { getAllNumerals } from "./Scale.utils";

export default class Scale extends PodList {
  modelType = ModelType.Scale;

  constructor(modelId: ScaleId, options: any = undefined) {
    super(SCALE_PRESET_MAP, modelId, options);
  }

  getMode(d): Scale {
    let rotated = [...this.podList];
    rotated = ArrayUtils.rotate(rotated, d);
    for (let i = this.podList.length - d; i < rotated.length; i++) {
      const curPod = rotated[i];
      rotated[i] = [curPod[0] + 12, curPod[1] + 7];
    }
    // Get difference between each interval
    const newPods: IPod[] = [[0, 0]];
    const newIntervals = [new IntervalSpan(IntervalId.P1)];
    for (let i = 0; i < rotated.length - 1; i++) {
      const newPod = subtractPods(rotated[i + 1], rotated[0]);
      newPods.push(newPod);
      const newIvl = getIntervalFromValue(newPod);
      newIntervals.push(newIvl);
    }
    const mode = getScalefromValue(newPods);

    return mode;
  }

  getAllModes(): Scale[] {
    const modes: Scale[] = [];
    if (
      this.tags.includes(Tag.Diatonic) ||
      this.tags.includes(Tag.Pentatonic) ||
      this.tags.includes(Tag.MelodicMode) ||
      this.tags.includes(Tag.HarmonicMode)
    ) {
      for (let i = 0; i < this.podList.length; i++) {
        modes.push(this.getMode(i));
      }
    }
    return modes;
  }

  getAllNumerals(): Chord[] {
    return getAllNumerals(
      this.podList,
      this.intervals,
      this.root,
      this.notes,
      this.tags
    );
  }
}
