import Model from "./Model";
import { IntervalId, IPod, NoteId } from "./Model.constants";
import { arePodsEqual, getDegree } from "./Pod.static";

export default class Pod extends Model {
  presetId: NoteId | IntervalId;
  pod: IPod;

  constructor(preset) {
    super();

    if (!preset) {
      //console.warn('Unknown pod preset', preset);
    } else {
      this.modelType = preset.modelType;
      this.presetId = preset.presetId;
      this.name = preset.name;
      this.tags = preset.tags;
      this.pod = preset.value;
    }
  }

  equals(b: Pod) {
    return arePodsEqual(this.pod, b.pod);
  }

  getDegree(): number {
    return getDegree(this.pod);
  }
}
