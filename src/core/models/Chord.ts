import { getNumeralParts, getSymbol } from "./Chord.utils";
import { ChordId, ModelType, PresetType } from "./Model.constants";
import { CHORD_PRESET_MAP } from "./Model.presets";
import PodList from "./PodList";

export default class Chord extends PodList {
  modelType = ModelType.PodList;
  presetType = PresetType.Chord;

  constructor(presetId: ChordId, options: any = undefined) {
    super(CHORD_PRESET_MAP, presetId, options);
  }

  getSymbol(symbolType?) {
    return getSymbol(this.presetId, symbolType);
  }

  getNumeralParts(n, symbolType?): [string, string] {
    return getNumeralParts(this.presetId as ChordId, n, symbolType);
  }
}
