import { getNumeralParts, getNumeralText, getSymbol } from "./Chord.utils";
import Model from "./Model";
import { ChordId, IPod, ModelType } from "./Model.constants";
import { CHORD_PRESETS, CHORD_PRESET_MAP } from "./Model.presets";
import { arePodListsEqual, reducePodList } from "./Pod.static";
import PodList from "./PodList";

export default class Chord extends PodList {
  modelType = ModelType.Chord;

  constructor(modelId: ChordId, options: any = undefined) {
    super(CHORD_PRESET_MAP, modelId, options);
  }

  getSymbol(symbolType?) {
    return getSymbol(this.modelId, symbolType);
  }

  getNumeralParts(n, symbolType?): [string, string] {
    return getNumeralParts(this.modelId as ChordId, n, symbolType);
  }

  static fromValue = (value: IPod[]) =>
    Model.fromValue(
      CHORD_PRESETS,
      Chord,
      value,
      arePodListsEqual,
      reducePodList
    );
}
