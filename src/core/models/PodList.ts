import { getName } from "./Interval.utils";
import Model from "./Model";
import { ChordId, IPod, ModelType, ScaleId } from "./Model.constants";
import { CHORD_PRESETS, SCALE_PRESETS } from "./Model.presets";
import {
  addPods,
  arePodListsEqual,
  getIndexOfPodAtPitch,
  getShortName,
  listContainsSubset,
} from "./Pod.static";

export interface IPodListOptions {
  root?: IPod;
}

export default class PodList extends Model {
  modelType: ModelType;
  presetId: ChordId | ScaleId;
  root: IPod;
  intervalPods: IPod[];
  notePods?: IPod[];

  constructor(
    presetMap,
    presetId: ChordId | ScaleId,
    options?: IPodListOptions
  ) {
    super();

    const preset = presetMap.get(presetId);
    if (!preset) throw new Error(`Unknown presetId: ${presetId}`);

    this.modelType = preset.modelType;
    this.presetId = preset.presetId;
    this.name = preset.name;
    this.tags = preset.tags;
    this.aliases = preset.aliases;
    this.intervalPods = preset.value;

    if (options && options.root) {
      this.applyRoot(options.root);
    }
  }

  equals(B: PodList) {
    return arePodListsEqual(this.intervalPods, B.intervalPods);
  }

  getName = () => {
    return this.name;
  };

  getShortName = () => {
    return getShortName(this.name);
  };

  applyRoot(root: IPod) {
    let notePods;
    try {
      notePods = this.intervalPods.map((ivl) => addPods(root, ivl));
    } catch (e) {
      console.error(e);
      throw new Error("Unable to apply root");
    }
    this.root = root;
    this.notePods = notePods;
    this.name = `${"ROOT"} ${this.name}`;
    return this;
  }

  getIntervalListString(): string {
    const nameArr = this.intervalPods.map((ivl) => getName(ivl));
    return nameArr.join(", ");
  }

  isInSuperset(superset: IPod[]) {
    if (superset.length <= this.intervalPods.length) return false;
    return listContainsSubset(superset, this.intervalPods);
  }

  containsSubset(subset: IPod[]) {
    if (subset.length >= this.intervalPods.length) return false;
    return listContainsSubset(this.intervalPods, subset);
  }

  getSubchords() {
    return CHORD_PRESETS.filter((preset) => this.containsSubset(preset.value));
  }

  getSuperchords() {
    return CHORD_PRESETS.filter((preset) => this.isInSuperset(preset.value));
  }

  getSubscales() {
    return SCALE_PRESETS.filter((preset) => this.containsSubset(preset.value));
  }

  getSuperscales() {
    return SCALE_PRESETS.filter((preset) => this.isInSuperset(preset.value));
  }

  getAllRelated() {
    return [
      ...this.getSubchords(),
      ...this.getSubscales(),
      ...this.getSuperchords(),
      ...this.getSuperscales(),
    ];
  }

  getPreview() {
    return this.getIntervalListString();
  }

  tryGetPodPairAtPitch(
    noteIndex: number
  ): [IPod, IPod] | [undefined, undefined] {
    if (!this.notePods) return [undefined, undefined];

    const index = getIndexOfPodAtPitch(this.notePods, noteIndex, false);

    if (index == null) return [undefined, undefined];

    return [this.intervalPods[index], (this.notePods as IPod[])[index]];
  }
}
