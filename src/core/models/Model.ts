import { PresetId, ModelType, Tag } from "./Model.constants";

export default class Model {
  modelType: ModelType;
  presetId: PresetId;
  name: string;
  tags: Tag[];
  aliases: string[];

  getPreview() {
    return this.name || "unnamed";
  }
}
